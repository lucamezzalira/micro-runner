# Micro-Runner-Metrics
### This is the library used for gathering metrics for Micro-Runner CLI

Micro-Runner-Metrics is a util library for creating benchmarks tests to be run by [Micro-Runner](https://github.com/lucamezzalira/micro-runner).

The library supports the creation of CommonJS modules as well as ES6 modules.
_Bear in mind ES6 modules are supported only when you run Micro-Runner with Node version 14 and onwards_.

Micro-Runner CLI calls function called `run` with a return object containing the metrics gathered in the test.
This library provide a tiny API for overcoming the burden of knowing the contract expected by the CLI for visualizing the results.

## APIs

### init(flag)
```metrics.init("my flag");```

bla bla

### end(flag, data)
```metrics.end("my flag", result);```

bla bla

### results()
```metrics.results();```

bla bla

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