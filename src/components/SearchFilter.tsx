interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchFilter({ searchTerm, onSearchChange }: SearchFilterProps) {
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-lg p-6 rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-purple-800">搜索结果: "美妆个护"</h1>
        <div className="flex gap-4 items-center mb-6">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="搜索产品..."
                className="w-full px-6 py-3 border border-purple-100 rounded-full
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
          {['按直径筛选', '按容量筛选', '按产品类型筛选', '按材质筛选'].map((filter) => (
            <button
              key={filter}
              className="px-6 py-2 border border-purple-200 rounded-full
                        text-purple-600 hover:bg-purple-50 hover:border-purple-300
                        transition-all duration-300"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 