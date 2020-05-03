const now = require('performance-now')

class Metric{
    constructor(){
        this.metrics = {};
        this.init_metrics = {}
    }

    results(){
        return this.metrics;
    }

    init(flag){
        this.init_metrics[flag] = now();
    }

    end(flag, output){
        const endTime = now();
        const initTime = this.init_metrics[flag];
        if(initTime){
            this.metrics[flag] = {
                init: initTime,
                end: endTime,
                time: endTime-initTime,
                output: output
            }
        } else {
            throw "no init time associated to this label. Create first a init point and then you can add an end point";
        }
    }
}

module.exports = Metric;