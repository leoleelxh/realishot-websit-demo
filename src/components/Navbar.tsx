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
    <nav className="bg-gradient-to-r from-purple-400 via-pink-300 to-purple-300">
      <div className="max-w-7xl mx-auto">
        {/* 顶部导航 */}
        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-2xl font-bold text-white">Realibox</div>
          <div className="flex gap-4">
            <Link 
              href="/login" 
              className="px-6 py-2 bg-white bg-opacity-20 backdrop-blur-lg rounded-full
                        text-white hover:bg-opacity-30 transition-all duration-300
                        shadow-lg hover:shadow-xl"
            >
              登录
            </Link>
            <Link 
              href="/register" 
              className="px-6 py-2 bg-white rounded-full text-purple-500 
                        hover:bg-purple-50 transition-all duration-300
                        shadow-lg hover:shadow-xl"
            >
              注册
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