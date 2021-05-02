module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/DBL-Project/'
    : '/'
  pages: {
    'index': {
      entry: './src/pages/Home/main.js'
      template: 'public/index.html'
      title: 'Home'
      chunks: [ 'chunk-vendors', 'chunk-common', 'index']
    }
    'fileUpload': {
      entry: './src/pages/fileUpload/main.js'
      template: 'public/index.html'
      title: 'fileUpload'
      chunks: [ 'chunk-vendors', 'chunk-common', 'fileUpload']
    }
  }
}