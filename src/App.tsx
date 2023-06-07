import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Quiz } from './Quiz';
import { Paper } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{
        padding: '10rem',
        height: '30vh',
        width: '30vw',
      }}>
        <Quiz />
      </Paper>
    </ThemeProvider>
  )
}

export default App
