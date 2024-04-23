import { ThemeProvider } from 'styled-components';
import { Router } from './routes/Router';
import GlobalStyle from '@styles/global';
import { defaultTheme } from './styles/theme';
import { UpdateTaskContextProvider } from './context/contextUpdateTask';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <UpdateTaskContextProvider>
          <Router />
          <GlobalStyle />
        </UpdateTaskContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
