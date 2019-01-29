"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var _zxcvbn = _interopRequireDefault(require("zxcvbn"));

var _commonPasswords = _interopRequireDefault(require("./common-passwords"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calculatePasswordScore = function calculatePasswordScore(password) {
  return (0, _zxcvbn.default)(password).score;
};

var hasMinimumLength = function hasMinimumLength(password) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  return password.length >= length;
};

var hasMaximumLength = function hasMaximumLength(password) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 64;
  return password.length <= length;
};

var isCommonPassword = function isCommonPassword(password) {
  return _commonPasswords.default.includes(password);
};

var validate = function validate(password) {
  // eslint-disable-line import/prefer-default-export
  var errors = [];

  if (!hasMaximumLength(password)) {
    errors.push('max_length');
  }

  if (!hasMinimumLength(password)) {
    errors.push('min_length');
  }

  if (isCommonPassword(password)) {
    errors.push('commom_password');
  }

  return {
    isValid: errors.length === 0,
    errors: errors,
    score: calculatePasswordScore(password)
  };
};

exports.validate = validate;
//# sourceMappingURL=index.js.map