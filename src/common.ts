// Define a type for a question that includes the title, 6 possible answers, and the correct answer
export type Question = {
    title: string;
    answers: string[];
    correctAnswer: string;
};

export const Questions: Question[] = [
    {
        title: "Select the symbol that is different from the others.",
        answers: ["«","«","«","«","«", "»"],
        correctAnswer: "»",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["˥","˥","˥","˥","˥", "˩"],
        correctAnswer: "˩",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["ш", "ш", "ш", "ш", "ш", "щ"],
        correctAnswer: "щ",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["ՠ", "ՠ", "ՠ", "ՠ", "ՠ", "ա"],
        correctAnswer: "ա",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["←", "←", "←", "←", "←", "→"],
        correctAnswer: "→",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["⇑", "⇑", "⇑", "⇑", "⇑", "⇓"],
        correctAnswer: "⇓",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["⇐", "⇐", "⇐", "⇐", "⇐", "⇒"],
        correctAnswer: "⇒",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["⇓", "⇓", "⇓", "⇓", "⇓", "⇑"],
        correctAnswer: "⇑",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["⇒", "⇒", "⇒", "⇒", "⇒", "⇐"],
        correctAnswer: "⇐",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["⇔", "⇔", "⇔", "⇔", "⇔", "⇕"],
        correctAnswer: "⇕",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["⇕", "⇕", "⇕", "⇕", "⇕", "⇔"],
        correctAnswer: "⇔",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["⇖", "⇖", "⇖", "⇖", "⇖", "⇗"],
        correctAnswer: "⇗",
    }, 
    {
        title: "Select the symbol that is different from the others.",
        answers: ["⇗", "⇗", "⇗", "⇗", "⇗", "⇖"],
        correctAnswer: "⇖",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["⇘", "⇘", "⇘", "⇘", "⇘", "⇙"],
        correctAnswer: "⇙",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["⇙", "⇙", "⇙", "⇙", "⇙", "⇘"],
        correctAnswer: "⇘",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["Ꝁ", "Ꝁ", "Ꝁ", "Ꝁ", "Ꝁ", "Ꝃ"],
        correctAnswer: "Ꝃ",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["Ꝃ", "Ꝃ", "Ꝃ", "Ꝃ", "Ꝃ", "Ꝁ"],
        correctAnswer: "Ꝁ",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["🌛", "🌛", "🌛", "🌛", "🌛", "🌜"],
        correctAnswer: "🌜",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["🌜", "🌜", "🌜", "🌜", "🌜", "🌛"],
        correctAnswer: "🌛",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["🔑", "🔑", "🔑", "🔑", "🔑", "🗝️"],
        correctAnswer: "🗝️",
    },
    {
        title: "Select the symbol that is different from the others.",
        answers: ["🗝️", "🗝️", "🗝️", "🗝️", "🗝️", "🔑"],
        correctAnswer: "🔑",
    },
];

// ScoringFn takes in a boolean for if the question was answered correctly and returns the current number of correct answers
export type ScoringFn = (correct: boolean) => number;
