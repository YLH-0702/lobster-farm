export default function Hero() {
  return (
    <section className="py-16 md:py-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          培养你的<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI助手</span>
          <br />
          收获<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600"> 智能果实</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          龙虾养殖网是一个专注于OpenClaw AI助手学习、交流和技能分享的社区。
          在这里，我们将AI助手的培养比作龙虾养殖，一起探索智能技术的无限可能。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-105">
            开始养殖之旅
          </button>
          <button className="px-8 py-4 border-2 border-blue-500 text-blue-600 text-lg font-semibold rounded-xl hover:bg-blue-50 transition-colors">
            查看养殖教程
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">系统教程</h3>
            <p className="text-gray-600">从入门到精通的OpenClaw学习路径</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">社区交流</h3>
            <p className="text-gray-600">与全国OpenClaw用户分享经验和技巧</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🛠️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">实用工具</h3>
            <p className="text-gray-600">在线工具助力你的AI助手开发</p>
          </div>
        </div>
      </div>
    </section>
  );
}