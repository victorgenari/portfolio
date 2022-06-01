// BrowserRouter
import { BrowserRouter } from 'react-router-dom';

// Rotas
import { RoutesApp } from './routes/index'

// CSS
import { GlobalStyle } from '../src/styles/global'


function App() {
  return (
    <BrowserRouter>
      <RoutesApp />

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;