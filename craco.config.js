const path = require('path')
module.exports = {
  devServer: {
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
