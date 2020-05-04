const Metrics = require('../../micro-runner-metrics/index.cjs');

exports.run = function(){

    let metrics = new Metrics();

    metrics.init("assign let");
    let a = 1
    metrics.end("assign let", a);

    metrics.init("assign var");
    var b = 1
    metrics.end("assign var", b);

    metrics.init("assign const");
    const c = 1
    metrics.end("assign const", c);

    return metrics.results()
}