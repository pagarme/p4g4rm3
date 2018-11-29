const zxcvbn = require('zxcvbn')


const calculatePasswordScore = (password) => zxcvbn(password)


module.exports = {
  calculatePasswordScore,
}
