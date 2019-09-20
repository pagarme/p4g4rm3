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

test('Validate a invalid undefined password', (t) => {
  const { isValid, score } = validate(undefined)
  t.is(isValid, false)
  t.is(score, 0)
})

test('Validate a invalid object password', (t) => {
  const { isValid, score } = validate({})
  t.is(isValid, false)
  t.is(score, 0)
})

test('Validate a invalid number password', (t) => {
  const { isValid, score } = validate(123456789)
  t.is(isValid, false)
  t.is(score, 0)
})
