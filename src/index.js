import zxcvbn from 'zxcvbn'
import commonPasswords from './common-passwords'

const calculatePasswordScore = password => password && zxcvbn(password).score

const hasMinimumLength = (password, length = 8) =>
  password && (password.length >= length)

const hasMaximumLength = (password, length = 64) =>
  password && (password.length <= length)

const isCommonPassword = password => commonPasswords.includes(password)

export const validate = (password) => { // eslint-disable-line import/prefer-default-export
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
