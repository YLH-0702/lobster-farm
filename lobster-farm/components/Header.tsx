import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🦞</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">龙虾养殖网</h1>
              <p className="text-sm text-gray-600">OpenClaw AI助手学习社区</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              首页
            </Link>
            <Link href="/tutorials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              养殖教程
            </Link>
            <Link href="/skills" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              技能市场
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              社区交流
            </Link>
            <Link href="/tools" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              养殖工具
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              关于我们
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              登录
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium">
              加入社区
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}