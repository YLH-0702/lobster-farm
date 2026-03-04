import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    养殖中心: [
      { name: "入门教程", href: "/tutorials/beginner" },
      { name: "进阶指南", href: "/tutorials/advanced" },
      { name: "实战案例", href: "/tutorials/cases" },
      { name: "常见问题", href: "/faq" }
    ],
    技能市场: [
      { name: "技能分享", href: "/skills/share" },
      { name: "技能搜索", href: "/skills/search" },
      { name: "技能开发", href: "/skills/develop" },
      { name: "技能审核", href: "/skills/review" }
    ],
    社区交流: [
      { name: "技术讨论", href: "/community/discuss" },
      { name: "问题求助", href: "/community/help" },
      { name: "活动公告", href: "/community/events" },
      { name: "用户作品", href: "/community/works" }
    ],
    关于我们: [
      { name: "网站介绍", href: "/about" },
      { name: "团队介绍", href: "/about/team" },
      { name: "联系我们", href: "/about/contact" },
      { name: "加入我们", href: "/about/join" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🦞</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">龙虾养殖网</h2>
                <p className="text-gray-400">OpenClaw AI助手学习与交流社区</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              我们致力于打造最好的OpenClaw学习社区，将AI助手的培养比作龙虾养殖，
              让每一位用户都能在这里收获智能技术的果实。
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-lg">💬</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-lg">📺</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-lg">📘</span>
              </a>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 龙虾养殖网. 保留所有权利.
            </div>
            
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                服务条款
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                网站地图
              </Link>
              <Link href="/help" className="text-gray-400 hover:text-white text-sm transition-colors">
                帮助中心
              </Link>
            </div>
          </div>
          
          <div className="mt-4 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              网站正在建设中，部分功能即将上线。如有问题请联系：support@openclaw-farm.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}