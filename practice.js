const http = require ('http');
const hostname = 'localhost';
const port = 1337;

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.end ('This is just a test to see if I can do it myself\n');
});

server.listen(port,hostname, () => {
  console.log ('This should show up in the script');
});
