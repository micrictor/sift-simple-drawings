import { useState } from "react";
import { Questions } from "./common";
import { QuizQuestion } from "./QuizQuestion";
import { Button } from "@mui/material";

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
            {currentQuestion && <QuizQuestion question={currentQuestion!} scoringFn={scoringFn} />}
            {!currentQuestion && (
                <>
                <h1>Quiz Complete! Your score is {score}/10</h1>
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