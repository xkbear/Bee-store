const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // CORS 处理
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: ''
    };
  }

  const JSONBIN_BIN_ID = process.env.JSONBIN_BIN_ID;
  const JSONBIN_API_KEY = process.env.JSONBIN_API_KEY;

  if (!JSONBIN_BIN_ID || !JSONBIN_API_KEY) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: '服务器配置错误: 缺少 JSONBIN_BIN_ID 或 JSONBIN_API_KEY' })
    };
  }

  const method = event.httpMethod;
  const baseUrl = 'https://api.jsonbin.io/v3/b';
  let url = `${baseUrl}/${JSONBIN_BIN_ID}`;
  if (method === 'GET') {
    url += '/latest';
  }

  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY
      },
      body: method === 'PUT' ? event.body : undefined
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: error.message })
    };
  }
}; 