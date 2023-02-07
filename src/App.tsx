import { QueryClient, QueryClientProvider } from 'react-query'
import CurrencyCalculator from './components/CurrencyCalculator';
import ExchangeRates from './components/ExchangeRates';
import Container from './styles/Container.styled';
import GlobalStyles from './styles/Global.styled';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
        <Container className="App">
          <h1>{'🇨🇿 CZK Currency Exchange 💰'}</h1>
          <ExchangeRates />
          <CurrencyCalculator />
        </Container>
    </QueryClientProvider>
  );
}

export default App;
