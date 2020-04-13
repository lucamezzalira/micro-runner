const ora = require('ora');
const minimist = require('minimist');
const fork = require('child_process').fork;
const path = require('path');
const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const output = require('./utils/cli_output');

const DEFAULT_ITERATIONS = 10;
const MAX_ITERATIONS = 100;

const files_list = async (url) => {
    let files;

    try{
        files  = await readdir(path.resolve(url))
    } catch(err){
        console.log(err);
    }

    return files.map(file => path.resolve(url) + "/" + file);
}

const verify_iterations = iterations => {
    if(!iterations)
        return DEFAULT_ITERATIONS;
    
    if(iterations > MAX_ITERATIONS)
        return MAX_ITERATIONS;
    
    return iterations;
}

const init = async () => {
    const params = minimist(process.argv.slice(2))
    let iterations = verify_iterations(params.i);
    let tests;

    if(params.f){
        tests = await files_list(params.f);
    } else {
        tests = [path.resolve(params._[0])]
    } 

    const child = fork('./tests_runner.js', [JSON.stringify({tests: tests, iterations: iterations})])
    child.on("exit", function(){
        spinner.succeed("benchmarks ready")
        output.render();
    });
    child.on("message", (data) => {
        output.analyze(data);
    })
}

const spinner = ora({
    text: "running benchmarks",
    color: "yellow"
}).start();

init();

//TODO: check JS files are passed and skip others
//TODO: refactor on index.js -> extracting args logic
//TODO: review APIs for creating tests and publish to micro-runner
//TODO: add --verbose mode with details of every run
//TODO: web server for testing in different devices