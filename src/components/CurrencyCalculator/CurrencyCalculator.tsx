import React, { useEffect, useState } from 'react'
import { CurrencyData } from '../../types';
import { Card, ConvertedText, CurrencyCalculatorInput, GridLayout, KorunyText, Label, Select } from './CurrencyCalculator.styled'

interface CurrencyCalculatorProps {
    rows?: Array<string>;
}

function CurrencyCalculator({ rows }: CurrencyCalculatorProps) {
    const [selectedCountry, setSelectedCountry] = useState('')
    const [currencyData, setCurrencyData] = useState<CurrencyData>({})
    const [koruny, setKoruny] = useState<string>()
    const [convertedAmount, setConvertedAmount] = useState<number>()

    // Parses fetched data and sets currencyData
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

    // Calculates converted amount given: selectedCountry, koruny, currencyData
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
                        if (country) {
                            return (
                                <option
                                    key={country}
                                    value={country}>
                                    {`${code} - ${country} ${currency}`}
                                </option>
                            )
                        }

                    })}
                </Select>
            </GridLayout>
            {(convertedAmount && currencyData && selectedCountry) ? (
                <>
                    <KorunyText>{`${koruny?.slice(2)} Czech Koruny =`}</KorunyText>
                    <ConvertedText>{`${convertedAmount.toFixed(2)} ${selectedCountry} ${currencyData[selectedCountry].currency}`}</ConvertedText>
                </>
            ) : undefined}
        </Card>
    )
}

export default CurrencyCalculator