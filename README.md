# Promise

## Sequencial

- Um exemplo disso em `serial.js`, o resultado ao executar o comando `node serial.js` será:

```shell
CALLED 0 => time seted: 0
CALLED 1 => time seted: 1500
CALLED 2 => time seted: 1000
CALLED 3 => time seted: 4500
CALLED 4 => time seted: 2000
CALLED 5 => time seted: 7500
{
  results: [
    { item: 0, value: 'RESOLVED 0', time: 0 },
    { item: 1, value: 'RESOLVED 1', time: 1500 },
    { item: 2, value: 'RESOLVED 2', time: 1000 },
    { item: 3, value: 'RESOLVED 3', time: 4500 },
    { item: 4, value: 'RESOLVED 4', time: 2000 },
    { item: 5, value: 'RESOLVED 5', time: 7500 }
  ]
}
```

- Perceba que as promises são executadas na ordem, mesmo que a anterior demore mais que a próxima!

## Paralela

- Um exemplo disso em `paralell.js`, o resultado ao executar o comando `node paralell.js` será:

```shell
CALLED 0 => time seted: 0
CALLED 1 => time seted: 1500
CALLED 2 => time seted: 1000
CALLED 3 => time seted: 4500
CALLED 4 => time seted: 2000
CALLED 5 => time seted: 7500
{
  results: [
    { item: 0, value: 'RESOLVED 0', time: 0 },
    { item: 2, value: 'RESOLVED 2', time: 1000 },
    { item: 1, value: 'RESOLVED 1', time: 1500 },
    { item: 4, value: 'RESOLVED 4', time: 2000 },
    { item: 3, value: 'RESOLVED 3', time: 4500 },
    { item: 5, value: 'RESOLVED 5', time: 7500 }
  ]
}
```

- Perceba que a ordem já muda em relação a sequencial, pois ela ocorre em paralelo, ou seja as mais rápidas sempre irão terminar primeiro!

---
## Exemplo de como utilizar promises de forma sequencial e paralela

Muitas vezes precisamos consumir alguma API, porém pode ser que essa API tenha limitações no número de requisições simutâneas por segundos.

Para resolver esse caso podemos combinar as duas formas, promises paralelas dentro de sequenciais.

Por exemplo digamos que temos que realizar 10 requisições, porém o número de requisições simutâneas são de apenas 2 por segundos.

Para isso podemos utilizar o exemplo em `apiLimitedNumberSimultaneousCalls.js`

O resultado ao executar o comando será `node apiLimitedNumberSimultaneousCalls.js`:

```shell
CALLED 0_0 => time seted: 0
CALLED 0_1 => time seted: 500
CALLED 1_2 => time seted: 3000
CALLED 1_3 => time seted: 1500
CALLED 2_4 => time seted: 6000
CALLED 2_5 => time seted: 2500
CALLED 3_6 => time seted: 9000
CALLED 3_7 => time seted: 3500
CALLED 4_8 => time seted: 12000
CALLED 4_9 => time seted: 4500
{
  results: [
    { order: '0_0', item: 0, value: 'RESOLVED 0_0', time: 0 },
    { order: '0_1', item: 1, value: 'RESOLVED 0_1', time: 500 },
    { order: '1_3', item: 3, value: 'RESOLVED 1_3', time: 1500 },
    { order: '1_2', item: 2, value: 'RESOLVED 1_2', time: 3000 },
    { order: '2_5', item: 5, value: 'RESOLVED 2_5', time: 2500 },
    { order: '2_4', item: 4, value: 'RESOLVED 2_4', time: 6000 },
    { order: '3_7', item: 7, value: 'RESOLVED 3_7', time: 3500 },
    { order: '3_6', item: 6, value: 'RESOLVED 3_6', time: 9000 },
    { order: '4_9', item: 9, value: 'RESOLVED 4_9', time: 4500 },
    { order: '4_8', item: 8, value: 'RESOLVED 4_8', time: 12000 }
  ]
}
```

---

## Promise em ES6 vs ES8

- É possível ver um comparativo no arquivos `promiseES6.js` e `promiseES8.js`
