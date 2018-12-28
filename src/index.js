const zxcvbn = require('zxcvbn')
const commonPasswords = require('./common-passwords.js')

const calculatePasswordScore = password => zxcvbn(password).score

const hasMinimumLength = (password, length = 8) =>
  (password.length >= length)

const hasMaximumLength = (password, length = 64) =>
  (password.length <= length)

const isCommonPassword = password => commonPasswords.includes(password)

const validate = (password) => {
  const errors = []

  if (!hasMaximumLength(password)) {
    errors.push('max_length')
  }

  if (!hasMinimumLength(password)) {
    errors.push('min_length')
  }

  if (isCommonPassword(password)) {
    errors.push('commom_password')
  }

  return {
    isValid: (errors.length === 0),
    errors,
    score: calculatePasswordScore(password),
  }
}

module.exports = { validate }
