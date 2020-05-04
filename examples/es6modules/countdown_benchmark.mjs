import Metrics from '../../micro-runner-metrics/index.mjs';

const metrics = new Metrics();
let init_no = 1000000;

export function run(){
    metrics.init("countdown")
    while(init_no > 0){
        init_no--;
    }
    metrics.end("countdown")

    return metrics.results();
}