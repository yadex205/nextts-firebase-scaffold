const { promisify } = require('util');
const { resolve } = require('path');
const { spawn } = require('child_process');

const fse = require('fs-extra');

const NEXT_BIN = resolve(__dirname, './node_modules/.bin/next');

function buildNext(dir) {
  return new Promise((resolve, reject) => {
    let proc = spawn(NEXT_BIN, ['build', dir], { stdio: 'inherit' });

    proc.on('exit', () => resolve());
    proc.on('error', (error) => reject(error));
  });
}

task('build', ['build:app', 'build:package']);

namespace('build', () => {
  task('app', { async: true }, async () => {
    const src = resolve(__dirname, './src/app');

    await buildNext(resolve(__dirname, './src/app'));
    await fse.copy(resolve(__dirname, './dist/app/static'),
                   resolve(__dirname, './dist/public/_next/static'))
    await fse.copy(resolve(__dirname, './src/functions/index.js'),
                   resolve(__dirname, './dist/index.js'));
  });

  task('package', { async: true }, async () => {
    await fse.copy(resolve(__dirname, './package.json'),
                   resolve(__dirname, './dist/package.json'));
    await fse.ensureSymlink(resolve(__dirname, './node_modules'),
                            resolve(__dirname, './dist/node_modules'));
  })
});

task('clean', { async: true }, async () => {
  await fse.remove(resolve(__dirname, './dist'));
});
