import test from 'ava'
import p4g4rm3 from '../../.'

test('Too guessable password zxcvbn calculation', (t) => {
  const { score: scoreResult } = p4g4rm3.validate('123')
  t.is(scoreResult, 0)
})

test('Very guessable password zxcvbn calculation', (t) => {
  const { score: scoreResult } = p4g4rm3.validate('weakpass')
  t.is(scoreResult, 1)
})

test('Somewhat unguessable password zxcvbn calculation', (t) => {
  const { score: scoreResult } = p4g4rm3.validate('weakpass12')
  t.is(scoreResult, 2)
})

test('Safely unguessable password zxcvbn calculation', (t) => {
  const { score: scoreResult } = p4g4rm3.validate('kInd 0k3y')
  t.is(scoreResult, 3)
})

test('Very unguessable password zxcvbn calculation', (t) => {
  const { score: scoreResult } = p4g4rm3.validate('He!! 0f A p@A55w0rd')
  t.is(scoreResult, 4)
})
