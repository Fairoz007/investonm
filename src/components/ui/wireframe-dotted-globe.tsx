"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { feature } from "topojson-client"

interface RotatingEarthProps {
    width?: number
    height?: number
    className?: string
}

export default function RotatingEarth({ width = 800, height = 600, className = "" }: RotatingEarthProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [error, setError] = useState<string | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (!canvasRef.current || !isVisible) return

        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        if (!context) return

        let disposed = false

        // Set up responsive dimensions
        const containerWidth = Math.min(width, window.innerWidth - 40)
        const containerHeight = Math.min(height, window.innerHeight - 100)
        const radius = Math.min(containerWidth, containerHeight) / 2.5

        const dpr = window.devicePixelRatio || 1
        canvas.width = containerWidth * dpr
        canvas.height = containerHeight * dpr
        canvas.style.width = `${containerWidth}px`
        canvas.style.height = `${containerHeight}px`
        // Reset transform first (prevents scaling accumulating between renders)
        context.setTransform(dpr, 0, 0, dpr, 0, 0)

        // Create projection and path generator for Canvas
        const projection = d3
            .geoOrthographic()
            .scale(radius)
            .translate([containerWidth / 2, containerHeight / 2])
            .clipAngle(90)

        const path = d3.geoPath().projection(projection).context(context)

        interface DotData {
            lng: number
            lat: number
            visible: boolean
        }

        const allDots: DotData[] = []
        let landFeatures: any

        const render = () => {
            // Clear canvas
            context.clearRect(0, 0, containerWidth, containerHeight)

            const currentScale = projection.scale()
            const scaleFactor = currentScale / radius

            // Draw ocean (globe background) - transparent
            context.beginPath()
            context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI)
            context.fillStyle = "transparent"
            context.fill()

            // Outer glow for the globe outline
            context.shadowColor = "rgba(255, 255, 255, 0.2)"
            context.shadowBlur = 10
            context.strokeStyle = "rgba(255, 255, 255, 0.2)"
            context.lineWidth = 1.5 * scaleFactor
            context.stroke()
            context.shadowBlur = 0 // Reset

            if (landFeatures) {
                // Draw graticule
                const graticule = d3.geoGraticule()
                context.beginPath()
                path(graticule())
                context.strokeStyle = "rgba(255, 255, 255, 0.05)"
                context.lineWidth = 0.5 * scaleFactor
                context.stroke()

                // Draw land outlines with glow
                context.beginPath()
                landFeatures.features.forEach((feature: any) => {
                    path(feature)
                })
                context.shadowColor = "rgba(255, 255, 255, 0.6)"
                context.shadowBlur = 8
                context.strokeStyle = "rgba(255, 255, 255, 0.3)"
                context.lineWidth = 1 * scaleFactor
                context.stroke()
                context.shadowBlur = 0

                // Draw halftone dots with glow - batching them for performance
                context.fillStyle = "rgba(255, 255, 255, 0.8)"
                context.shadowColor = "rgba(255, 255, 255, 0.8)"
                context.shadowBlur = 4

                context.beginPath()
                allDots.forEach((dot) => {
                    const projected = projection([dot.lng, dot.lat])
                    if (
                        projected &&
                        projected[0] >= 0 &&
                        projected[0] <= containerWidth &&
                        projected[1] >= 0 &&
                        projected[1] <= containerHeight
                    ) {
                        const r = 1.2 * scaleFactor
                        context.moveTo(projected[0] + r, projected[1])
                        context.arc(projected[0], projected[1], r, 0, 2 * Math.PI)
                    }
                })
                context.fill()
                context.shadowBlur = 0
            }
        }

        const yieldToBrowser = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))

        const buildDotsForLand = async (geojson: any) => {
            // Allocate a bounded total dot count for performance.
            const TOTAL_DOTS = 2200
            const areas = geojson.features.map((f: any) => d3.geoArea(f))
            const totalArea = areas.reduce((a: number, b: number) => a + b, 0) || 1

            let totalDots = 0

            for (let i = 0; i < geojson.features.length; i++) {
                if (disposed) return
                const f = geojson.features[i]
                const area = areas[i]
                const target = Math.max(8, Math.round((area / totalArea) * TOTAL_DOTS))

                const [[minLng, minLat], [maxLng, maxLat]] = d3.geoBounds(f)
                let attempts = 0
                let accepted = 0
                const maxAttempts = target * 30

                while (accepted < target && attempts < maxAttempts) {
                    if (disposed) return
                    attempts++

                    const lng = minLng + Math.random() * (maxLng - minLng)
                    const lat = minLat + Math.random() * (maxLat - minLat)
                    if (d3.geoContains(f, [lng, lat])) {
                        allDots.push({ lng, lat, visible: true })
                        accepted++
                        totalDots++
                    }

                    if (attempts % 400 === 0) {
                        await yieldToBrowser()
                    }
                }
            }

            console.log(`[globe] Dots generated: ${totalDots}`)
        }

        const loadWorldData = async () => {
            try {
                setError(null)

                // Prefer CDN topojson (smaller + faster + more reliable than raw GitHub).
                const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json")
                if (!response.ok) throw new Error("Failed to load land data")

                const topo = await response.json()
                landFeatures = feature(topo, topo.objects.land) as any

                await buildDotsForLand(landFeatures)
                render()
            } catch (err) {
                setError("Failed to load land map data")
            }
        }

        // Set up rotation and interaction
        const rotation: [number, number, number] = [0, 0, 0]
        let autoRotate = true
        const rotationSpeed = 0.5

        const rotate = () => {
            if (autoRotate) {
                rotation[0] += rotationSpeed
                projection.rotate(rotation)
                render()
            }
        }

        // Auto-rotation timer
        const rotationTimer = d3.timer(rotate)

        const handleMouseDown = (event: MouseEvent) => {
            autoRotate = false
            const startX = event.clientX
            const startY = event.clientY
            const startRotation = [...rotation]

            const handleMouseMove = (moveEvent: MouseEvent) => {
                const sensitivity = 0.5
                const dx = moveEvent.clientX - startX
                const dy = moveEvent.clientY - startY

                rotation[0] = startRotation[0] + dx * sensitivity
                rotation[1] = startRotation[1] - dy * sensitivity
                rotation[1] = Math.max(-90, Math.min(90, rotation[1]))

                projection.rotate(rotation)
                render()
            }

            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove)
                document.removeEventListener("mouseup", handleMouseUp)

                setTimeout(() => {
                    autoRotate = true
                }, 10)
            }

            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
        }

        canvas.addEventListener("mousedown", handleMouseDown)

        // Load the world data
        loadWorldData()

        // Cleanup
        return () => {
            disposed = true
            rotationTimer.stop()
            canvas.removeEventListener("mousedown", handleMouseDown)
        }
    }, [width, height, isVisible])

    if (error) {
        return (
            <div className={`flex items-center justify-center rounded-2xl p-8 ${className}`}>
                <div className="text-center">
                    <p className="text-destructive font-semibold mb-2">Error loading Earth visualization</p>
                    <p className="text-muted-foreground text-sm">{error}</p>
                </div>
            </div>
        )
    }

    return (
        <div ref={containerRef} className={`relative ${className} pointer-events-none`}>
            <canvas
                ref={canvasRef}
                className="w-full h-auto rounded-2xl pointer-events-auto"
                style={{ maxWidth: "100%", height: "auto", background: "transparent" }}
            />
        </div>
    )
}
