module.exports = {
    devServer: {
        // port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:9080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    lintOnSave : false
}