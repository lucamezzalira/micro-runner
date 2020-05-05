let test_no = 0;
let in_process = false;
let benchmark;
let iterations;

const runBenchmark = (file, id) => {
    let benchmark_metrics = [];
    in_process = true;
    benchmark = require(file);

    for(let i = 0; i < iterations; i++){
        benchmark_metrics.push(benchmark.run())
    }

    in_process = false;

    return {
        id: id+1,
        benchmark: file.split("/").reverse()[0],
        data:benchmark_metrics,
        iterations: iterations
    }
    
}

const start = (tests, iterations_no) => {
    iterations = iterations_no;
    let metrics = [];

    while(test_no < tests.length){
        if(!in_process){
            metrics.push(runBenchmark(tests[test_no], test_no));
            test_no++;
        }
    }

    process.send(metrics)  
}

module.exports = start;