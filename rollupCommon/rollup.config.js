const common = require('rollup-plugin-commonjs')

module.exports={
    input:"./index.js",
    output:{
        file:"dist/bundle.js",
        format:"iife" //立即执行函数
    },
    plugins:[
        common()
    ]

}