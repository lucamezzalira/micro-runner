const now = require('performance-now');
const assert = require('assert').strict;

let hashmap, total_elements;
const TOTAL_KEYS = 100000;

module.exports = {
    run: function() {
        hashmap = {};

        const initTime = now();
        for(let i = 0; i<TOTAL_KEYS; i++){
            hashmap[`key-${i}`] = `value-${i}`;
        }
        
        total_elements = Object.keys(hashmap).length
        // for(let i = 0; i<TOTAL_KEYS; i++){
        //     assert.ok(hashmap[`key-${i}`]);
        // }
        const endTime = now();
        const total = endTime-initTime;

        return {
            time: total,
            output: total_elements
        }
    }
}