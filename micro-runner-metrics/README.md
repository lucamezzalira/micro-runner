# Micro-Runner-Metrics
### This is the library used for gathering metrics for Micro-Runner CLI

Micro-Runner-Metrics is a util library for creating benchmarks tests to be run by [Micro-Runner](https://github.com/lucamezzalira/micro-runner).

The library supports the creation of CommonJS modules as well as ES6 modules.
_Bear in mind ES6 modules are supported only when you run Micro-Runner with Node version 14 and onwards_.

Micro-Runner CLI calls function called `run` with a return object containing the metrics gathered in the test.
This library provide a tiny API for overcoming the burden of knowing the contract expected by the CLI for visualizing the results.

## APIs
The APIs are pretty simple, after istantiating a `new Metric` object, we need to wrap the code  to test with the init and end methods.
A key requirement is exposing a run method that returns `metrics.result()` for the Micro-Runner CLI to collect the metrics tracked in the benchmark.

### init(flag)
```metrics.init("my flag");```     

This method is used for initialize the metrics collection. It requires to set a flag as string that has to be same when we call the `end` method.

### end(flag, data)
```metrics.end("my flag", result);```     

This method is used for stopping the time, calculate the execution time and optionally pass some data related computed by the algorithm(`data`). It requires to set a flag as string that has to be same when of the `init` method.

### results()
```metrics.results();```

Results method contains the metrics gathered during the benchmark test.
You can track multiple benchmarks in the same `run` function, all the data gathered will be passed to the micro-runner CLI for displaying the results.


# Examples
Following some code examples on how to implement a micro-runner-metrics library to be used by micro-runner CLI

## CommonJS example

```
const Metrics = require('micro-runner-metrics');

module.exports = {
    run: function(){
        let metrics = new Metrics();

        metrics.init("assign let");
        let a = 1
        metrics.end("assign let", a);

        return metrics.results()
    }
}
```

## ES6 module example

### With Class

```
import Metrics from 'micro-runner-metrics';

class Fibonacci {
    calculate(num) {
        if (num <= 1) return 1;
      
        return this.calculate(num - 1) + this.calculate(num - 2);
      }
}

class Test {
    run(){
        const metrics = new Metrics();
        const fb = new Fibonacci();
        metrics.init("fibonacci")
        fb.calculate(30)
        metrics.end("fibonacci")
    
        return metrics.results();
    }
}

export default Test;
```

### Without Class

```
import Metrics from 'micro-runner-metrics';

const metrics = new Metrics();
let init_no = 1000000;

export function run(){
    metrics.init("countdown")
    while(init_no > 0){
        init_no--;
    }
    metrics.end("countdown")

    return metrics.results();
}
```