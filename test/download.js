const download = require('download-git-repo')

download('direct:https://github.com/jeanneze/koa-template.git#master', './xxx', {clone: true}, function (err) {
    console.log(err ? 'Error' : 'Success')
})