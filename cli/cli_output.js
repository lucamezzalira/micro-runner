const colors = require('colors');
const Table = require('cli-table3');
const json2xls = require('json2xls');
const fs = require('fs');

const resultTable = new Table({
    head: ["ID", "Test", "Time", "Iterations"],
    colWidths:[8, 30, 15, 12]
});

const tmp_arr = [];

const analyze = (metrics, verbose) => {
    let total_tests_time, average;
    let winner, tmp_average, metrics_length;

    for(let i = 0; i < metrics.length; i++){
        average = 0;
        total_tests_time = 0;
        metrics_length = metrics[i].data.length;
        for(let k = 0; k < metrics_length; k++){
            total_tests_time += metrics[i].data[k].time;
        }
        average = total_tests_time/metrics_length;
        
        if(!tmp_average) tmp_average = average;
        if(average < tmp_average){
            tmp_average = average;
            winner = (!verbose) ? i : i * (metrics_length+1);
        } 

        tmp_arr.push({
            id:metrics[i].id.toString(),
            benchmark: metrics[i].benchmark,
            time: `${average.toFixed(3)} ms`,
            iterations: metrics[i].iterations
        })  

        if(verbose){
            metrics[i].data.forEach((iteration, index) => {
                tmp_arr.push({
                    id: `${metrics[i].id}.${index+1}`,
                    benchmark: "",
                    time: `${iteration.time.toFixed(3)} ms`,
                    iterations: 1
                })
            })
        }
    }

    if(winner){
        tmp_arr[winner].id = colors.green(tmp_arr[winner].id);
        tmp_arr[winner].benchmark = colors.green(tmp_arr[winner].benchmark);
        tmp_arr[winner].time = colors.green(tmp_arr[winner].time);
    }

    tmp_arr.forEach((value) => resultTable.push(Object.values(value)))
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