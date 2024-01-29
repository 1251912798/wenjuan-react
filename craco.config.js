const path = require('path')
module.exports = {
  devServer: {
    port: 8000,
    proxy: {
      '/api': 'http://localhost:3002',
    },
  },
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
}
