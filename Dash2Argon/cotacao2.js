//  https://v6.exchangerate-api.com/v6/5cd717ee4779a3160fd3ad2e/latest/USD
//  https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL
// 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest' X-CMC_PRO_API_KEY': 'f1f79629-b25b-4092-92e9-61886b7cf49f


let usdbrl = 0;
let btcvar = 0;
let eurvar = 0;
let usdvar = 0;


fetch('https://v6.exchangerate-api.com/v6/5cd717ee4779a3160fd3ad2e/latest/USD', {method: 'GET'})
    .then(T => T.json())
    .then(corpo =>{
        console.log(corpo.conversion_rates)
        usdbrl = corpo.conversion_rates.BRL
        document.getElementById("euru").innerHTML = corpo.conversion_rates.EUR
        console.log(usdbrl)
    })

fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL', {method: 'GET'})
    .then(T => T.json())
    .then(corpo =>{
        console.log(corpo)
        document.getElementById("btc").innerHTML = (corpo.BTCBRL.bid)*1000
        document.getElementById("btcvar").innerHTML = corpo.BTCBRL.pctChange
        btcvar = corpo.BTCBRL.pctChange
        var btc = document.getElementById("btcvar");
        if(btcvar < 0){
           btc.style.color = "#f72525";
        }
        if(btcvar == 0){
            btc.style.color = "#999999";
        }
        if(btcvar > 0){
            btc.style.color = "#3fe25a";
        }
        document.getElementById("eurb").innerHTML = corpo.EURBRL.bid
        document.getElementById("eurbvar").innerHTML = corpo.EURBRL.pctChange
        eurvar = corpo.EURBRL.pctChange;
        var eur = document.getElementById("eurbvar");
        if(eurvar < 0){
            eur.style.color = "#f72525";
        }
        if(eurvar == 0){
            eur.style.color = "#999999";
        }
        if(eurvar > 0){
            eur.style.color = "#3fe25a";
        }
        document.getElementById("usd").innerHTML = corpo.USDBRL.bid
        document.getElementById("usdvar").innerHTML = corpo.USDBRL.pctChange
        usdvar = corpo.USDBRL.pctChange
        var usd = document.getElementById("usdvar");
        if(usdvar < 0){
            usd.style.color = "#f72525";
        }
        if(usdvar == 0){
            usd.style.color = "#999999";
        }
        if(usdvar > 0){
            usd.style.color = "#3fe25a";
        }
    })

