const { Text, Checkbox, Password } = require('@keystonejs/fields')

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
    isAdmin: {
      type: Checkbox,
      defaultValue: false
    },
    password: {
      type: Password,
      isRequired: true
    }
  }
}
