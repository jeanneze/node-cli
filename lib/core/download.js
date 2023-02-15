const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const downloadFn = function(url, project) {
    const spinner = ora().start()
    spinner.text = '代码正在下载...'

    download('direct:' + url, project, {clone: true}, function (err) {
        console.log(err ? 'Error' : 'Success')
        if (!err) {
            spinner.succeed('代码下载成功')
            console.log(chalk.blue.bold('Done!'), chalk.bold('you run'))
            console.log('cd ' + project)
            console.log('npm install')
            console.log('npm run dev')
        } else {
            console.log('github repository:', 'direct:' + url)
            console.log('下载错误--->', err)
            spinner.fail('代码下载失败')
        }
    })
}

module.exports = downloadFn