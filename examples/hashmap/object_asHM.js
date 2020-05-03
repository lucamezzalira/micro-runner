// const assert = require('assert').strict;

const Metrics = require('../../micro-runner-metrics');

let hashmap, total_elements;
const TOTAL_KEYS = 100000;

module.exports = {
    run: function() {
        hashmap = {};

        let metrics = new Metrics();

        metrics.init("obj time")
        for(let i = 0; i<TOTAL_KEYS; i++){
            hashmap[`key-${i}`] = `value-${i}`;
        }
        
        total_elements = Object.keys(hashmap).length
        // for(let i = 0; i<TOTAL_KEYS; i++){
            //     assert.ok(hashmap[`key-${i}`]);
            // }
        metrics.end("obj time", total_elements);

        return metrics.results();
    }
}