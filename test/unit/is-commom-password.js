import test from 'ava'
import p4g4rm3 from '../../.'

test('Validate a common password', (t) => {
  const { errors } = p4g4rm3.validate('vjjykgdjzbp')
  t.is(errors.includes('commom_password'), true)
})

test('Validate a uncommon password', (t) => {
  const { errors } = p4g4rm3.validate('you wi!! never c@tch meeee333')
  t.is(errors.includes('commom_password'), false)
})
