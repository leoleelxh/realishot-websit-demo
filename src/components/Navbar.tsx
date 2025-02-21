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
    <nav className="relative overflow-hidden">
      {/* 添加动态背景效果 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-300">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 animate-gradient-x bg-[length:200%_100%] bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-2xl font-bold text-white">Realibox</div>
          <div className="flex gap-4">
            <Link 
              href="/login" 
              className="group relative px-6 py-2 overflow-hidden rounded-full transition-all duration-300"
            >
              {/* 动态背景效果 */}
              <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-lg transition-all duration-500 group-hover:bg-opacity-30"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-400/30 to-pink-400/30"></div>
              <span className="relative text-white">登录</span>
            </Link>
            <Link 
              href="/register" 
              className="group relative px-6 py-2 overflow-hidden rounded-full transition-all duration-300"
            >
              {/* 动态背景效果 */}
              <div className="absolute inset-0 bg-white transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-100 to-pink-100"></div>
              <span className="relative text-purple-500">注册</span>
            </Link>
          </div>
        </div>
        {/* 类别导航 */}
        <div className="px-4 py-2 overflow-x-auto">
          <div className="flex space-x-6">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category}`}
                className="whitespace-nowrap text-white hover:text-purple-100 py-2
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