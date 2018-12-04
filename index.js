const zxcvbn = require('zxcvbn')
const commomPasswords = require('./commom-passwords.js')

const calculatePasswordScore = password => zxcvbn(password)

const validateMinimumLength = (password, length = 8) => (password.length >= length)

const validateMaximumLength = (password, length = 64) => (password.length <= length)

const isCommomPassword = password => commomPasswords.includes(password)

module.exports = {
  calculatePasswordScore,
  validateMinimumLength,
  validateMaximumLength,
  isCommomPassword,
}
