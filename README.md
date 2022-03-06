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

## Promise em ES6 vs ES8

- É possível ver um comparativo no arquivos `promiseES6.js` e `promiseES8.js`