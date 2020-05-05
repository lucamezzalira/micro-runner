const minimist = require('minimist');
const startmjs = require('./mjs_tests_runner');
const startcjs = require('./cjs_tests_runner');

const params = JSON.parse(minimist(process.argv.slice(2))._[0])
const tests = params.tests;
const iterations = params.iterations

params.module === 'mjs' ? startmjs(tests, iterations) : startcjs(tests, iterations);