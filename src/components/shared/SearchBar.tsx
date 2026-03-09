import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchBar = ({
  placeholder = 'I am looking for...',
  onSearch,
}: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full h-[42px] pl-5 pr-12 bg-black/40 backdrop-blur-md border border-white/20 rounded-full
                   text-white text-xs placeholder:text-white/50 placeholder:font-medium tracking-wide
                   focus:outline-none focus:border-white/40 focus:bg-black/60
                   transition-all duration-300 font-poppins"
      />
      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/50 hover:text-white transition-colors"
        aria-label="Search"
      >
        <Search className="w-4 h-4" />
      </button>
    </form>
  );
};
