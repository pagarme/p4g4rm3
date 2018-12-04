# P4g4rm3
Validador de senha de nossos serviços!  :no_entry:

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
  validMinLength: true,
  validMaxLength: true,
  isCommomPassword: false,
  score: 1,
}
```

| Propriedade | Descrição |
| -------- | -------- |
| validMinLength     | Válida se a senha possui o número mínimo de carácteres     |
| validMaxLength     | Válida se a senha está dentro do limite máximo de carácteres    |
| isCommomPassword     | Válida se a senha está contida na lista de senhas comuns   |
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
