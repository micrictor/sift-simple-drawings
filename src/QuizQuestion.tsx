import { ScoringFn, Question } from "./common";
import { Box, Button, Card, CardContent, CardHeader, Grid } from "@mui/material";

interface QuizQuestionProps {
    question: Question;
    scoringFn: ScoringFn;
}

export function QuizQuestion({question, scoringFn}: QuizQuestionProps) {
    const letters = ['A', 'B', 'C', 'D', 'E'];

    return (
        <Card raised={true}>
            <CardContent>
                <CardHeader title="Select the symbol that is different from the others."/>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid container columns={5} spacing={2} justifyContent={"center"}>
                        {question.answers.map((answer, i) => (
                            <Grid item>
                                {answer}
                                <br />
                                <Button
                                    variant="outlined"
                                    key={`answer-${i}`}
                                    onClick={() => {scoringFn(answer == question.correctAnswer)}}>
                                        {letters[i]}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
}