// const assert = require('assert').strict;

const Metrics = require('../../micro-runner-metrics');

let hashmap, total_elements;
const TOTAL_KEYS = 100000;

module.exports = {
    run: function() {
        let metrics = new Metrics();
        hashmap = new Map();
        metrics.init("map time")
        for(let i = 0; i<TOTAL_KEYS; i++){
            hashmap.set(`key-${i}`, `value-${i}`);
        }
        total_elements = hashmap.size;
        // for(let i = 0; i<TOTAL_KEYS; i++){
            //     assert.ok(hashmap.get(`key-${i}`));
            // }

        metrics.end("map time", total_elements);

        return metrics.results();
    }
}