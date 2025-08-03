# 🔑 Bee Store API服务注册指南

## 📝 必需的API服务

### 1. JSONBin.io - 数据存储（必需）

**注册链接**：[https://jsonbin.io/](https://jsonbin.io/)

#### 注册步骤：
1. 点击 **"Create Account"**
2. 选择注册方式：
   - 📧 **邮箱注册**：填写邮箱和密码
   - 🔗 **快速注册**：Google、GitHub、Facebook、Twitter
3. 验证邮箱（如果选择邮箱注册）

#### 获取API密钥：
1. 登录后点击 **"API Keys"**
2. 复制 **Master Key** → 这是您的 `JSONBIN_API_KEY`
3. 点击 **"Create Bin"** 创建一个空的数据仓库
4. 复制新建Bin的ID → 这是您的 `JSONBIN_BIN_ID`

#### 免费额度：
- ✅ 10,000 个JSON文件
- ✅ 10,000 次/月 API请求
- ✅ 私有和公共数据仓库
- ✅ 版本控制

### 2. ImgBB - 图片托管（推荐）

**注册链接**：[https://imgbb.com/api](https://imgbb.com/api)

#### 注册步骤：
1. 点击 **"Get API Key"**
2. 使用Google、Facebook账号注册，或创建新账号
3. 在用户设置中找到 **API Key**

#### 免费额度：
- ✅ 无限图片上传
- ✅ 永久存储
- ✅ 快速CDN加速

### 3. Screenshot API - 网页截图（可选）

**注册链接**：[https://screenshotapi.net/](https://screenshotapi.net/)

#### 注册步骤：
1. 点击 **"Sign Up"** 注册
2. 填写邮箱信息
3. 在控制台获取API Token

#### 免费额度：
- ✅ 100 次/月免费截图
- ✅ 多种输出格式
- ✅ 自定义分辨率

## 🔧 本地配置

### 创建环境变量文件

在项目根目录创建 `.env` 文件：

```bash
# JSONBin 配置（必需）
JSONBIN_BIN_ID=你的bin_id
JSONBIN_API_KEY=$x-master-key$你的master_key

# ImgBB 配置（推荐）
IMGBB_API_KEY=你的imgbb_api_key

# Screenshot API 配置（可选）
SCREENSHOT_API_TOKEN=你的screenshot_token
```

### 配置步骤详解

#### 1. JSONBin配置
```bash
# 示例
JSONBIN_BIN_ID=507f1f77bcf86cd799439011
JSONBIN_API_KEY=$x-master-key$abcd1234-efgh-5678-ijkl-mnop9012qrst
```

#### 2. ImgBB配置
```bash
# 示例
IMGBB_API_KEY=abcdef123456789
```

#### 3. Screenshot API配置
```bash
# 示例
SCREENSHOT_API_TOKEN=your_screenshot_token_here
```

## 🧪 测试配置

### 1. 本地测试
创建配置后，重启开发服务器：

```bash
# 停止当前服务器
pkill -f "netlify dev"

# 重新启动
netlify dev
```

### 2. 功能测试清单
访问 http://localhost:8888 并测试：

- [ ] **用户注册/登录** - 应该保存到JSONBin
- [ ] **发布作品** - 数据应同步到云端
- [ ] **上传图片** - 应上传到ImgBB
- [ ] **自动截图** - 应生成网页截图
- [ ] **云端同步** - 状态应显示"☁️ 已连接"

## 🚀 Netlify部署配置

### 1. 在Netlify中设置环境变量
1. 访问您的Netlify站点设置
2. 进入 **Site settings** → **Environment variables**
3. 添加以下变量：

```
JSONBIN_BIN_ID = 你的bin_id
JSONBIN_API_KEY = 你的master_key
IMGBB_API_KEY = 你的imgbb_key
SCREENSHOT_API_TOKEN = 你的screenshot_token
```

### 2. 重新部署
环境变量配置后，触发重新部署：
- 推送新代码到GitHub，或
- 在Netlify控制台手动触发部署

## 📊 API使用监控

### JSONBin使用情况
- 登录 [JSONBin控制台](https://jsonbin.io/app/bins)
- 查看API请求统计
- 监控存储使用量

### ImgBB使用情况
- 登录 [ImgBB账号](https://imgbb.com/my/settings)
- 查看上传统计
- 管理图片文件

## 🔒 安全最佳实践

### 1. API密钥安全
- ❌ 不要将API密钥提交到GitHub
- ✅ 使用 `.env` 文件存储本地密钥
- ✅ 在Netlify中配置生产环境变量
- ✅ 定期轮换API密钥

### 2. 访问控制
- 为JSONBin设置合适的权限
- 监控API使用情况
- 设置使用量警报

## 📋 注册完成检查清单

- [ ] JSONBin账号已注册 ✅
- [ ] 获得JSONBin API密钥 ✅
- [ ] 创建了JSONBin数据仓库 ✅
- [ ] ImgBB账号已注册（可选）
- [ ] Screenshot API账号已注册（可选）
- [ ] 本地 `.env` 文件已配置 ✅
- [ ] 本地测试通过 ✅
- [ ] Netlify环境变量已配置 ✅
- [ ] 生产部署测试通过 ✅

## 🆘 常见问题

### Q: JSONBin API请求失败
A: 检查API密钥格式，确保包含 `$x-master-key$` 前缀

### Q: 图片上传失败
A: 验证ImgBB API密钥是否正确，检查网络连接

### Q: 截图生成失败
A: 确认Screenshot API Token有效，检查免费额度是否用完

### Q: 环境变量不生效
A: 重启开发服务器，确保 `.env` 文件在项目根目录

---

**下一步：注册完成后，我们将配置这些API密钥并测试所有功能！** 