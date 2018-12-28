import test from 'ava'
import { validate } from '../../src'

test('Validate a valid password', (t) => {
  const { isValid } = validate('123')
  t.is(isValid, false)
})

test('Validate a invalid password', (t) => {
  const { isValid } = validate('you wi!! never c@tch meeee333')
  t.is(isValid, true)
})
