const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode:'development',
    plugins:[
        new CleanWebpackPlugin(), // 会删除上次构建的文件，然后重新构建
    ],
    module:{
        rules:[
            {
                test:/\.js[x]?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:[
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ],
                    plugins:[
                        "@babel/plugin-transform-runtime",
                        "@babel/plugin-proposal-class-properties",
                        //加上这个，使用Loadable就不用手写modules: [name]，而是使用'./dir/filename'命名
                        // "react-loadable/babel" 

                        // 'react-refresh/babel'
                    ]
                }
            }
        ]
    },
    resolve: {
        //到指定目录搜索’引入的模块‘
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        //目录别名
        alias: {
          '@': path.resolve(__dirname, "./src"),
          '~': path.resolve(__dirname, "./")
        },
        //import导入时可省略后缀
        extensions: [ ".js", "jsx", ".ts", ".tsx", ".json"],
    }
}