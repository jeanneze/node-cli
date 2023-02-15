const actionFn = require('./action')

const commander = function(program) {
    program
    .command('create <project> [other...]')
    .alias('crt')
    .description('创建项目')
    .action(actionFn)
}

module.exports = commander