export const getData = async () => {
    const PROXY_SERVER_URL = "https://thingproxy.freeboard.io/fetch/";
    const EXCHANGE_DATA_URL = 'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'
    return fetch(PROXY_SERVER_URL + EXCHANGE_DATA_URL)
        .then(response => response.text())
        .then(data => {
            return data
        })
}