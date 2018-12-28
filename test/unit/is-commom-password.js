import test from 'ava'
import { validate } from '../../src'

test('Validate a common password', (t) => {
  const { errors } = validate('vjjykgdjzbp')
  t.is(errors.includes('commom_password'), true)
})

test('Validate a uncommon password', (t) => {
  const { errors } = validate('you wi!! never c@tch meeee333')
  t.is(errors.includes('commom_password'), false)
})
