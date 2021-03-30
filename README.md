# fivem-api til node js
## dependencis
> request           
> du skal bruge ES6

## data man kan få ud af det
> Spiller antal             
> Resources

## exemple
```js
FiveM({port: 30120, host: 'dedicated.raag2005.dk'}, (info, players) => {
  console.log(info);
  console.log(players);
})
```

link: **https://github.com/raag2005/fivem-api**