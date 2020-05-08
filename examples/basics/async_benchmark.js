const Metrics = require('../../micro-runner-metrics/index.cjs');

const trigger_signal = async () =>{
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(Math.floor(Math.random()*100)), 2000);
    })

    const res = await promise;
    return res
}

const run = async () => {
    const metrics = new Metrics();
    metrics.init("async benchmark");
    const res = await trigger_signal()
    metrics.end("async benchmark", res)

    return metrics.results();
}

module.exports = {
    run: run
}