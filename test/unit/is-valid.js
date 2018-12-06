import test from 'ava'
import p4g4rm3 from '../../.'

test('Validate a valid password', (t) => {
  const { isValid } = p4g4rm3.validate('123')
  t.is(isValid, false)
})

test('Validate a invalid password', (t) => {
  const { isValid } = p4g4rm3.validate('you wi!! never c@tch meeee333')
  t.is(isValid, true)
})
