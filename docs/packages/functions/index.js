// if you want to use express version then comment the uncomment code block

// const functions = require('firebase-functions');
// const express = require('express');
// const next = require('next');

// const app = express();

// app.get('*', async (req, res) => {
//   const nextApp = next({
//     conf: {
//       distDir: 'next',
//       publicRuntimeConfig: {
//         staticFolder: '/public/',
//       },
//     },
//   });
//   await nextApp.prepare();
//   const handle = nextApp.getRequestHandler();
//   return handle(req, res);
// });

// exports.next = functions.https.onRequest(app);
const path = require('path');
const functions = require('firebase-functions');
const next = require('next');

var dev = process.env.NODE_ENV !== 'production';
var app = next({
  dev,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` },
});
var handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl); // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res));
});
