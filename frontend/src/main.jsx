import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme();

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>,
      </ChakraProvider>
    </BrowserRouter>
)