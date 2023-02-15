#! /usr/bin/env node
const { program } = require('commander')
const help = require('../lib/core/help')
const commander = require('../lib/core/commander')
// console.log('node-cli');
// console.log(process.argv);
// if (process.argv[2]=='--help') {
//     console.log('获取到了命令参数')
// }
help(program)
commander(program)




program.parse(process.argv)