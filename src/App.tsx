import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Quiz } from './Quiz';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Quiz />
    </ThemeProvider>
  )
}

export default App
