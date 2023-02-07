import { useQuery } from 'react-query'
import { getData } from '../../my-api/api'
import { Header, Container } from './CZKCurrencyExchange.styled'
import CurrencyCalculator from '../CurrencyCalculator/CurrencyCalculator'
import ExchangeRates from '../ExchangeRates/ExchangeRates'

function CZKCurrencyExchange() {
    const { isLoading, data } = useQuery('exchangeData', getData)

    const parsedData: Array<string> = data?.split(/\r?\n/) || []
    const rowsWithHeader: Array<string> = parsedData?.slice(1);
    const rowsWithoutHeader = rowsWithHeader.slice(1)

    return (
        <Container className="App">
            <Header>{'🇨🇿 CZK Currency Exchange 💰'}</Header>
            <ExchangeRates rows={rowsWithHeader} isLoading={isLoading} />
            <CurrencyCalculator rows={rowsWithoutHeader} />
        </Container>
    )
}

export default CZKCurrencyExchange