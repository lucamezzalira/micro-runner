const ora = require('ora');
const fork = require('child_process').fork;
const path = require('path');
const colors = require('colors');
const fs = require('fs');
const output = require('./cli/cli_output');
const args = require('./cli/args');

const BENCHMARK_LAUNCHER = path.resolve(__dirname + '/tests_runner/tests_runner.js');

const init = async () => {
    const iterations = args.iterations;
    const module_type = args.module_type;
    let tests;

    if(args.folder){
        tests = await args.files;
    } else {
        if(fs.existsSync(args.file)){
            tests = [path.resolve(args.file)]
        }else{
            spinner.stop();
            console.error(colors.red("the file doesn't exist, check the path and try again"));
            process.exit();
        }
    } 

    const child = fork(BENCHMARK_LAUNCHER, [JSON.stringify({tests: tests, iterations: iterations, module: module_type})])
    child.on("exit", function(){
        spinner.succeed("benchmarks ready")
        output.render();
        if(args.XLSoutput)
            output.createXLS(path.resolve(args.XLSoutput));
    });
    child.on("message", (data) => {
        output.analyze(data, args.verbose);
    })
    child.on("error", (err) => {
        spinner.stop();
        throw err;
    })
}

process.on("uncaughtException", (err) => {
    spinner.stop();
    console.error(colors.red("\nSomething went wrong! Please try again :("));
    process.exit();
});

const spinner = ora({
    text: "running benchmarks ",
    color: "yellow"
}).start();

init();

//=============== release micro-runner 0.3.1 ==================
//TODO: async examples
//TODO: update README with benchmark anatomy
//TODO: BUG: when in the table I have same time only the first is winner
//TODO: replace child process with workers_threads
//TODO: review benchmark.js way to compare tests(https://github.com/mathiasbynens/Benchmark.js/blob/d4e874f2c0956d11bd1187870c2655eb3a3ab692/benchmark.js#L1175-1194)
//TODO: introduce ops/sec as additional metric (https://www.npmjs.com/package/ops-per-sec)
//=============== release micro-runner 0.4.0 ==================
//TODO: web server for testing in different devices