import { ScoringFn, Question } from "./common";
import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";

interface QuizQuestionProps {
    question: Question;
    scoringFn: ScoringFn;
}
export function QuizQuestion({question, scoringFn}: QuizQuestionProps) {
    return (
        <Card raised={true}>
            <CardContent>
                <CardHeader title={question.title} />
                <Grid columns={6} columnSpacing={4}>
                    {question.answers.map((answer, i) => (
                        <Button
                            variant="outlined"
                            key={`answer-${i}`}
                            onClick={() => {scoringFn(answer == question.correctAnswer)}}>
                                {answer}
                        </Button>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
}