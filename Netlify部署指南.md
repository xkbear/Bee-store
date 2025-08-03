# 🚀 Bee Store Netlify 部署指南

## 快速部署步骤

### 1️⃣ 准备工作
- ✅ GitHub仓库已推送最新代码
- ✅ 本地测试正常运行

### 2️⃣ Netlify设置
1. 访问 https://www.netlify.com/
2. 登录/注册（推荐用GitHub账号）
3. 点击 "Add new site" → "Import an existing project"
4. 选择 GitHub → 授权 → 选择 `xkbear/Bee-store`

### 3️⃣ 部署配置
```
Branch to deploy: main
Build command: (留空)
Publish directory: .
Functions directory: netlify/functions
```

### 4️⃣ 环境变量配置
进入 Site settings → Environment variables，添加：

```bash
JSONBIN_BIN_ID=your_jsonbin_bin_id_here
JSONBIN_API_KEY=your_jsonbin_api_key_here
IMGBB_API_KEY=your_imgbb_api_key_here
SCREENSHOT_API_TOKEN=your_screenshot_token_here
```

### 5️⃣ 部署验证
- 等待部署完成（1-3分钟）
- 访问生成的URL测试功能
- 验证所有API服务正常工作

## 🔧 故障排除

### 常见问题
1. **函数报错**：检查环境变量是否正确配置
2. **部署失败**：查看部署日志，通常是配置问题
3. **API不工作**：确认密钥没有过期或拼写错误

### 检查清单
- [ ] 所有环境变量已配置
- [ ] 网站可以正常访问
- [ ] 登录功能正常
- [ ] 发布作品功能正常
- [ ] 截图功能正常
- [ ] 图片上传功能正常

## 📞 技术支持
如有问题，请检查：
1. Netlify部署日志
2. 浏览器开发者工具控制台
3. Functions日志（在Netlify后台查看）

## 🎉 部署成功后
您的Bee Store将拥有：
- 全球CDN加速
- 自动HTTPS
- 无服务器函数
- 实时数据同步
- 完整功能支持

**恭喜！您现在拥有了自己的Bee Store部署！** 🎊 