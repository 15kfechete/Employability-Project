const { Text, Relationship } = require('@keystonejs/fields')

module.exports = {
  fields: {
    description: {
        type: Text,
        isRequired: true
    },
    user: {
        type: Relationship,
        ref: 'User.claims'
    },
    documents: {
        type: Relationship,
        ref: 'Document',
        many: true
    }
  }
}