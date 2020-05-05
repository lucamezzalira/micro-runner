import Metrics from '../../micro-runner-metrics/index.mjs';

class Fibonacci {
    
    calculate(num) {
        if (num <= 1) return 1;
      
        return this.calculate(num - 1) + this.calculate(num - 2);
      }
}

export function run(){
    const metrics = new Metrics();
    const fb = new Fibonacci();
    metrics.init("fibonacci")
    fb.calculate(30)
    metrics.end("fibonacci")

    return metrics.results();
}