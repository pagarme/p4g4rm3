<img src="https://avatars1.githubusercontent.com/u/3846050?v=4&s=200" width="127px" height="127px" align="left"/>

# p4g4rm3
[![CircleCI](https://circleci.com/gh/pagarme/p4g4rm3.svg?style=shield)](https://circleci.com/gh/pagarme/p4g4rme)

## Como usar

Instale usando Yarn:

```bash
yarn add p4g4rm3
```

Ou usando NPM:

```bash
npm install p4g4rm3
```

## Como funciona

```
const p4g4rm3 = require('p4g4rm3')

p4g4rm3.validate('mypassword')
```

A função retorna um objeto com algumas propriedades:

```
{
  isValid: false|true,
  errors: ['min_length', 'max_length', 'commom_password'],
  score: 0|1|2|3|4
}
```

| Propriedade | Descrição |
| -------- | -------- |
| isValid     | Verifica se o password não possui erros    |
| errors     | Array contendo os erros detectados durante  a validação   |
| score     | Retorna a pontuação calculada pela biblioteca [zxcvbn](https://github.com/dropbox/zxcvbn)


## Desenvolvimento

Para rodar o projeto na sua máquina basta instalar as dependências e rodar os testes

Ex:
```bash
yarn test

npm test
```


## Licença

Este projeto está licenciado sob a [Licença MIT](./LICENSE), ou seja, você pode usá-lo da forma que preferir, incluindo suas próprias modificações em versões próprias.
