import Metrics from '../../micro-runner-metrics/index.mjs';

const metrics = new Metrics();

export function run(){
    const arr = [1, 2, 3, 4, 5];

    metrics.init("destructuring");

    let [a, , b, , c] = arr;

    metrics.end("destructuring");

    return metrics.results();
}