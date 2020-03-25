const { Text, Checkbox, Relationship, Password } = require('@keystonejs/fields')

module.exports = {
  fields: {
    firstName: {
      type: Text,
      isRequired: true
    },
    lastName: {
      type: Text,
      isRequired: true
    },
    email: {
      type: Text,
      isRequired: true,
      isUnique: true
    },
    isAdmin: {
      type: Checkbox,
      defaultValue: false
    },
    password: {
      type: Password,
      isRequired: true
    },
    documents: {
      type: Relationship,
      ref: 'Document',
      many: true
    },
    claims: {
      type: Relationship,
      ref: 'Claim.user',
      many: true
    }
  }
}
