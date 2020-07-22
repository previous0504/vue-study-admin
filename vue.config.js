const path = require("path")

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    chainWebpack: config => {
        // 添加新的svg-sprite-loader处理svgIcon
        config.module
            .rule('svgIcon')
            .test(/\.svg$/)
            .include
            .add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')  // 一定要添加use 
            .loader('svg-sprite-loader')
            .tap(options => {
                options = {
                    symbolId: 'icon-[name]'
                }
                return options
            })

        // 原有的svg图像处理loader添加exclude 
        config.module
            .rule('svg')
            .exclude
            .add(resolve('src/icons'))
            .end()
    }

}