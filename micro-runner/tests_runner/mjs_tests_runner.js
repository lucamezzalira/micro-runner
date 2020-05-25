const Util = require('util');
const { parentPort } = require('worker_threads');

const regex = /default/
let test_no = 0;
let benchmark;
let iterations;

process.on('unhandledRejection', error => {
    process.exit(1)
})

async function runAsyncBenchmark(file, id){
    let benchmark_metrics = [];
    benchmark = await import(file);
    
    for(let i = 0; i < iterations; i++){
        if(!regex.test(Util.inspect(benchmark))){
            if(benchmark.run.constructor.name === "AsyncFunction"){
                try{
                    const benchmark_results = await benchmark.run()
                    benchmark_metrics.push(benchmark_results)
                } catch(err){
                    console.error(err);
                }
            } else {
                benchmark_metrics.push(benchmark.run())
            }
        } else { 
            let test = new benchmark.default();
            if(test.constructor.name === "AsyncFunction"){
                try{
                    const benchmark_results = await test.run()
                    benchmark_metrics.push(benchmark_results)
                } catch(err){
                    console.error(err);
                }
            } else {
                benchmark_metrics.push(test.run())
            }
        }
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

    parentPort.postMessage(metrics);
    process.exit();
}

module.exports = start;