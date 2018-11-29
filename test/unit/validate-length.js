import test from 'ava';
import p4g4rm3 from '../../.'

test('Password too short', t => {
  const lengthResult = p4g4rm3.validateLength('1234567')
  t.is(lengthResult, false)
})

test('Password containing valid length', t => {
  const lengthResult = p4g4rm3.validateLength('12345678')
  t.is(lengthResult, true)
})
