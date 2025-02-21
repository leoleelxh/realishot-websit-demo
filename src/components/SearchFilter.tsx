'use client';

import { useState } from 'react';

interface FilterOption {
  type: string;
  options: string[];
}

const filterOptions: FilterOption[] = [
  {
    type: '按直径筛选',
    options: ['35mm', '50mm', '60mm', '75mm']
  },
  {
    type: '按容量筛选',
    options: ['30ml', '50ml', '100ml', '200ml']
  },
  {
    type: '按产品类型筛选',
    options: ['乳液瓶', '精华瓶', '喷雾瓶', '膏霜瓶']
  },
  {
    type: '按材质筛选',
    options: ['玻璃', 'PET', 'PETG', 'PP']
  }
];

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFilterChange: (type: string, value: string | null) => void;
  activeFilters: {[key: string]: string};
}

export default function SearchFilter({ 
  searchTerm, 
  onSearchChange, 
  onFilterChange,
  activeFilters 
}: SearchFilterProps) {
  const [showOptions, setShowOptions] = useState<string | null>(null);

  return (
    <div className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 
                      text-transparent bg-clip-text">
          搜索结果: &quot;美妆个护&quot;
        </h1>
        
        <div className="flex gap-4 items-center mb-6">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="搜索产品..."
                className="w-full px-6 py-2.5 text-sm border border-purple-100 rounded-full
                          focus:ring-2 focus:ring-purple-200 focus:border-purple-300
                          outline-none transition-all duration-300"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2
                                text-purple-400 hover:text-purple-600">
                🔍
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {filterOptions.map((filter) => (
            <div key={filter.type} className="relative">
              <button
                className={`relative px-6 py-2 text-sm border rounded-full transition-all duration-300 overflow-hidden
                            ${activeFilters[filter.type] 
                              ? 'border-transparent'
                              : 'border-purple-200 text-purple-600 hover:border-purple-300'}`}
                onClick={() => {
                  if (activeFilters[filter.type]) {
                    onFilterChange(filter.type, null);
                    setShowOptions(null);
                  } else {
                    setShowOptions(showOptions === filter.type ? null : filter.type);
                  }
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 
                                transition-opacity duration-300 
                                ${activeFilters[filter.type] ? 'opacity-100' : 'group-hover:opacity-10'}`}
                />
                <span className={`relative ${activeFilters[filter.type] ? 'text-white' : ''}`}>
                  {filter.type}
                  {activeFilters[filter.type] && (
                    <span className="ml-2">: {activeFilters[filter.type]}</span>
                  )}
                </span>
              </button>
              
              {/* 下拉选项 */}
              {showOptions === filter.type && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-xl
                              border border-purple-100 py-2 z-[100]">
                  <div className="relative">
                    <div className="absolute -top-2 left-4 w-3 h-3 bg-white transform rotate-45 border-l border-t border-purple-100"></div>
                    <div className="relative bg-white rounded-lg overflow-hidden">
                      {filter.options.map((option) => (
                        <button
                          key={option}
                          className={`w-full text-left px-4 py-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 text-sm
                                    ${activeFilters[filter.type] === option ? 'text-purple-600 font-medium' : 'text-gray-600'}
                                    transition-colors duration-300`}
                          onClick={() => {
                            onFilterChange(filter.type, option);
                            setShowOptions(null);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 