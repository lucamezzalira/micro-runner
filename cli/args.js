const minimist = require('minimist');
const colors = require('colors');
const params = minimist(process.argv.slice(2));
const version = require('../package.json').version;

const DEFAULT_ITERATIONS = 10;
const MAX_ITERATIONS = 100;

if(params.v){
    console.log(`Micro-Runner version ${version}`);
    process.exit();
}

if(params._.length > 1) console.warn(colors.yellow("Micro-Runner accepts just 1 file as parameter, if you need to benchmark multiple files please use command -f ./myfolder"))

const verify_iterations = iterations => {
    if(!iterations)
        return DEFAULT_ITERATIONS;
    
    if(iterations > MAX_ITERATIONS)
        return MAX_ITERATIONS;
    
    return iterations;
}

module.exports = {
    iterations: verify_iterations(params.i),
    folder: params.f,
    file: params._[0]
}