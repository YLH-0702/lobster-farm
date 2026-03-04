export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "精准养殖",
      description: "针对不同阶段的OpenClaw用户提供个性化学习路径",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: "🚀",
      title: "快速成长",
      description: "丰富的实战案例和最佳实践，加速你的AI助手培养",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: "🔄",
      title: "持续更新",
      description: "紧跟OpenClaw最新版本和功能，保持技术前沿",
      color: "from-green-400 to-teal-400"
    },
    {
      icon: "🏆",
      title: "成就系统",
      description: "完成学习任务获得养殖成就，激励持续进步",
      color: "from-orange-400 to-red-400"
    },
    {
      icon: "🔧",
      title: "工具齐全",
      description: "一站式开发工具，提升养殖效率",
      color: "from-indigo-400 to-blue-400"
    },
    {
      icon: "🌐",
      title: "全球视野",
      description: "汇聚国内外OpenClaw优秀实践和案例",
      color: "from-yellow-400 to-orange-400"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
            <span className="text-2xl">{feature.icon}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}