const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // 从环境变量获取配置
  const JSONBIN_BIN_ID = process.env.JSONBIN_BIN_ID;
  const JSONBIN_API_KEY = process.env.JSONBIN_API_KEY;
  
  if (!JSONBIN_BIN_ID || !JSONBIN_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: '服务器配置错误' })
    };
  }

  try {
    const { method, body } = event;
    const baseUrl = 'https://api.jsonbin.io/v3/b';
    const url = `${baseUrl}/${JSONBIN_BIN_ID}${method === 'GET' ? '/latest' : ''}`;

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY
      },
      body: method === 'PUT' ? body : undefined
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}; 