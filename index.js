const Table = require('cli-table3');
const ora = require('ora');
const minimist = require('minimist');
const fork = require('child_process').fork;
const path = require('path');
const fs = require('fs');
const util = require('util');
const colors = require('colors');
const readdir = util.promisify(fs.readdir);

const BENCHMARK_ITERATION = 10;
const MAX_ITERATIONS = 100;
const resultTable = new Table({
    head: ["ID", "Test", "Time", "Iterations"],
    colWidths:[5, 30, 15, 15]
});


const files_list = async (url) => {
    let files;

    try{
        files  = await readdir(path.resolve(url))
    } catch(err){
        console.log(err);
    }

    return files.map(file => path.resolve(url) + "/" + file);
}

const generateOutput = (metrics) => {
    let total_tests_time, average;
    let winner, tmp_average;
    let tmp_arr = [];
    for(let i = 0; i < metrics.length; i++){
        average = 0;
        total_tests_time = 0;
        for(let k = 0; k < metrics[i].data.length; k++){
            total_tests_time += metrics[i].data[k].time;
        }
        average = total_tests_time/metrics[i].data.length;
        
        if(!tmp_average) tmp_average = average;
        if(average < tmp_average){
            tmp_average = average;
            winner = i;
        } 

        tmp_arr.push({
            id:metrics[i].id,
            benchmark: metrics[i].benchmark,
            average: `${average.toFixed(3)} ms`,
            iterations: metrics[i].iterations
        })  
    }

    tmp_arr[winner].id = colors.green(tmp_arr[winner].id);
    tmp_arr[winner].benchmark = colors.green(tmp_arr[winner].benchmark);
    tmp_arr[winner].average = colors.green(tmp_arr[winner].average);

   tmp_arr.forEach((value) => resultTable.push(Object.values(value)))
    
}

const verify_iterations = iterations => {
    if(!iterations)
        return BENCHMARK_ITERATION;
    
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
        console.log(resultTable.toString());
    });
    child.on("message", (data) => {
        generateOutput(data);
    })
}

const spinner = ora({
    text: "running benchmarks",
    color: "yellow"
}).start();

init();

//TODO: check JS files are passed and skip others
//TODO: add maximum files to be analized
//TODO: export results to IMG
//TODO: refactor index.js extracting output code
//TODO: add --verbose mode with details of every run
//TODO: web server for testing in different devices