import { useState } from "react";
import { Questions } from "./common";
import { QuizQuestion } from "./QuizQuestion";
import { Box, Button, Container, LinearProgress } from "@mui/material";

export function Quiz() {
    // Randomly select 10 questions from the list of questions
    const [questions, setQuestions] = useState(Questions.sort(() => Math.random() - 0.5).slice(0, 10));
    // Keep track of the current question in state
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    // Keep track of the score in state
    const [score, setScore] = useState(0);

    const scoringFn = (correct: boolean) => {
        if (correct) {
            setScore(score + 1);
        }
        const question = questions[1]
        setQuestions(questions.slice(1));
        setCurrentQuestion(question);
        return score;
    };

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" value={(1 - (questions.length/10)) * 100} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <h3>{10 - questions.length}/10</h3>
                </Box>
            </Box>
            {currentQuestion && <QuizQuestion question={currentQuestion} scoringFn={scoringFn} />}
            {!currentQuestion && (
                <>
                <h1>Quiz Complete!</h1>
                <h2>Your score is {score}/10</h2>
                <Button
                    variant="contained"
                    onClick={() => {
                        let currentQuestions = Questions.sort(() => Math.random() - 0.5).slice(0, 10);
                        setQuestions(currentQuestions);
                        setCurrentQuestion(currentQuestions[0]);
                        setScore(0);
                    }}
                >Restart?</Button>
                </>
            )}   
        </div>
    );
}