const ora = require('ora')
const spinner = ora().start()
spinner.text = 'loading...'
setTimeout(() => {
    console.log('111')
    // spinner.succeed('结束')
    // spinner.fail('中断')
    spinner.info('提示')
}, 3000)