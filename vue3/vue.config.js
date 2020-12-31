module.exports = {
    devServer: {
        // port: 3000,
        proxy: {
            '/api': {
                target: 'http://35.202.26.74:9080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    lintOnSave : false
}