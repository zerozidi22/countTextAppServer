module.exports = {
    devServer: {
        // port: 3000,
        proxy: {
            '/api': {
                target: 'http://0.0.0.0:9080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    lintOnSave : false
}