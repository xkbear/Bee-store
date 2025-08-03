# Bee Store - 学生作品展示平台

一个现代化的学生作品展示平台，采用苹果风格设计，支持移动端适配。

## 🚀 快速开始

### 本地开发

1. 安装依赖：
```bash
npm install
```

2. 安装 Netlify CLI：
```bash
npm install -g netlify-cli
```

3. 启动开发服务器：
```bash
netlify dev
```

4. 打开浏览器访问：http://localhost:8888

### 功能特点

- ✅ **本地存储**: 无需配置即可使用，数据保存在浏览器本地
- ✅ **响应式设计**: 完美适配桌面和移动设备
- ✅ **用户系统**: 注册、登录、个人资料管理
- ✅ **作品展示**: 发布、编辑、删除作品
- ✅ **互动功能**: 点赞、收藏、评论
- ✅ **搜索筛选**: 按分类、名称、作者搜索

### 云端功能（需要配置）

如需启用完整的云端同步功能，请配置以下环境变量：

1. 创建 `.env` 文件：
```bash
# JSONBin 配置 (数据存储)
JSONBIN_BIN_ID=your_bin_id
JSONBIN_API_KEY=your_api_key

# ImgBB 配置 (图片托管)
IMGBB_API_KEY=your_api_key

# Screenshot API 配置 (自动截图)
SCREENSHOT_API_TOKEN=your_token
```

2. 获取API密钥：
   - [JSONBin.io](https://jsonbin.io) - 免费数据存储
   - [ImgBB](https://imgbb.com/api) - 免费图片托管
   - [Screenshot API](https://screenshotapi.net) - 网页截图服务

## 📱 使用说明

### 基础功能
1. **注册账号**: 点击右上角"注册"按钮
2. **发布作品**: 登录后点击右下角"+"按钮
3. **浏览作品**: 主页展示所有发布的作品
4. **搜索过滤**: 使用搜索框和分类筛选器

### 高级功能
- **离线支持**: 网络断开时可继续操作，恢复后自动同步
- **数据备份**: 自动创建数据快照，支持恢复
- **管理功能**: 管理员可查看系统日志和数据状态

## 🛠 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **后端**: Netlify Functions (无服务器)
- **存储**: LocalStorage + 云端API
- **部署**: Netlify

## �� 许可证

MIT License 