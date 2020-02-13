const Promise = require('bluebird')
const { readFiles } = require('node-dir')

module.exports = function getFiles(root, options) {
  let contents = []
  return new Promise((resolve, reject) => {
    readFiles(root, options,
      function(err, content, next) {
        if (err) throw err
        contents.push(content)
        next()
      },
      function(err, filenames){
        if (err) return reject(err)
        resolve(contents)
      })
  })
}
