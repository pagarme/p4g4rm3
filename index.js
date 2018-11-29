const zxcvbn = require('zxcvbn')

const calculatePasswordScore = password => zxcvbn(password)

const validateLength = (password) => {
  if (password.length >= 8) {
    return true
  }

  return false
}

module.exports = {
  calculatePasswordScore,
  validateLength,
}
