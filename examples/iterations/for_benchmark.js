const metrics = require('../../micro-runner-metrics');
const sequenceOfNumbers = require('../../micro-runner/utils/data_generator').sequenceOfNumbers;

const ARRAY_LEN = 1000000;
let num = sequenceOfNumbers(ARRAY_LEN);

module.exports = {
    run: function() {
        let sum = 0;
        metrics.init("for")
        for(let i = 0; i<num.length; i++){
            sum += num[i];
        }
        metrics.end("for", sum);

        return metrics.results();
    }
}