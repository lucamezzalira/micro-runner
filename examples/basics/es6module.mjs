import Metrics from '../../micro-runner-metrics/index.mjs';

const metrics = new Metrics();
const data = [];

export function run(){
    metrics.init('es6Module for loop')
    for(let i = 0; i < 10; i++){
        data.push(i);
    }
    metrics.end('es6Module for loop')
    
    return metrics.results();
}