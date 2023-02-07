import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getData } from '../my-api/api'
import { Table, TableBody, TableContainer, TableDatum, TableHead, TableHeader, TableRow } from '../styles/ExchangeRates.styled'

function ExchangeRates() {
    const { isLoading, error, data } = useQuery('exchangeData', getData)

    let parsedData: Array<string> = data?.split(/\r?\n/) || []
    let dateLine: string = parsedData[0]
    let date: string = dateLine?.split(' ').slice(0, 3).join(' ')
    let orderNumber: string = dateLine?.split(' ').slice(3).join('')
    let rows: Array<string> = parsedData?.slice(1)

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    {rows.slice(0, 1).map(row => (
                        <TableRow key={row}>
                            {row.split('|').map(header => <TableHeader key={header}>{header}</TableHeader>)}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {rows.slice(1)?.map(row => (
                        <TableRow key={row}>
                            {row.split('|').map(datum => <TableDatum key={datum}>{datum}</TableDatum>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default ExchangeRates
