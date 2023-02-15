const inquirer = require('inquirer')
const config = require('../../config')
const download = require('./download')

const action = async (project, args) => {
    // 命令行的执行逻辑代码
    console.log(project)
    console.log(args)
    // node框架： express koa egg
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'framework',
            choices: config.framework,
            message: '请选择你所使用的框架'
        }
    ])
    console.log(answer)
    // 下载代码模版
    download(config.frameworkUrl[answer.framework], project)
}

module.exports = action