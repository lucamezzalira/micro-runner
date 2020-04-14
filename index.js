const ora = require('ora');
const fork = require('child_process').fork;
const path = require('path');
const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const output = require('./cli/cli_output');
const args = require('./cli/args');

const files_list = async (url) => {
    let files;

    try{
        files  = await readdir(path.resolve(url))
    } catch(err){
        throw "the directory doesn't exist, check the path again";
    }
    
    files = files.filter(file => {
        if(path.extname(file).toLowerCase() === '.js')
            return file
    })
    
    return files.map(file => path.resolve(url) + "/" + file);
}

const init = async () => {
    
    let iterations = args.iterations;
    let tests;

    if(args.folder){
        tests = await files_list(args.folder);
    } else {
        tests = [path.resolve(args.file)]
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

//TODO: add --version and --help
//TODO: highlight in green is needed only in comparison
//TODO: move files list logic into args.js
//TODO: review APIs for creating tests and publish to micro-runner
//TODO: add --verbose mode with details of every run
//TODO: web server for testing in different devices