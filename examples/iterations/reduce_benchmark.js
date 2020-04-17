const now = require('performance-now');
const sequenceOfNumbers = require('../../micro-runner/utils/data_generator').sequenceOfNumbers;

const ARRAY_LEN = 1000000;
let num = sequenceOfNumbers(ARRAY_LEN);
let sum = 0;

module.exports = {
    run: function(){
        const initTime = now();
        sum = num.reduce((acc, value) => acc + value);
        const endTime = now();
        const total = endTime-initTime;

        return {
            time: total,
            output: sum
        }
    }
}
