import './App.css'
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Quiz } from './Quiz';
import { Box, Button, Paper, Slider } from '@mui/material';
import { Questions } from './common';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [numQuestions, setNumQuestions] = useState(10);
  const [startQuiz, setStartQuiz] = useState(false);


  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{
        padding: '10rem',
      }}>
        {startQuiz
        && <Quiz numQuestions={numQuestions} setStartQuiz={setStartQuiz} />
        || (
          <div>
            <h1>SIFT</h1>
            <h2>Simple Drawings</h2>
            This quiz is designed to identify your ability to quickly determine
            which symbol is different from the others. You will be presented with
            five options - click the letter below the one that is different.
            <br />
            On the SIFT, you'll have a mouse, so I recommend using one to practice.
            <br />
            You will have 2 seconds per question. Good luck!
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ minWidth: 35 }}>
                    <h4>Number of Questions</h4>
                </Box>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <Slider
                    aria-label='Number of Questions'
                    defaultValue={10}
                    valueLabelDisplay='auto'
                    step={5}
                    marks
                    min={5}
                    max={Questions.length - (Questions.length % 5)}
                    onChange={(_, value) => setNumQuestions(value as number)}
                  >
                  </Slider>
                </Box>
            </Box>
            <Button
              variant="contained"
              onClick={() => setStartQuiz(true)}>Start</Button>
          </div>
        )}
      </Paper>
    </ThemeProvider>
  )
}

export default App
