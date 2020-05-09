const Metrics = require('../../micro-runner-metrics');
const sequenceOfNumbers = require('../../micro-runner/utils/data_generator').sequenceOfNumbers;

const ARRAY_LEN = 1000000;
let num = sequenceOfNumbers(ARRAY_LEN);

module.exports = {
    run: function() {
        let sum = 0;
        let metrics = new Metrics();
        metrics.init("for casting", sum);
        for(let i = 0; i<num.length; i++){
            sum += Number(num[i]);
        }
        metrics.end("for casting", sum);

        return metrics.results();
    }
}