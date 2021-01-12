// next.config.js
const withImages = require('next-images')
module.exports = withImages({
  fileExtensions: ["jpg", "JPG", "jpeg", "png", "gif"],
  webpack(config, options) {
    return config
  }
})