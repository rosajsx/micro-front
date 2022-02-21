# Micro Front-end POC

O objetivo desse repositório era estudar a utilização de `micro front-ends` com a `module federation do webpack 5`.
Aproveitei e testei também sobre `errors boundaries` que são de suma importância para a experiência do usuario. Da pra se dizer que toda aplicação deveria ter, principalmente as que precisam guardar um log de erros e também para micro fronts, afinal o `Suspense e o lazy` ajudam no carregamento mas caso o outro micro front esteja off, irá dar um erro.

## Detalhes do projeto

- Container
  - App principal, que consome os outros micro fronts.
- Micro-front-1
  - App independente que é chamado pelo container.
- Micro-front-2
  - App independente que é chamado pelo container

## Como rodar o projeto

### Para rodar o app container

```sh
  cd container/
```

```sh
  yarn install
```

ou

```sh
  npm install
```

```sh
  yarn start
```

O app irá rodar na porta 3000 do seu localhost.

### Para rodar o app mifro-front1

```sh
  cd microfront-1/
```

```sh
  yarn install
```

ou

```sh
  npm install
```

```sh
  yarn start
```

O app irá rodar na porta 3001 do seu localhost.

### Para rodar o app mifro-front2

```sh
  cd microfront-2/
```

```sh
  yarn install
```

ou

```sh
  npm install
```

```sh
  yarn start
```

O app irá rodar na porta 3002 do seu localhost.

`Feito por` [Lucas Rosa](https://github.com/Bluniz)
