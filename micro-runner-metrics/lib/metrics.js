const now = require('performance-now');

let metrics, init_metrics = {};

const results = () => {
    return metrics;
}

const init = (flag) => {
    init_metrics[flag] = now();
}

const end = (flag, output) => {
    metrics = {}
    const initTime = init_metrics[flag];
    if(initTime){
        metrics[flag] = {
            time: now()-initTime,
            output: output
        }
    } else {
        throw "no init time associated to this label. Create first a init point and then you can add an end point";
    }
}

module.exports = {
    results: results,
    init: init,
    end: end
}