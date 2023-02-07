import { QueryClient, QueryClientProvider } from 'react-query'
import CZKCurrencyExchange from './components/CZKCurrencyExchange/CZKCurrencyExchange';
import GlobalStyles from './Global.styled';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <CZKCurrencyExchange />
    </QueryClientProvider>
  );
}

export default App;
