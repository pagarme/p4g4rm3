import test from 'ava'
import p4g4rm3 from '../../.'

test('Validate a commom password', (t) => {
  const commomPassResult = p4g4rm3.isCommomPassword('vjjykgdjzbp')
  t.is(commomPassResult, true)
})

test('Validate a uncommom password', (t) => {
  const commomPassResult = p4g4rm3.isCommomPassword('you wi!! never c@tch meeee333')
  t.is(commomPassResult, false)
})
