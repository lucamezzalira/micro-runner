const colors = require('colors');
const Table = require('cli-table3');

const resultTable = new Table({
    head: ["ID", "Test", "Time", "Iterations"],
    colWidths:[5, 30, 15, 15]
});

const analyze = (metrics) => {
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

const render = () => {
    console.log(resultTable.toString());
}

module.exports = {
    analyze: analyze,
    render: render
}