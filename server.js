const http = require('node:http');
const robot = require('robotjs');
const url = require('url');
const os = require('os');

const localIPv4 = getLocalIPv4();
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Access-Control-Allow-Origin', 'https://apoorvsxna.github.io'); // Update this to client origin
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Handle preflight request
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method === 'POST') {
    if (parsedUrl.pathname === '/press') {
      const key = parsedUrl.query.key;

      if (key) {
        robot.keyTap(key);
        res.statusCode = 204; // No content
        res.end();
        console.log(`${key} Pressed.`);
        return;
      }
    }
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
});

server.listen(port, localIPv4, () => {
  console.log(`Server running at http://${localIPv4}:${port}/`);
});

function getLocalIPv4() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    const interfaceInfo = interfaces[interfaceName];
    for (const info of interfaceInfo) {
      if (info.family === 'IPv4' && !info.internal) {
        return info.address;
      }
    }
  }
  return '127.0.0.1'; // Default to localhost if no suitable address is found
}
