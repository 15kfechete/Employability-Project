const { File, Text } = require('@keystonejs/fields')
const { LocalFileAdapter } = require('@keystonejs/file-adapters')

const fileAdapter = new LocalFileAdapter({
  src: './files',
  path: '/files'
})

module.exports = {
  fields: {
    file: {
      type: File,
      adapter: fileAdapter,
      isRequired: true
    },
    name: {
      type: Text,
      isRequired: true
    }
  }
}
