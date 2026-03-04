import Link from 'next/link';

export default function Tutorials() {
  const tutorials = [
    {
      id: 1,
      title: "OpenClaw入门指南：从零开始养殖你的第一只龙虾",
      description: "学习如何安装、配置和运行OpenClaw，完成第一个AI助手项目",
      category: "入门",
      level: "初级",
      duration: "30分钟",
      author: "养殖专家",
      date: "2026-03-01",
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      title: "技能开发实战：打造个性化龙虾饲料",
      description: "掌握OpenClaw技能开发，创建自定义工具和功能",
      category: "开发",
      level: "中级",
      duration: "45分钟",
      author: "技术总监",
      date: "2026-02-28",
      color: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      title: "高级配置：优化龙虾生长环境",
      description: "深入学习OpenClaw高级配置和性能优化技巧",
      category: "高级",
      level: "高级",
      duration: "60分钟",
      author: "首席科学家",
      date: "2026-02-25",
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 4,
      title: "故障排除：常见龙虾疾病防治",
      description: "解决OpenClaw使用中的常见问题和错误",
      category: "运维",
      level: "中级",
      duration: "40分钟",
      author: "运维工程师",
      date: "2026-02-20",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tutorials.map((tutorial) => (
        <Link 
          key={tutorial.id}
          href={`/tutorials/${tutorial.id}`}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <div className="flex items-start justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${tutorial.color}`}>
              {tutorial.category}
            </span>
            <span className="text-sm text-gray-500">{tutorial.date}</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
            {tutorial.title}
          </h3>
          
          <p className="text-gray-600 mb-4">
            {tutorial.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                <span className="font-medium">难度：</span>{tutorial.level}
              </span>
              <span className="text-sm text-gray-500">
                <span className="font-medium">时长：</span>{tutorial.duration}
              </span>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                <span className="text-sm font-bold">养</span>
              </div>
              <span className="text-sm text-gray-600">{tutorial.author}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}