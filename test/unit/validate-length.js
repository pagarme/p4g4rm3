import test from 'ava'
import p4g4rm3 from '../../.'

const password64 = 'eightlen'.repeat(8)
const password65 = password64.concat('1')

test('Password too short', (t) => {
  const { errors } = p4g4rm3.validate('1234567')
  t.is(errors.includes('min_length'), true)
})

test('Password containing valid minimum length', (t) => {
  const { errors } = p4g4rm3.validate('12345678')
  t.is(errors.includes('min_length'), false)
})

test('Password too long', (t) => {
  const { errors } = p4g4rm3.validate(password65)
  t.is(errors.includes('max_length'), true)
})

test('Password containing valid maximum length', (t) => {
  const { errors } = p4g4rm3.validate(password64)
  t.is(errors.includes('max_length'), false)
})
