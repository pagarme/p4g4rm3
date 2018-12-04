const zxcvbn = require('zxcvbn')
const commomPasswords = require('./commom-passwords.js')

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

const isCommomPassword = password => 
  commomPasswords.some(item => (item === password))

module.exports = {
  calculatePasswordScore,
  validateMinimumLength,
  validateMaximumLength,
  isCommomPassword,
}
