const { createServer } = require('http');
const functions = require('firebase-functions');
const { resolve } = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const conf = isDevelopment ? {
  dev: true,
  dir: resolve(__dirname, '../app')
} : {
  dev: false,
  conf: { distDir: 'app' }
};

var app = require('next')(conf);
var handle = app.getRequestHandler();

if (isDevelopment) {
  app.prepare().then(() => createServer(handle).listen(port));
}

exports.next = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
