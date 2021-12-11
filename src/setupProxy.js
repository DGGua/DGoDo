const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

    app.use('/api', createProxyMiddleware({
        target: 'http://big.dggua.top:4001',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
        },

    }));

};