# Micro-Runner
### a CLI playground for benchmarking your JavaScript code 

![Micro-Runner terminal example](https://github.com/lucamezzalira/micro-runner/raw/master/micro-runner.png "Micro-Runner terminal example")

The main aim behind Micro-Runner is making microbenchmarking accessible and fun.    
Often, web, mobile or desktop applications are suffering of poor performances and developers are struggling to analyze their applications performance and improve them.
Micro-Runner aims to run some code in isolation like you would do in a  playground, directly from your CLI, providing an immediate feedback when you want to compare the most performant implementation across multiple of them.

## Installation
```
npm install -g micro-runner
```

In this way, Micro-Runner is always available inside your terminal!

## Basic usage
```
micro-runner ./mybenchmark.js
```

Micro-Runner runs your test retrieving the benchmark of specific parts of your code displaying them in a table.    
The best Micro-Runner usage is for comparing similar alghortims with different implementations.   
Micro-Runner is a playground for learning how fast some code may run in isolation.     

## CLI arguments

```
micro-runner ./mybenchmark.js
```
Micro-Runner requires at least a file to run a benchmark on.    
When you need to specify multiple file please use the folder argument as specified in this guide.

```
micro-runner -i 10 ./mybenchmark.js
```
**-i** corresponds to the number of iterations you wanna run per benchmark, it has to be an integer and can be a **number from 1 to 100**. When the parameter provided is larger than 100, the iterations per benchmark will be 100.   
When this parameter is not specified the **default value is 10**.

_If you have many tests and you set 500 iterations per benchmark be aware it could take a while._

```
micro-runner -f ./benchmarks
```
**-f** is used for specifying a folder with JavaScript files. Every single JavaScript file in that folder will run sequentially one after the other.

```
micro-runner -f ./benchmarks -m mjs
```
**-m** command followed by `mjs` is used when the files to benchmark are _ES6 modules_. By default all the modules will be run as CommonJS modules, you can also explicitely add the argument `cjs` to `-m` parameter.     

```
micro-runner --verbose ./benchmark.js
```
**-verbose** command shows every iteration time for each benchmark

```
micro-runner -x ./results ./benchmark.js
```
**-x** command followed by a directory exports the Micro-Runner results to an Excel file

```
micro-runner -v
```
**-v** command shows the Micro-Runner version installed

## Benchmark anatomy

TBD

### Roadmap
[x] create JavaScript library for gathering and reporting metrics to Micro-Runner   
[] better errors management    
[] add _interactive help_ in the CLI     
[] gathering micro benchmarks from existing applicaitons      

### Contacts
For any additional info or ideas feel free to [reach me out](mailto:mezzalab@gmail.com)
