import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: '养殖专家',
      role: '创始人 & CEO',
      bio: '10年AI产品经验，OpenClaw深度用户',
      avatar: '🦞',
      color: 'bg-blue-100'
    },
    {
      id: 2,
      name: '技术大虾',
      role: 'CTO',
      bio: '全栈工程师，开源项目贡献者',
      avatar: '💻',
      color: 'bg-green-100'
    },
    {
      id: 3,
      name: '社区经理',
      role: '社区运营',
      bio: '擅长社区建设和用户运营',
      avatar: '🤝',
      color: 'bg-purple-100'
    },
    {
      id: 4,
      name: '内容总监',
      role: '内容策划',
      bio: '技术文档专家，教程创作者',
      avatar: '📚',
      color: 'bg-orange-100'
    }
  ];

  const milestones = [
    {
      year: '2026',
      month: '3月',
      title: '项目启动',
      description: '南宁龙虾养殖网正式立项'
    },
    {
      year: '2026',
      month: '3月',
      title: '网站开发',
      description: '完成基础架构和核心功能'
    },
    {
      year: '2026',
      month: '4月',
      title: '内测上线',
      description: '邀请首批用户参与测试'
    },
    {
      year: '2026',
      month: '5月',
      title: '正式发布',
      description: '面向所有OpenClaw用户开放'
    },
    {
      year: '2026',
      month: '6月',
      title: '社区建设',
      description: '建立活跃的开发者社区'
    }
  ];

  const values = [
    {
      title: '开放共享',
      description: '我们相信知识的开放和共享能够推动整个社区进步',
      icon: '🌐'
    },
    {
      title: '用户至上',
      description: '一切以用户需求为中心，提供最好的学习体验',
      icon: '👥'
    },
    {
      title: '持续创新',
      description: '不断探索新技术，保持社区活力和竞争力',
      icon: '🚀'
    },
    {
      title: '合作共赢',
      description: '与开发者、用户共同成长，实现多方共赢',
      icon: '🤝'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            关于龙虾养殖网
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们是一个专注于OpenClaw AI助手学习、交流和技能分享的社区，
            致力于让每个人都能轻松培养自己的AI助手。
          </p>
        </div>

        {/* 我们的故事 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">我们的故事</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                2026年初，一群OpenClaw的深度用户发现，虽然OpenClaw功能强大，
                但学习曲线较陡，缺乏系统化的学习资源和交流社区。
              </p>
              
              <p className="text-gray-700 mb-4">
                于是，我们萌生了一个想法：创建一个专门为OpenClaw用户服务的社区。
                我们想到了一个有趣的比喻——将AI助手的培养比作<strong>龙虾养殖</strong>。
              </p>
              
              <p className="text-gray-700 mb-4">
                就像养殖龙虾需要合适的环境、饲料和技术一样，培养一个优秀的AI助手也需要：
              </p>
              
              <ul className="text-gray-700 mb-4 list-disc pl-6">
                <li><strong>养殖环境</strong>：稳定的技术栈和开发工具</li>
                <li><strong>优质饲料</strong>：系统化的教程和最佳实践</li>
                <li><strong>养殖技术</strong>：专业的技能开发和优化方法</li>
                <li><strong>养殖交流</strong>：活跃的社区讨论和经验分享</li>
              </ul>
              
              <p className="text-gray-700">
                基于这个理念，<strong>龙虾养殖网</strong>应运而生。
                我们希望通过这个平台，让每一位OpenClaw用户都能在这里：
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">系统学习</h4>
                    <p className="text-gray-600 text-sm">从入门到精通的完整学习路径</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-green-600">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">交流分享</h4>
                    <p className="text-gray-600 text-sm">与全国用户交流经验和技巧</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-purple-600">🛠️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">技能开发</h4>
                    <p className="text-gray-600 text-sm">创建和分享自定义技能</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-orange-600">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">共同成长</h4>
                    <p className="text-gray-600 text-sm">与社区一起进步和成长</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 我们的团队 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">我们的团队</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-3xl">{member.avatar}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 我们的价值观 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">我们的价值观</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 发展历程 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">发展历程</h2>
            
            <div className="relative">
              {/* 时间线 */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30 ml-6"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-16">
                    <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm font-bold text-blue-600">{milestone.year}</div>
                        <div className="text-xs text-gray-600">{milestone.month}</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="text-lg font-bold mb-1">{milestone.title}</h3>
                      <p className="text-blue-100">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 加入我们 */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">加入我们</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                无论你是OpenClaw新手还是专家，无论你想学习、分享还是贡献代码，
                龙虾养殖网都欢迎你的加入！
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">🎓</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">学习者</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    系统学习OpenClaw，从入门到精通
                  </p>
                  <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    开始学习
                  </button>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">🤝</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">贡献者</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    分享经验，帮助他人，共同建设社区
                  </p>
                  <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    参与贡献
                  </button>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">🔧</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">开发者</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    开发技能，提交代码，推动项目发展
                  </p>
                  <button className="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                    加入开发
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 联系我们 */}
        <section>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">联系我们</h2>
                <p className="text-blue-100 mb-6">
                  有任何问题或建议？我们随时欢迎你的反馈！
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <span>📧</span>
                    </div>
                    <div>
                      <div className="font-bold">邮箱</div>
                      <div className="text-blue-100">contact@openclaw-farm.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <span>💬</span>
                    </div>
                    <div>
                      <div className="font-bold">社区论坛</div>
                      <div className="text-blue-100">community.openclaw-farm.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <span>🐙</span>
                    </div>
                    <div>
                      <div className="font-bold">GitHub</div>
                      <div className="text-blue-100">github.com/openclaw-farm</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">反馈表单</h3>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="你的姓名"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 text-white border border-white/30 focus:outline-none focus:border-white"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="邮箱地址"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 text-white border border-white/30 focus:outline-none focus:border-white"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      placeholder="你的消息..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 text-white border border-white/30 focus:outline-none focus:border-white resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    发送消息
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}