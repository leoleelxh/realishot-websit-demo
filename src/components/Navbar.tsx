import Link from 'next/link';

const categories = [
  '美妆个护',
  '饮料',
  '食品',
  '营养品',
  '家居工业',
  '油漆涂料',
  '宠物食品',
  '制药',
  '海鲜',
  '咖啡'
];

export default function Navbar() {
  return (
    <nav className="relative overflow-hidden bg-gradient-to-r from-purple-500 via-pink-400 to-purple-400">
      {/* 动态渐变叠加层 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-[-50%] rotate-[30deg] 
                        bg-gradient-to-r from-purple-400/0 via-white/20 to-pink-300/0 
                        blur-3xl animate-gradient-move"></div>
        </div>
      </div>
      
      {/* 内容区域 */}
      <div className="relative max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-6 py-6">
          <div className="text-3xl font-bold text-white tracking-wide">包材一站通 | 包材设计展销平台</div>
          <div className="flex gap-4">
            <Link 
              href="/login" 
              className="group relative px-8 py-2.5 overflow-hidden rounded-full transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg 
                            transition-all duration-500 group-hover:from-white/30 group-hover:to-white/20"></div>
              <span className="relative text-sm text-white">登录</span>
            </Link>
            <Link 
              href="/register" 
              className="group relative px-8 py-2.5 overflow-hidden rounded-full transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500 bg-gradient-to-r from-purple-100 to-pink-100"></div>
              <span className="relative text-sm text-purple-500">注册</span>
            </Link>
          </div>
        </div>

        <div className="px-6 py-4 overflow-x-auto">
          <div className="flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category}`}
                className="text-sm whitespace-nowrap text-white/90 hover:text-white py-2
                          border-b-2 border-transparent hover:border-white
                          transition-all duration-300"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 