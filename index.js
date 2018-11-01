#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const convert = require('./lib');


var runOptions = {
    inputFilePath : null,
    outFilePath : null,
    valuableName : null,
    quote : 'single'
};

function switchAnalysis(options, v) {
    let values = v.split("=");
    let value = values[1];
    let option = values[0];
    switch(option){
        case 'input':
            options.inputFilePath = value;
            break;
        case 'out':
            options.outFilePath = value;
            break;
        case 'vn':
            options.valuableName = value;
            break;
        case 'quote':
            options.quote = value;
            break;
        default:
            break;
    }
}

run = function() {

    console.log(`start make string`);
    let argvs = process.argv;
    argvs.forEach(element => {
        switchAnalysis(runOptions, element);
    });

    if(!fs.existsSync(runOptions.inputFilePath)) {
        console.log(`${runOptions.inputFilePath} is not exist`);
        return false;
    }

    let sourceCode = fs.readFileSync(runOptions.inputFilePath , 'utf8');
    let isSingleQ = runOptions.quote == 'single' ? true : false;

    let code = convert(runOptions.valuableName, sourceCode, isSingleQ);

    fs.writeFileSync(runOptions.outFilePath, code);

    console.log(`finish make text`);
}()
