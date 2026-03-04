# 龙虾养殖网 - 部署指南

本文档详细说明如何部署《南宁龙虾养殖网》到生产环境。

## 部署选项

### 1. Vercel（推荐）
**优势：** 完全免费、自动部署、全球CDN、自动SSL

#### 部署步骤：
1. **注册Vercel账号**
   - 访问 https://vercel.com
   - 使用GitHub账号登录

2. **导入项目**
   - 点击"New Project"
   - 选择GitHub仓库
   - 授权访问

3. **配置项目**
   - 项目名称：`nanning-lobster-farm`
   - Framework Preset：Next.js
   - Root Directory：`./`
   - Build Command：`npm run build`
   - Output Directory：`.next`

4. **环境变量**
   在Vercel项目设置中添加：
   ```
   NEXT_PUBLIC_SITE_NAME=南宁龙虾养殖网
   NEXT_PUBLIC_SITE_URL=https://openclaw-farm.com
   NEXT_PUBLIC_SITE_DESCRIPTION=OpenClaw AI助手学习与交流社区
   ```

5. **部署**
   - 点击"Deploy"
   - 等待构建完成

### 2. 自定义域名配置

#### 域名注册后：
1. **在Vercel添加域名**
   - 进入项目设置 → Domains
   - 添加 `openclaw-farm.com`
   - 添加 `www.openclaw-farm.com`

2. **配置DNS解析**
   在阿里云DNS设置中添加：
   - **A记录**：`@` → Vercel提供的IP地址
   - **CNAME记录**：`www` → `cname.vercel-dns.com`

3. **等待生效**
   - DNS解析需要几分钟到几小时
   - 检查SSL证书是否自动生成

### 3. 其他部署选项

#### Netlify
```bash
# 安装Netlify CLI
npm install -g netlify-cli

# 部署
netlify deploy --prod
```

#### 自有服务器
```bash
# 构建
npm run build

# 启动
npm start

# 或使用PM2
pm2 start npm --name "lobster-farm" -- start
```

## 环境配置

### 必需环境变量
创建 `.env.production` 文件：
```env
NEXT_PUBLIC_SITE_NAME=南宁龙虾养殖网
NEXT_PUBLIC_SITE_URL=https://openclaw-farm.com
NEXT_PUBLIC_SITE_DESCRIPTION=OpenClaw AI助手学习与交流社区
```

### 可选环境变量
```env
# Supabase配置（未来功能）
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google Analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# 评论系统
NEXT_PUBLIC_COMMENTS_API=your_comments_api
```

## 开发环境

### 本地运行
```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

### 代码质量
```bash
# 类型检查
npm run type-check

# 代码格式化
npm run format

# 代码检查
npm run lint
```

## 维护指南

### 日常维护
1. **更新依赖**
   ```bash
   npm update
   npm audit fix
   ```

2. **备份数据**
   - 定期备份数据库（如果使用）
   - 备份配置文件

3. **监控**
   - 使用Vercel Analytics
   - 设置错误监控（如Sentry）

### 故障排除

#### 构建失败
1. 检查Node.js版本（需要18+）
2. 清理缓存：`rm -rf node_modules .next`
3. 重新安装：`npm ci`

#### 部署失败
1. 检查环境变量配置
2. 查看Vercel构建日志
3. 检查代码语法错误

#### 域名无法访问
1. 检查DNS解析状态
2. 确认SSL证书已签发
3. 检查防火墙设置

## 性能优化

### 构建优化
```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
}
```

### CDN配置
- 使用Vercel的全球CDN
- 配置图片优化
- 启用缓存策略

### 监控指标
- 页面加载时间 < 3秒
- 首次内容绘制 < 1.5秒
- 可交互时间 < 3.5秒

## 安全建议

1. **定期更新依赖**
2. **使用环境变量存储敏感信息**
3. **启用HTTPS强制跳转**
4. **设置CSP安全头**
5. **定期安全扫描**

## 支持与帮助

### 问题反馈
- GitHub Issues：提交代码问题
- 社区论坛：技术讨论
- 邮箱：support@openclaw-farm.com

### 文档更新
- 保持README.md更新
- 记录重大变更
- 更新部署指南

---

**最后更新：** 2026年3月4日
**维护者：** 南宁龙虾养殖网团队