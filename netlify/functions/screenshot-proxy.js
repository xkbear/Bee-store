const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // CORS 处理
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: '方法不被允许' })
    };
  }

  const SCREENSHOT_API_TOKEN = process.env.SCREENSHOT_API_TOKEN;

  if (!SCREENSHOT_API_TOKEN) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: '服务器配置错误: 缺少 SCREENSHOT_API_TOKEN' })
    };
  }

  const url = event.queryStringParameters?.url;
  if (!url) {
    return {
      statusCode: 400,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: '缺少 url 参数' })
    };
  }

  try {
    const screenshotUrl = `https://shot.screenshotapi.net/screenshot?token=${SCREENSHOT_API_TOKEN}&url=${encodeURIComponent(url)}&width=1200&height=800&output=image&file_type=png`;
    
    const response = await fetch(screenshotUrl);
    
    if (!response.ok) {
      throw new Error('截图API请求失败');
    }

    const imageBuffer = await response.buffer();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400'
      },
      body: imageBuffer.toString('base64'),
      isBase64Encoded: true
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: '生成截图失败: ' + error.message })
    };
  }
}; 