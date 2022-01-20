const http = require('http');

// http.get('http://192.168.95.143:9527', (res) => {
//   console.log("http.get.res:", res);
// });

const options = {
  hostname: 'http://192.168.95.143:9527',
  port: 9527,
  path: '/',
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

const request = http.request(options, (res) => {
  console.log('reques.res:', res);
});
request.write('Hello World');
request.end();