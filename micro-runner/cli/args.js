const minimist = require('minimist');
const colors = require('colors');
const params = minimist(process.argv.slice(2));
const version = require('../../package.json').version;
const util = require('util');
const fs = require('fs');
const readdir = util.promisify(fs.readdir);
const path = require('path');

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

const verify_module_type = module_type => {
    if(!module_type)
        return "cjs";
    
    return module_type;
    
}

const files_list = async (url) => {
    const isDirectory = fs.statSync(url).isDirectory();
    if(!isDirectory) return;

    let files = await readdir(path.resolve(url))
    
    files = files.filter(file => {
        const ext = path.extname(file).toLowerCase()
        if(ext === '.js' || ext === '.mjs' || ext === '.cjs')
            return file
    })
    
    return files.map(file => path.resolve(url) + "/" + file);
}

module.exports = {
    iterations: verify_iterations(params.i),
    folder: params.f,
    files: params.f ? files_list(params.f) : [],
    file: params._[0],
    verbose: params.verbose,
    XLSoutput: params.x,
    module_type: verify_module_type(params.m)
}