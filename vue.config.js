const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

// 引入骨架屏插件
// const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const url = "http://192.168.8.48:8006/"
module.exports = {
    chainWebpack: config => {
        // 修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('src'))
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                // 修改它的选项...
                options.i18n = '@kazupon/vue-i18n-loader'
                return options
            })

    },
    devServer: {
        disableHostCheck: true,
        port: 8080,
        proxy: {
            '/api': {
                target: url, // 你要访问的本地地址或者是网址地址
                ws: true, // 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端
                pathRewrite: {
                    "^/api": "/api"
                    //这里理解成用/api代替target里面的地址，后面组件中我们掉接口时直接用api代替，
                }
            },
        },
    },
}