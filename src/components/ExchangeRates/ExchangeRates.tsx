import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableContainer, TableDatum, TableHead, TableHeader, TableRow } from './ExchangeRates.styled'
import Loader from '../shared/Loader';

interface ExchangeRatesProps {
    rows?: Array<string>;
    isLoading?: boolean;
}

function ExchangeRates({rows, isLoading}: ExchangeRatesProps) {
    if (isLoading) return <Loader />
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    {rows?.slice(0, 1).map(row => (
                        <TableRow key={row}>
                            {row.split('|').map(header => <TableHeader key={header}>{header}</TableHeader>)}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {rows?.slice(1)?.map(row => (
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
