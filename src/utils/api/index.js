const files = require.context('.', true, /\.js/)
const modules = {}

files.keys().forEach((key) => {
  if (key === './index.js') {
    return
  }
  let constructor = files(key).default
  modules[key.replace(/(^\.\/|\.js$)/g, '')] = new constructor()
})

export default modules
