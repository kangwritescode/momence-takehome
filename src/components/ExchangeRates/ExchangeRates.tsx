import { Table, TableContainer, TableDatum, TableHeader, TableRow } from './ExchangeRates.styled'
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
                <thead>
                    {rows?.slice(0, 1).map(row => (
                        <TableRow key={row}>
                            {row.split('|').map(header => <TableHeader key={header}>{header}</TableHeader>)}
                        </TableRow>
                    ))}
                </thead>
                <tbody>
                    {rows?.slice(1)?.map(row => (
                        <TableRow key={row}>
                            {row.split('|').map(datum => <TableDatum key={datum}>{datum}</TableDatum>)}
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </TableContainer>
    )
}
export default ExchangeRates
