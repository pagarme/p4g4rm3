const zxcvbn = require('zxcvbn')

const calculatePasswordScore = password => zxcvbn(password)

const validateMinimumLength = (password) => {
  if (password.length >= 8) {
    return true
  }

  return false
}

const validateMaximumLength = (password) => {
  if (password.length <= 64) {
    return true
  }

  return false
}

module.exports = {
  calculatePasswordScore,
  validateMinimumLength,
  validateMaximumLength,
}
