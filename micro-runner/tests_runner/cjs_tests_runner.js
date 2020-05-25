const { parentPort } = require('worker_threads');

let test_no = 0;
let in_process = false;
let benchmark;
let iterations;

const runBenchmark = async (file, id) => {
    let benchmark_metrics = [];
    in_process = true;
    benchmark = require(file);

    for(let i = 0; i < iterations; i++){
        if(benchmark.run.constructor.name === "AsyncFunction"){
            const benchmark_results = await benchmark.run()
            benchmark_metrics.push(benchmark_results)
        } else {
            benchmark_metrics.push(benchmark.run())
        }
    }

    in_process = false;

    return {
        id: id+1,
        benchmark: file.split("/").reverse()[0],
        data:benchmark_metrics,
        iterations: iterations
    }
    
}

const start = async (tests, iterations_no) => {
    iterations = iterations_no;
    let metrics = [];

    while(test_no < tests.length){
        if(!in_process){
            metrics.push(await runBenchmark(tests[test_no], test_no));
            test_no++;
        }
    }

    parentPort.postMessage(metrics);
    process.exit();
}

module.exports = start;