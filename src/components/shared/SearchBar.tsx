import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { SEARCH_DATA, CATEGORY_STYLES, type SearchResult } from '@/lib/searchData';

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Debounce a value by `delay` ms */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}

/** Return segments of `text`, wrapping matches with a marker */
function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={i}
        className="bg-transparent text-white font-bold underline decoration-blue-400 underline-offset-2"
      >
        {part}
      </mark>
    ) : (
      <span key={i} className="text-slate-400">
        {part}
      </span>
    )
  );
}

/** Score a result against a query — higher = better match */
function scoreResult(result: SearchResult, query: string): number {
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  let score = 0;
  if (result.title.toLowerCase().includes(q)) score += 10;
  if (result.description.toLowerCase().includes(q)) score += 5;
  if (result.tags.some((t) => t.toLowerCase().includes(q))) score += 7;
  if (result.category.toLowerCase().includes(q)) score += 3;
  return score;
}

// ─── ResultItem ───────────────────────────────────────────────────────────────

interface ResultItemProps {
  result: SearchResult;
  query: string;
  isActive: boolean;
  onSelect: (result: SearchResult) => void;
  onMouseEnter: () => void;
}

const ResultItem: React.FC<ResultItemProps> = ({
  result,
  query,
  isActive,
  onSelect,
  onMouseEnter,
}) => {
  const styles = CATEGORY_STYLES[result.category];

  return (
    <motion.button
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -8 }}
      onClick={() => onSelect(result)}
      onMouseEnter={onMouseEnter}
      className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-all duration-150 group cursor-pointer rounded-xl mx-1 my-0.5 ${
        isActive
          ? 'bg-white/10 shadow-inner'
          : 'hover:bg-white/5'
      }`}
    >
      {/* Category badge */}
      <span
        className={`mt-0.5 flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${styles.bg} ${styles.color}`}
      >
        {result.category}
      </span>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-white leading-snug truncate">
          {highlightText(result.title, query)}
        </p>
        <p className="text-xs text-slate-500 mt-0.5 leading-snug line-clamp-1">
          {highlightText(result.description, query)}
        </p>
      </div>

      {/* Arrow indicator */}
      <ArrowRight
        className={`w-4 h-4 flex-shrink-0 mt-1 transition-all duration-200 ${
          isActive ? 'text-blue-400 translate-x-0.5' : 'text-white/20 group-hover:text-white/40'
        }`}
      />
    </motion.button>
  );
};

// ─── SearchBar ────────────────────────────────────────────────────────────────

export interface SearchBarProps {
  placeholder?: string;
  maxResults?: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'I am looking for...',
  maxResults = 8,
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang ?? 'en';

  const debouncedQuery = useDebounce(query, 180);

  // ── Search logic ──────────────────────────────────────────────────────────
  const results = useMemo<SearchResult[]>(() => {
    const q = debouncedQuery.trim();
    if (!q) return [];
    return SEARCH_DATA
      .map((r) => ({ result: r, score: scoreResult(r, q) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxResults)
      .map(({ result }) => result);
  }, [debouncedQuery, maxResults]);

  // Popular suggestions shown when input is focused but empty
  const suggestions = useMemo(
    () =>
      query.trim() === ''
        ? SEARCH_DATA.filter((r) =>
            ['tourism', 'energy', 'logistics', 'reports', 'about-oman', 'contact'].includes(r.id)
          )
        : [],
    [query]
  );

  const visibleItems = query.trim() === '' ? suggestions : results;
  const showNoResults =
    debouncedQuery.trim().length > 0 && results.length === 0;

  // ── Dropdown open/close ───────────────────────────────────────────────────
  const openDropdown = () => {
    setIsOpen(true);
    setActiveIndex(-1);
  };

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setActiveIndex(-1);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [closeDropdown]);

  // ── Keyboard navigation ───────────────────────────────────────────────────
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') openDropdown();
      return;
    }

    const count = visibleItems.length;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, count - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && visibleItems[activeIndex]) {
          handleSelect(visibleItems[activeIndex]);
        } else if (query.trim()) {
          handleSelect(visibleItems[0] ?? null);
        }
        break;
      case 'Escape':
        e.preventDefault();
        closeDropdown();
        inputRef.current?.blur();
        break;
    }
  };

  // Auto-scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const item = listRef.current.children[activeIndex] as HTMLElement;
      item?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  // ── Select handler ────────────────────────────────────────────────────────
  const handleSelect = (result: SearchResult | null) => {
    if (!result) return;
    closeDropdown();
    setQuery('');
    navigate(`/${currentLang}/${result.path}`);
  };

  const handleClear = () => {
    setQuery('');
    openDropdown();
    inputRef.current?.focus();
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div ref={containerRef} className="relative w-full max-w-sm">
      {/* Glow aura */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-700 pointer-events-none ${
          isOpen
            ? 'bg-blue-500/15 blur-[20px] scale-110'
            : 'bg-white/5 blur-[10px] opacity-0 group-hover:opacity-100'
        }`}
      />

      {/* Input row */}
      <div
        className={`relative flex items-center bg-black/40 backdrop-blur-3xl border rounded-full h-[54px] px-5 transition-all duration-500 shadow-2xl overflow-hidden ${
          isOpen ? 'border-blue-500/40 shadow-blue-500/10' : 'border-white/10 hover:border-white/20'
        }`}
      >
        <Search
          className={`w-4 h-4 flex-shrink-0 mr-3 transition-colors duration-300 ${
            isOpen ? 'text-blue-400' : 'text-white/40'
          }`}
        />
        <input
          ref={inputRef}
          id="hero-search-input"
          type="text"
          value={query}
          placeholder={placeholder}
          autoComplete="off"
          aria-label="Search the site"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-activedescendant={activeIndex >= 0 ? `search-item-${activeIndex}` : undefined}
          onChange={(e) => {
            setQuery(e.target.value);
            openDropdown();
          }}
          onFocus={openDropdown}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none text-white placeholder:text-slate-400 text-sm font-medium w-full outline-none focus:ring-0"
        />
        <AnimatePresence>
          {query.length > 0 && (
            <motion.button
              key="clear"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              onClick={handleClear}
              aria-label="Clear search"
              className="flex-shrink-0 ml-2 text-white/30 hover:text-white/70 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (visibleItems.length > 0 || showNoResults) && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            role="listbox"
            aria-label="Search results"
            className="absolute top-[62px] left-0 right-0 z-[200] rounded-2xl border border-white/10 bg-[#0a0a1a]/95 backdrop-blur-3xl shadow-2xl shadow-black/60 overflow-hidden"
            style={{ minWidth: 320, maxWidth: '100vw' }}
          >
            {/* Section header */}
            <div className="flex items-center gap-2 px-4 pt-3 pb-1">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                {query.trim() === ''
                  ? 'Popular'
                  : `${visibleItems.length} result${visibleItems.length !== 1 ? 's' : ''}`}
              </span>
            </div>

            {/* Result list */}
            {visibleItems.length > 0 && (
              <div
                ref={listRef}
                className="max-h-[360px] overflow-y-auto overscroll-contain px-1 py-1 scroll-smooth"
                style={{ scrollbarWidth: 'thin' }}
              >
                <AnimatePresence mode="popLayout">
                  {visibleItems.map((result, idx) => (
                    <ResultItem
                      key={result.id}
                      result={result}
                      query={debouncedQuery}
                      isActive={activeIndex === idx}
                      onSelect={handleSelect}
                      onMouseEnter={() => setActiveIndex(idx)}
                    />
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* No results state */}
            {showNoResults && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-5 py-6 text-center"
              >
                <p className="text-sm text-slate-400 font-medium">
                  No results for{' '}
                  <span className="text-white font-bold">"{debouncedQuery}"</span>
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Try: sectors, tourism, energy, reports, contact
                </p>
              </motion.div>
            )}

            {/* Footer hint */}
            <div className="flex items-center justify-between border-t border-white/5 px-4 py-2 mt-1">
              <span className="text-[10px] text-slate-600 font-mono">↑↓ navigate</span>
              <span className="text-[10px] text-slate-600 font-mono">↵ select · Esc close</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
