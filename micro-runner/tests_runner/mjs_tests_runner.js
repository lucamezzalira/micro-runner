let test_no = 0;
let benchmark;
let iterations;

async function runAsyncBenchmark(file, id){
    let benchmark_metrics = [];
    benchmark = await import(file);

    for(let i = 0; i < iterations; i++){
        benchmark_metrics.push(benchmark.run())
    }

    return {
        id: id+1,
        benchmark: file.split("/").reverse()[0],
        data:benchmark_metrics,
        iterations: iterations
    }
}

async function start(tests, iterations_no){
    iterations = iterations_no;
    let metrics = [];
    let metric;
    
    while(test_no < tests.length){
        metric = await runAsyncBenchmark(tests[test_no], test_no);
        metrics.push(metric);
        test_no++;
    }

    process.send(metrics);
}

module.exports = start;