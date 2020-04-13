const now = require('performance-now');
const sequenceOfNumbers = require('../../utils/data_generator').sequenceOfNumbers;

const ARRAY_LEN = 1000000;
let num = sequenceOfNumbers(ARRAY_LEN);
let sum = 0;

module.exports = {
    run: function(){
        const initTime = now();
        for(const p in num){
            sum += num[p];
        }
        const endTime = now();
        const total = endTime-initTime;

        return {
            time: total,
            output: sum
        }
    }
}
