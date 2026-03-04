import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TutorialsPage() {
  const categories = [
    {
      id: 'beginner',
      title: '入门养殖',
      description: '从零开始学习OpenClaw基础知识',
      color: 'bg-blue-100 border-blue-200',
      icon: '🐣',
      count: 12
    },
    {
      id: 'development',
      title: '技能开发',
      description: '学习如何开发自定义OpenClaw技能',
      color: 'bg-green-100 border-green-200',
      icon: '🔧',
      count: 8
    },
    {
      id: 'advanced',
      title: '高级养殖',
      description: '深入掌握OpenClaw高级功能和优化',
      color: 'bg-purple-100 border-purple-200',
      icon: '🚀',
      count: 6
    },
    {
      id: 'troubleshooting',
      title: '疾病防治',
      description: '解决OpenClaw使用中的常见问题',
      color: 'bg-orange-100 border-orange-200',
      icon: '🩺',
      count: 10
    },
    {
      id: 'best-practices',
      title: '养殖秘籍',
      description: 'OpenClaw最佳实践和技巧分享',
      color: 'bg-teal-100 border-teal-200',
      icon: '📚',
      count: 15
    },
    {
      id: 'case-studies',
      title: '养殖案例',
      description: '真实项目案例分析和学习',
      color: 'bg-pink-100 border-pink-200',
      icon: '📊',
      count: 7
    }
  ];

  const popularTutorials = [
    {
      id: 1,
      title: 'OpenClaw安装配置全攻略',
      description: '详细讲解OpenClaw的安装、配置和基础使用',
      author: '养殖专家',
      duration: '25分钟',
      level: '初级',
      views: 1245,
      likes: 89
    },
    {
      id: 2,
      title: '10分钟创建一个实用技能',
      description: '快速上手OpenClaw技能开发，创建你的第一个工具',
      author: '技术大虾',
      duration: '15分钟',
      level: '初级',
      views: 987,
      likes: 76
    },
    {
      id: 3,
      title: 'OpenClaw与飞书深度集成',
      description: '实现OpenClaw与飞书的自动化工作流',
      author: '集成大师',
      duration: '40分钟',
      level: '中级',
      views: 856,
      likes: 64
    },
    {
      id: 4,
      title: '性能优化：让你的助手更快',
      description: 'OpenClaw性能调优和最佳实践',
      author: '优化专家',
      duration: '35分钟',
      level: '高级',
      views: 723,
      likes: 52
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            养殖教程中心
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            系统化的OpenClaw学习路径，从入门到精通，助你成为养殖专家
          </p>
        </div>

        {/* 分类导航 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">选择养殖方向</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/tutorials/${category.id}`}
                className={`${category.color} border-2 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <span className="text-sm font-medium text-gray-600">
                    {category.count}篇教程
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="text-blue-600 font-medium flex items-center">
                  开始学习 →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 热门教程 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">热门养殖教程</h2>
            <Link href="/tutorials/popular" className="text-blue-600 hover:text-blue-800 font-medium">
              查看全部 →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {popularTutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {tutorial.level}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">
                      {tutorial.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      👁️ {tutorial.views}
                    </span>
                    <span className="text-sm text-gray-500">
                      ❤️ {tutorial.likes}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                      <span className="text-sm font-bold">作</span>
                    </div>
                    <span className="text-gray-700">{tutorial.author}</span>
                  </div>
                  
                  <Link
                    href={`/tutorials/view/${tutorial.id}`}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium"
                  >
                    阅读教程
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 学习路径 */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-6">推荐学习路径</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold mb-2">基础养殖</h3>
              <p className="text-blue-100 mb-4">掌握OpenClaw基础操作</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span>安装与配置</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span>基础命令使用</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span>文件操作</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold mb-2">技能开发</h3>
              <p className="text-blue-100 mb-4">学习创建自定义技能</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span>技能结构</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span>工具开发</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span>API集成</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold mb-2">高级应用</h3>
              <p className="text-blue-100 mb-4">实现复杂工作流</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span>自动化流程</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span>性能优化</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  <span>团队协作</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 快速入门 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">快速入门指南</h2>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">新手必读</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">注册账号</h4>
                      <p className="text-gray-600 text-sm">创建社区账号，开启养殖之旅</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">基础学习</h4>
                      <p className="text-gray-600 text-sm">完成入门教程，掌握基本操作</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">实践项目</h4>
                      <p className="text-gray-600 text-sm">动手创建第一个OpenClaw技能</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">学习建议</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">每天学习30分钟，持续进步</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">积极参与社区讨论</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">动手实践，理论结合实践</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">分享经验，帮助他人</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                    立即开始学习
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}