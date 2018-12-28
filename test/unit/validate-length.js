import test from 'ava'
import { validate } from '../../src'

const password64 = 'eightlen'.repeat(8)
const password65 = password64.concat('1')

test('Password too short', (t) => {
  const { errors } = validate('1234567')
  t.is(errors.includes('min_length'), true)
})

test('Password containing valid minimum length', (t) => {
  const { errors } = validate('12345678')
  t.is(errors.includes('min_length'), false)
})

test('Password too long', (t) => {
  const { errors } = validate(password65)
  t.is(errors.includes('max_length'), true)
})

test('Password containing valid maximum length', (t) => {
  const { errors } = validate(password64)
  t.is(errors.includes('max_length'), false)
})
