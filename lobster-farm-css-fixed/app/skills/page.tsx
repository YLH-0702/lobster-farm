import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SkillsPage() {
  const skillCategories = [
    {
      id: 'productivity',
      title: '效率工具',
      description: '提升工作效率的OpenClaw技能',
      icon: '⚡',
      color: 'from-blue-400 to-cyan-400',
      count: 23
    },
    {
      id: 'development',
      title: '开发工具',
      description: '程序员必备的开发辅助技能',
      icon: '💻',
      color: 'from-purple-400 to-pink-400',
      count: 18
    },
    {
      id: 'communication',
      title: '通讯集成',
      description: '与飞书、微信等通讯工具集成',
      icon: '💬',
      color: 'from-green-400 to-teal-400',
      count: 15
    },
    {
      id: 'automation',
      title: '自动化',
      description: '自动化工作流和任务调度',
      icon: '🤖',
      color: 'from-orange-400 to-red-400',
      count: 12
    },
    {
      id: 'data-analysis',
      title: '数据分析',
      description: '数据处理和分析工具',
      icon: '📊',
      color: 'from-indigo-400 to-blue-400',
      count: 9
    },
    {
      id: 'entertainment',
      title: '娱乐休闲',
      description: '有趣好玩的娱乐技能',
      icon: '🎮',
      color: 'from-yellow-400 to-orange-400',
      count: 7
    }
  ];

  const popularSkills = [
    {
      id: 1,
      name: '飞书消息自动回复',
      description: '自动回复飞书消息，支持关键词匹配和智能回复',
      author: '通讯专家',
      downloads: 1245,
      rating: 4.8,
      version: '1.2.0',
      tags: ['飞书', '自动化', '通讯']
    },
    {
      id: 2,
      name: '代码审查助手',
      description: '自动审查代码质量，提供改进建议',
      author: '代码大师',
      downloads: 987,
      rating: 4.9,
      version: '2.1.0',
      tags: ['开发', '代码', '质量']
    },
    {
      id: 3,
      name: '日程智能管理',
      description: '自动整理日历，智能安排会议时间',
      author: '时间管理师',
      downloads: 856,
      rating: 4.7,
      version: '1.5.0',
      tags: ['日历', '管理', '自动化']
    },
    {
      id: 4,
      name: '文档自动摘要',
      description: '自动提取文档关键信息，生成简洁摘要',
      author: '文档专家',
      downloads: 723,
      rating: 4.6,
      version: '1.0.0',
      tags: ['文档', 'AI', '摘要']
    }
  ];

  const newSkills = [
    {
      id: 5,
      name: '图片智能处理',
      description: '自动优化、裁剪和增强图片',
      author: '图像工程师',
      downloads: 234,
      rating: 4.5,
      version: '0.9.0',
      tags: ['图片', '处理', '优化'],
      new: true
    },
    {
      id: 6,
      name: '数据可视化生成',
      description: '将数据自动转换为美观的图表',
      author: '数据艺术家',
      downloads: 189,
      rating: 4.4,
      version: '1.0.0',
      tags: ['数据', '可视化', '图表'],
      new: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            技能市场
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            发现、分享、安装优秀的OpenClaw技能，让你的AI助手更强大
          </p>
        </div>

        {/* 技能分类 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">技能分类</h2>
            <Link href="/skills/categories" className="text-blue-600 hover:text-blue-800 font-medium">
              查看全部分类 →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <Link
                key={category.id}
                href={`/skills/category/${category.id}`}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.count}个技能
                  </span>
                  <span className="text-blue-600 font-medium">
                    探索 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 热门技能 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">热门技能</h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                本周热门
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium">
                历史排行
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {popularSkills.map((skill) => (
              <div
                key={skill.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                      {skill.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                          <span className="text-xs">作</span>
                        </div>
                        <span className="text-sm text-gray-600">{skill.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">v{skill.version}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-500">
                      {skill.rating}
                    </div>
                    <div className="text-sm text-gray-500">
                      {skill.downloads}次安装
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {skill.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {skill.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium">
                    一键安装
                  </button>
                  <div className="flex space-x-4">
                    <button className="text-gray-500 hover:text-blue-600">
                      ⭐ 收藏
                    </button>
                    <button className="text-gray-500 hover:text-blue-600">
                      📋 复制
                    </button>
                    <button className="text-gray-500 hover:text-blue-600">
                      🔗 分享
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 新技能上架 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">新技能上架</h2>
            <Link href="/skills/new" className="text-blue-600 hover:text-blue-800 font-medium">
              提交新技能 →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newSkills.map((skill) => (
              <div
                key={skill.id}
                className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-6 relative"
              >
                {skill.new && (
                  <div className="absolute -top-2 -right-2 px-3 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">
                    新
                  </div>
                )}
                
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">🆕</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {skill.name}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                          <span className="text-xs">作</span>
                        </div>
                        <span className="text-sm text-gray-600">{skill.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">v{skill.version}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {skill.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {skill.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      📥 {skill.downloads}次安装
                    </span>
                    <span className="text-sm text-gray-500">
                      ⭐ {skill.rating}评分
                    </span>
                  </div>
                  
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                    立即体验
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 技能开发指南 */}
        <section className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">开发你的技能</h2>
              <p className="text-purple-100 mb-6">
                将你的创意变为现实，为OpenClaw社区贡献优秀技能
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-lg">📝</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">编写技能代码</h4>
                    <p className="text-purple-100 text-sm">使用JavaScript/TypeScript开发</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-lg">🧪</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">测试与调试</h4>
                    <p className="text-purple-100 text-sm">确保技能稳定可靠</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-lg">📤</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">提交审核</h4>
                    <p className="text-purple-100 text-sm">社区审核通过后上架</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">开发资源</h3>
              
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span>OpenClaw技能开发文档</span>
                  <span>→</span>
                </a>
                
                <a href="#" className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span>技能模板仓库</span>
                  <span>→</span>
                </a>
                
                <a href="#" className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span>API参考手册</span>
                  <span>→</span>
                </a>
                
                <a href="#" className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span>开发者社区</span>
                  <span>→</span>
                </a>
              </div>
              
              <button className="w-full mt-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                开始开发
              </button>
            </div>
          </div>
        </section>

        {/* 技能统计 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">技能市场数据</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">84</div>
                <div className="text-gray-600">上架技能</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">5,234</div>
                <div className="text-gray-600">总安装次数</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">127</div>
                <div className="text-gray-600">开发者</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">4.7</div>
                <div className="text-gray-600">平均评分</div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">成为技能开发者</h3>
                  <p className="text-gray-600">分享你的创意，获得社区认可</p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium">
                  立即加入
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}