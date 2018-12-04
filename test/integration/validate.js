import test from 'ava'
import p4g4rm3 from '../../.'

test('Validate a weak password', (t) => {
  const result = p4g4rm3.validate('weakp')
  t.is(result.validMinLength, false)
  t.is(result.validMaxLength, true)
  t.is(result.isCommomPassword, false)
  t.is(result.score, 1)
})

test('Validate a strong password', (t) => {
  const result = p4g4rm3.validate('He!! 0f A p@A55w0rd')
  t.is(result.validMinLength, true)
  t.is(result.validMaxLength, true)
  t.is(result.isCommomPassword, false)
  t.is(result.score, 4)
})

