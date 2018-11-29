import test from 'ava'
import p4g4rm3 from '../../.'

const password64 = 'eightlen'.repeat(8)
const password65 = 'eightlen'.repeat(8).concat('1')

test('Password too short', (t) => {
  const lengthResult = p4g4rm3.validateMinimumLength('1234567')
  t.is(lengthResult, false)
})

test('Password containing valid minimum length', (t) => {
  const lengthResult = p4g4rm3.validateMinimumLength('12345678')
  t.is(lengthResult, true)
})

test('Password too long', (t) => {
  const lengthResult = p4g4rm3.validateMaximumLength(password65)
  t.is(lengthResult, false)
})

test('Password containing valid maximum length', (t) => {
  const lengthResult = p4g4rm3.validateMaximumLength(password64)
  t.is(lengthResult, true)
})
