export const getData = () =>
    fetch('https://thingproxy.freeboard.io/fetch/https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt')
        .then(response => response.text())
        .then(data => {
            return data
        })