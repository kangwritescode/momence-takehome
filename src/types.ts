export interface CurrencyData {
    [code: string]: {
        country: string,
        currency: string,
        amount: number,
        code: string,
        rate: number

    }
}