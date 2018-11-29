import test from 'ava';
import p4g4rm3 from '../../.'

test('Too guessable password zxcvbn calculation', t => {
  const passwordResult = p4g4rm3.calculatePasswordScore('123')
  t.is(passwordResult.guesses, 13)
  t.is(passwordResult.score, 0)
});

test('Very guessable password zxcvbn calculation', t => {
  const passwordResult = p4g4rm3.calculatePasswordScore('weakpass')
  t.is(passwordResult.guesses, 161158)
  t.is(passwordResult.score, 1)
});

test('Somewhat unguessable password zxcvbn calculation', t => {
  const passwordResult = p4g4rm3.calculatePasswordScore('weakpass12')
  t.is(passwordResult.guesses, 19063342)
  t.is(passwordResult.score, 2)
});

test('Safely unguessable password zxcvbn calculation', t => {
  const passwordResult = p4g4rm3.calculatePasswordScore('kInd 0k3y')
  t.is(passwordResult.guesses, 118410000)
  t.is(passwordResult.score, 3)
});

test('Very unguessable password zxcvbn calculation', t => {
  const passwordResult = p4g4rm3.calculatePasswordScore('He!! 0f A p@A55w0rd')
  t.is(passwordResult.guesses, 48864000000010000)
  t.is(passwordResult.score, 4)
});
