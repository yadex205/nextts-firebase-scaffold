const { createServer } = require('http');
const { resolve } = require('path');
const functions = require('firebase-functions');
require('@zeit/next-preact/alias')();

const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const NEXT_CONF = IS_DEVELOPMENT ? {
  dev: true,
  dir: resolve(__dirname, '../app')
} : {
  dev: false,
  conf: { distDir: 'app' }
};

let app = require('next')(NEXT_CONF);
let handle = app.getRequestHandler();

if (IS_DEVELOPMENT) {
  app.prepare().then(() => {
    const server = createServer(handle);
    server.listen(PORT, () => {
      console.log(`Next.js dev server is listening on http://localhost:${PORT}`)
    });
  });
}

exports.next = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
