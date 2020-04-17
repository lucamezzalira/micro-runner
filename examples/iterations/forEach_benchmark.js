const now = require('performance-now');
const sequenceOfNumbers = require('../../micro-runner/utils/data_generator').sequenceOfNumbers;

const ARRAY_LEN = 1000000;
let num = sequenceOfNumbers(ARRAY_LEN);
let sum = 0;

module.exports = {
    run: function() {
        const initTime = now();
        num.forEach((v, i) => sum += v)
        const endTime = now();
        const total = endTime-initTime;

        return {
            time: total,
            output: sum
        }
    }
}