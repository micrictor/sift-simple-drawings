import { useState } from "react";
import { Questions } from "./common";
import { QuizQuestion } from "./QuizQuestion";
import { Box, Button, Container, LinearProgress } from "@mui/material";
import { Timer } from "./Timer";

interface QuizProps {
    numQuestions: number;
}

export function Quiz({ numQuestions }: QuizProps) {
    // Randomly select X questions from the list of questions
    // Randomly shuffle the answers within the questions, too
    const getRandomQuestions = (numQuestions: number) => {
        return Questions.sort(() => Math.random() - 0.5).slice(0, numQuestions)
            .map((question) => {
                question.answers.sort(() => Math.random() - 0.5);
                return question;
            });
    };
    const [questions, setQuestions] = useState(getRandomQuestions(numQuestions));
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
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

    const timerDone = () => {
        setQuestions([]);
        setCurrentQuestion(questions[questions.length]);
    };

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ minWidth: 35 }}>
                    <Timer timerLength={numQuestions * 2} doneFn={timerDone}/>
                </Box>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" value={(1 - (questions.length/numQuestions)) * 100} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <h3>{numQuestions - questions.length}/{numQuestions}</h3>
                </Box>
            </Box>
            {currentQuestion
            && <QuizQuestion question={currentQuestion} scoringFn={scoringFn} />
            || (
                <>
                <h1>Quiz Complete!</h1>
                <h2>Your score is {score}/{numQuestions}</h2>
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