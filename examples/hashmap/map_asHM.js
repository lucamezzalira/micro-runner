const now = require('performance-now');
const assert = require('assert').strict;

let hashmap, total_elements;
const TOTAL_KEYS = 100000;

module.exports = {
    run: function() {
        hashmap = new Map();
        const initTime = now();
        for(let i = 0; i<TOTAL_KEYS; i++){
            hashmap.set(`key-${i}`, `value-${i}`);
        }
        total_elements = hashmap.size;
        // for(let i = 0; i<TOTAL_KEYS; i++){
        //     assert.ok(hashmap.get(`key-${i}`));
        // }
        const endTime = now();
        const total = endTime-initTime;

        return {
            time: total,
            output: total_elements
        }
    }
}