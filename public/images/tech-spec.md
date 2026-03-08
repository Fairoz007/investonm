# invest Oman - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| State Management | React useState/useRef |

## 2. Tailwind Configuration Extensions

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B8A9',
          dark: '#009688',
          light: '#4DD0E1'
        },
        secondary: '#1A3A3A',
        background: {
          dark: '#0D1F1F',
          light: '#F5F7F7'
        },
        accent: {
          purple: '#6B46C1',
          cyan: '#06B6D4'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  }
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)

| Component | Usage | Customization |
|-----------|-------|---------------|
| Button | CTAs, navigation | Custom teal variant, ghost variant |
| Input | Search bar | Dark theme styling |
| DropdownMenu | Navigation dropdowns | Dark background, hover effects |
| Sheet | Mobile navigation | Slide from right |
| Tabs | Content sections | Custom styling |

### Custom Components

| Component | Props | Description |
|-----------|-------|-------------|
| `HeroSlider` | `slides: Slide[], autoPlayInterval?: number` | Fullscreen image slider with crossfade |
| `Navigation` | `transparent?: boolean` | Sticky header with scroll effect |
| `NavDropdown` | `items: NavItem[], label: string` | Dropdown menu for nav items |
| `SliderDots` | `count: number, activeIndex: number, onClick: (i) => void` | Pagination dots |
| `SearchBar` | `placeholder: string, onSearch: (q) => void` | Hero search input |
| `StatCard` | `value: string, label: string, icon?: ReactNode` | Statistics display |
| `InvestCard` | `title: string, description: string, gradient: string` | Why invest cards |
| `ScrollReveal` | `children, delay?: number` | Scroll-triggered animation wrapper |

## 4. Animation Implementation Plan

| Interaction | Tech Choice | Implementation |
|-------------|-------------|----------------|
| Hero Content Entrance | Framer Motion | `staggerChildren: 0.1`, `y: 20 -> 0`, `opacity: 0 -> 1` |
| Hero Slider Crossfade | Framer Motion | `AnimatePresence` with `mode="wait"`, `opacity` transition 1000ms |
| Slider Auto-advance | React useState + useEffect | `setInterval(6000)`, cleanup on unmount |
| Nav Scroll Effect | React useState + scroll listener | Toggle `scrolled` class at 50px scroll |
| Nav Dropdown | Framer Motion | `initial: {opacity: 0, y: -10}`, `animate: {opacity: 1, y: 0}` |
| Button Hover | Tailwind + CSS | `hover:bg-primary-dark hover:-translate-y-0.5 transition-all` |
| Card Hover | Tailwind | `hover:-translate-y-1 hover:shadow-lg transition-all duration-300` |
| Scroll Reveal | Framer Motion | `whileInView`, `viewport: {once: true, margin: "-100px"}` |
| Slider Dots | Framer Motion | `layoutId` for active indicator, `scale` animation |
| Arrow Navigation | Tailwind | `opacity-0 group-hover:opacity-100 transition-opacity` |

### Animation Timing Constants

```typescript
const ANIMATION = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.6,
    slider: 1.0
  },
  easing: {
    default: [0.4, 0, 0.2, 1],
    entrance: [0.16, 1, 0.3, 1],
    exit: [0.4, 0, 1, 1]
  },
  slider: {
    interval: 6000,
    transitionDuration: 1000
  }
};
```

## 5. Project File Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── sheet.tsx
│   │   └── tabs.tsx
│   ├── layout/
│   │   ├── Navigation.tsx     # Main navigation header
│   │   ├── NavDropdown.tsx    # Dropdown menu item
│   │   ├── MobileNav.tsx      # Mobile navigation sheet
│   │   └── Footer.tsx         # Site footer
│   ├── sections/
│   │   ├── HeroSection.tsx    # Hero slider section
│   │   ├── WhyInvestSection.tsx
│   │   ├── VisionSection.tsx
│   │   ├── StatsSection.tsx
│   │   └── ServicesSection.tsx
│   └── shared/
│       ├── HeroSlider.tsx     # Reusable slider component
│       ├── SliderDots.tsx     # Pagination dots
│       ├── SearchBar.tsx      # Search input
│       ├── ScrollReveal.tsx   # Scroll animation wrapper
│       └── StatCard.tsx       # Statistics card
├── hooks/
│   ├── useScrollPosition.ts   # Track scroll position
│   ├── useSlider.ts           # Slider state management
│   └── useInView.ts           # Intersection observer hook
├── lib/
│   ├── utils.ts               # Utility functions (cn)
│   └── constants.ts           # Animation constants, nav items
├── types/
│   └── index.ts               # TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css
```

## 6. Package Installation Commands

```bash
# Initialize project (already done via init script)
# cd /mnt/okcomputer/output/app

# Animation library
npm install framer-motion

# Icons (already included with shadcn)
# lucide-react is pre-installed

# Additional utilities
npm install clsx tailwind-merge
```

## 7. Key Implementation Details

### Hero Slider Logic

```typescript
// useSlider hook
const useSlider = (slideCount: number, autoPlayInterval = 6000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [slideCount, autoPlayInterval, isPaused]);

  const goTo = (index: number) => setCurrentIndex(index);
  const next = () => setCurrentIndex((prev) => (prev + 1) % slideCount);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);

  return { currentIndex, goTo, next, prev, setIsPaused };
};
```

### Navigation Scroll Effect

```typescript
// useScrollPosition hook
const useScrollPosition = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};
```

### Scroll Reveal Animation

```typescript
// ScrollReveal component
const ScrollReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1]
    }}
  >
    {children}
  </motion.div>
);
```

## 8. Performance Considerations

1. **Image Optimization**: Use `loading="lazy"` for below-fold images
2. **Animation Performance**: Only animate `transform` and `opacity`
3. **Will-change**: Add `will-change: transform` to animated elements
4. **Reduced Motion**: Respect `prefers-reduced-motion` media query
5. **Code Splitting**: Lazy load sections below the fold

## 9. Accessibility Checklist

- [ ] Keyboard navigation for slider
- [ ] ARIA labels on interactive elements
- [ ] Focus management in dropdowns
- [ ] Alt text on all images
- [ ] Color contrast 4.5:1 minimum
- [ ] Skip to content link
- [ ] Screen reader announcements for slider changes
