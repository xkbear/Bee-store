const fetch = require('node-fetch');

exports.handler = async function(event) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  const { image } = JSON.parse(event.body || '{}');
  const API_KEY = process.env.IMGBB_API_KEY; // 在 Netlify 环境变量中配置

  if (!API_KEY) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Missing IMGBB_API_KEY' })
    };
  }

  if (!image) {
    return {
      statusCode: 400,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'No image provided' })
    };
  }

  try {
    // 去除前缀 data:image/...;base64,
    const cleanBase64 = image.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');

    const params = new URLSearchParams();
    params.append('key', API_KEY);
    params.append('image', cleanBase64);

    const response = await fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });

    const data = await response.json();

    if (!response.ok || !data || !data.data || !data.data.url) {
      throw new Error(data.error?.message || 'Upload failed');
    }

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ url: data.data.url })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message })
    };
  }
}; 