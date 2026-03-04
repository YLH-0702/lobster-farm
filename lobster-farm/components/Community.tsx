export default function Community() {
  const discussions = [
    {
      id: 1,
      title: "如何让OpenClaw自动回复飞书消息？",
      author: "小龙虾养殖员",
      replies: 24,
      views: 156,
      time: "2小时前",
      category: "问题求助",
      hot: true
    },
    {
      id: 2,
      title: "分享一个自动整理文档的OpenClaw技能",
      author: "技术大虾",
      replies: 42,
      views: 289,
      time: "5小时前",
      category: "技能分享",
      hot: true
    },
    {
      id: 3,
      title: "OpenClaw配置优化经验交流",
      author: "资深养殖户",
      replies: 18,
      views: 123,
      time: "1天前",
      category: "经验分享",
      hot: false
    },
    {
      id: 4,
      title: "本周六线上养殖技术分享会报名",
      author: "社区管理员",
      replies: 56,
      views: 342,
      time: "2天前",
      category: "活动公告",
      hot: true
    }
  ];

  const stats = [
    { label: "注册用户", value: "1,234", icon: "👥" },
    { label: "技能分享", value: "567", icon: "📦" },
    { label: "教程文章", value: "89", icon: "📚" },
    { label: "在线工具", value: "23", icon: "🛠️" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">热门讨论</h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            {discussions.map((discussion) => (
              <div key={discussion.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {discussion.category}
                      </span>
                      {discussion.hot && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">
                          热门
                        </span>
                      )}
                    </div>
                    
                    <h4 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                      {discussion.title}
                    </h4>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                            <span className="text-xs">用</span>
                          </div>
                          <span className="text-sm text-gray-600">{discussion.author}</span>
                        </div>
                        <span className="text-sm text-gray-500">{discussion.time}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">
                          <span className="font-medium">{discussion.replies}</span> 回复
                        </span>
                        <span className="text-sm text-gray-500">
                          <span className="font-medium">{discussion.views}</span> 浏览
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="px-6 py-4 border-t border-gray-200 text-center">
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              查看更多讨论 →
            </button>
          </div>
        </div>
      </div>
      
      <div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-6">社区数据</h3>
          
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{stat.icon}</span>
                  <span className="font-medium">{stat.label}</span>
                </div>
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/20">
            <button className="w-full py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              立即加入社区
            </button>
          </div>
        </div>
        
        <div className="mt-6 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">今日养殖任务</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-green-600">✓</span>
                </div>
                <span className="text-gray-700">阅读一篇教程</span>
              </div>
              <span className="text-sm text-green-600">+10积分</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600">🔄</span>
                </div>
                <span className="text-gray-700">分享一个技能</span>
              </div>
              <span className="text-sm text-blue-600">+50积分</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-gray-400">○</span>
                </div>
                <span className="text-gray-500">帮助他人解决问题</span>
              </div>
              <span className="text-sm text-gray-500">+30积分</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}