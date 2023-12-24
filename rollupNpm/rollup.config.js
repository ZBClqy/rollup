const resolve=require('rollup-plugin-node-resolve')

module.exports={
    input:"./index.js",
    output:{
        file:'./dist/bundle.js',
        format:'iife'
    },
    plugins:[
        resolve()
    ]
}