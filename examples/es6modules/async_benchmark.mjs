import Metrics from '../../micro-runner-metrics/index.mjs';

const trigger_signal = async () =>{
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(Math.floor(Math.random()*100)), 2000);
    })

    const res = await promise;
    return res
}

export async function run () {
    const metrics = new Metrics();
    metrics.init("async benchmark");
    const res = await trigger_signal()
    metrics.end("async benchmark", res)

    return metrics.results();
}