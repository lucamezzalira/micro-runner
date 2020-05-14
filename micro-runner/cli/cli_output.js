const Table = require('cli-table3');
const json2xls = require('json2xls');
const fs = require('fs');
const colors = require('colors');

const resultTable = new Table({
    head: ["ID", "Benchmarks", "Flags", "Time", "Iterations"],
    colWidths:[8, 30, 25, 15, 12]
});

const tmp_arr = [];

const analyze = (metrics, verbose) => {
    let total_tests_time,
        metrics_length,
        average,
        benchmarks_length;
    
    for(let i = 0; i < metrics.length; i++){
        total_tests_time = {};
        metrics_length = metrics[i].data.length;
    
        for(let k = 0; k < metrics_length; k++){   
            Object.values(metrics[i].data[k]).forEach(benchmark => {
                if(!total_tests_time[benchmark.flag])
                    total_tests_time[benchmark.flag] = 0;

                total_tests_time[benchmark.flag] += benchmark.time;
            });
        }

        benchmarks_length = Object.values(total_tests_time).length;

        tmp_arr.push({
            id:metrics[i].id.toString(),
            benchmark: metrics[i].benchmark,
            flag:"",
            raw_time: "",
            time: "",
            iterations: ""
        })  

        for(let prop in total_tests_time){
            average = total_tests_time[prop]/metrics[i].iterations
            tmp_arr.push({
                id:"",
                benchmark: "",
                flag: prop,
                time: `${average.toFixed(3)} ms`,
                raw_time: average.toFixed(3),
                iterations: metrics[i].iterations
            })
        }

        if(verbose){
            metrics[i].data.forEach((iteration, index) => {
                Object.values(iteration).forEach(benchmark => {
                    tmp_arr.push({
                        id: `${metrics[i].id}.${index+1}`,
                        benchmark: "",
                        flag: benchmark.flag,
                        time: `${benchmark.time.toFixed(3)} ms`,
                        raw_time: benchmark.time.toFixed(3),
                        iterations: 1
                    })
                })
            })
        }
    }

    tmp_arr.forEach(value => {
        resultTable.push([value.id, value.benchmark, value.flag, value.time, value.iterations])
    })
}

const render = () => {
    console.log(resultTable.toString());
}

const createXLS = (dir) => {
    const xls = json2xls(tmp_arr);
    fs.writeFileSync(dir + `/micro-runner_${Date.now()}.xlsx`, xls, 'binary');
}

module.exports = {
    analyze: analyze,
    render: render,
    createXLS: createXLS
}