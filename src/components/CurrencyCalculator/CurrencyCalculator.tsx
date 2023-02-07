import React, { useEffect, useState } from 'react'
import { Card, ConversionInfo, ConvertedText, CurrencyCalculatorInput, GridLayout, KorunyText, Label, Select } from './CurrencyCalculator.styled'

interface ExchangeRatesProps {
    rows?: Array<string>;
}

interface CurrencyData {
    [code: string]: {
        country: string,
        currency: string,
        amount: number,
        code: string,
        rate: number

    }
}
function CurrencyCalculator({ rows }: ExchangeRatesProps) {
    const [selectedCountry, setSelectedCountry] = useState('')
    const [currencyData, setCurrencyData] = useState<CurrencyData>({})
    const [koruny, setKoruny] = useState<string>()
    const [convertedAmount, setConvertedAmount] = useState<number>()

    useEffect(() => {
        const updatedRows: CurrencyData = {}
        if (rows) {
            for (let row of rows) {
                const [country, currency, amount, code, rate]: Array<string> = row.split('|')
                updatedRows[country] = {
                    country,
                    currency,
                    amount: Number(amount),
                    code,
                    rate: Number(rate)
                }
            }
        }
        setCurrencyData(updatedRows)
    }, [rows])

    useEffect(() => {
        if (selectedCountry && koruny && currencyData) {
            const { amount, rate } = currencyData[selectedCountry]
            const korunyNumber = Number(koruny.slice(2).split(',').join(''))
            const newConvertedAmount: number = (korunyNumber / rate) * amount
            setConvertedAmount(newConvertedAmount)
        }
    }, [selectedCountry, koruny, currencyData])

    return (
        <Card>
            <GridLayout>
                <Label>{"Amount"}</Label>
                <Label>Convert To</Label>
                <CurrencyCalculatorInput
                    prefix="Kč"
                    placeholder="Kč"
                    onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => setKoruny(target.value)}
                />
                <Select
                    onChange={({ target }: React.ChangeEvent<HTMLSelectElement>) => setSelectedCountry(target.value)}>
                    <option value="" disabled selected>Select a Currency</option>
                    {currencyData && Object.values(currencyData)?.map(({ code, country, currency }) => {
                        return (
                            <option
                                key={country}
                                value={country}>
                                {`${code} - ${country} ${currency}`}
                            </option>
                        )
                    })}
                </Select>
            </GridLayout>
            {(convertedAmount && currencyData && selectedCountry) ? (
                <ConversionInfo>
                    <KorunyText>{`${koruny?.slice(2)} Czech Koruny =`}</KorunyText>
                    <ConvertedText>{`${convertedAmount.toFixed(2)} ${selectedCountry} ${currencyData[selectedCountry].currency}`}</ConvertedText>
                </ConversionInfo>
            ) : undefined}
        </Card>
    )
}

export default CurrencyCalculator