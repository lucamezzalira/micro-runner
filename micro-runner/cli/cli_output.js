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
            raw_time: 0
        })  

        for(let prop in total_tests_time){
            average = total_tests_time[prop]/metrics[i].iterations
            tmp_arr.push({
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
                        flag: benchmark.flag,
                        time: `${benchmark.time.toFixed(3)} ms`,
                        raw_time: benchmark.time.toFixed(3),
                        iterations: 1
                    })
                })
            })
        }
    }

    //TO FIX
    //select_winners(tmp_arr, verbose);

    tmp_arr.forEach(value => {
        resultTable.push([value.id, value.benchmark, value.flag, value.time, value.iterations])
    })
}

const select_winners = (metrics_arr, isVerbose) => {
    let winner, id;
    const winners_arr = metrics_arr.slice();
    winners_arr.sort((a,b) => a.raw_time - b.raw_time)
    for(let i = 0; i < winners_arr.length; i++){
        if(!Number.isInteger(Number(winners_arr[i].id))) continue; // check the id is integer otherwise is not an average
        if(!winner) winner = winners_arr[i]; //assing the winner if is underfined
        if(winner.raw_time === winners_arr[i].raw_time){
            if(isVerbose){
                id = (Number(winners_arr[i].id)-1) * (Number(winners_arr[i].iterations)+1)
            } else {
                id = Number(winners_arr[i].id)-1 
            }

            metrics_arr[id].id = colors.green(metrics_arr[id].id);
            metrics_arr[id].benchmark = colors.green(metrics_arr[id].benchmark);
            metrics_arr[id].time = colors.green(metrics_arr[id].time);
        } else {
            break
        }
    }
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