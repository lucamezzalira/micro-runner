const { workerData } = require('worker_threads');
const startmjs = require('./mjs_tests_runner');
const startcjs = require('./cjs_tests_runner');

const tests = workerData.tests;
const iterations = workerData.iterations

workerData.module === 'mjs' ? startmjs(tests, iterations) : startcjs(tests, iterations);