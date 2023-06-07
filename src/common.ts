// Define a type for a question that includes the title, 6 possible answers, and the correct answer
export type Question = {
    answers: string[];
    correctAnswer: string;
};

export const Questions: Question[] = [
    {
        answers: ["«", "«", "«", "«", "»"],
        correctAnswer: "»",
    },
    {
        answers: ["˥", "˥", "˥", "˥", "˩"],
        correctAnswer: "˩",
    },
    {
        answers: ["ш", "ш", "ш", "ш", "щ"],
        correctAnswer: "щ",
    },
    {
        answers: ["ՠ", "ՠ", "ՠ", "ՠ", "ա"],
        correctAnswer: "ա",
    },
    {
        answers: ["←", "←", "←", "←", "→"],
        correctAnswer: "→",
    },
    {
        answers: ["⇑", "⇑", "⇑", "⇑", "⇓"],
        correctAnswer: "⇓",
    },
    {
        answers: ["⇐", "⇐", "⇐", "⇐", "⇒"],
        correctAnswer: "⇒",
    },
    {
        answers: ["⇓", "⇓", "⇓", "⇓", "⇑"],
        correctAnswer: "⇑",
    },
    {
        answers: ["⇒", "⇒", "⇒", "⇒", "⇐"],
        correctAnswer: "⇐",
    },
    {
        answers: ["⇔", "⇔", "⇔", "⇔", "⇕"],
        correctAnswer: "⇕",
    },
    {
        answers: ["⇕", "⇕", "⇕", "⇕", "⇔"],
        correctAnswer: "⇔",
    },
    {
        answers: ["⇖", "⇖", "⇖", "⇖", "⇗"],
        correctAnswer: "⇗",
    }, 
    {
        answers: ["⇗", "⇗", "⇗", "⇗", "⇖"],
        correctAnswer: "⇖",
    },
    {
        answers: ["⇘", "⇘", "⇘", "⇘", "⇙"],
        correctAnswer: "⇙",
    },
    {
        answers: ["⇙", "⇙", "⇙", "⇙", "⇘"],
        correctAnswer: "⇘",
    },
    {
        answers: ["Ꝁ", "Ꝁ", "Ꝁ", "Ꝁ", "Ꝃ"],
        correctAnswer: "Ꝃ",
    },
    {
        answers: ["Ꝃ", "Ꝃ", "Ꝃ", "Ꝃ", "Ꝁ"],
        correctAnswer: "Ꝁ",
    },
    {
        answers: ["🌛", "🌛", "🌛", "🌛", "🌜"],
        correctAnswer: "🌜",
    },
    {
        answers: ["🌜", "🌜", "🌜", "🌜", "🌛"],
        correctAnswer: "🌛",
    },
    {
        answers: ["🔑", "🔑", "🔑", "🔑", "🗝️"],
        correctAnswer: "🗝️",
    },
    {
        answers: ["🗝️", "🗝️", "🗝️", "🗝️", "🔑"],
        correctAnswer: "🔑",
    },
    {
        answers: ["🔒", "🔒", "🔒", "🔒", "🔓"],
        correctAnswer: "🔓",
    },
    {
        answers: ["🔓", "🔓", "🔓", "🔓", "🔒"],
        correctAnswer: "🔒",
    },
    {
        answers: ["🔏", "🔏", "🔏", "🔏", "🔐"],
        correctAnswer: "🔐",
    },
    {
        answers: ["🔐", "🔐", "🔐", "🔐", "🔏"],
        correctAnswer: "🔏",
    },
    {
        answers: ["⁅", "⁅", "⁅", "⁅", "⁆"],
        correctAnswer: "⁆",
    },
    {
        answers: ["⁆", "⁆", "⁆", "⁆", "⁅"],
        correctAnswer: "⁅",
    },
    {
        answers: ["⁽", "⁽", "⁽", "⁽", "⁾"],
        correctAnswer: "⁾",
    },
    {
        answers: ["⁾", "⁾", "⁾", "⁾", "⁽"],
        correctAnswer: "⁽",
    },
    {
        answers: ["⁜", "⁜", "⁜", "⁜", "※"],
        correctAnswer: "※",
    },
    {
        answers: ["※", "※", "※", "※", "⁜"],
        correctAnswer: "⁜",
    },
    {
        answers: ["⁝", "⁝", "⁝", "⁝", "⁞"],
        correctAnswer: "⁞",
    },
    {
        answers: ["⁞", "⁞", "⁞", "⁞", "⁝"],
        correctAnswer: "⁝",
    },
    {
        answers: ["⇻", "⇻", "⇻", "⇻", "⇸"],
        correctAnswer: "⇸",
    },
    {
        answers: ["⇸", "⇸", "⇸", "⇸", "⇻"],
        correctAnswer: "⇻",
    },
    {
        answers: ["⇼", "⇼", "⇼", "⇼", "⇹"],
        correctAnswer: "⇹",
    },
    {
        answers: ["⇹", "⇹", "⇹", "⇹", "⇼"],
        correctAnswer: "⇼",
    },
    {
        answers: ["◐", "◐", "◐", "◐", "◑"],
        correctAnswer: "◑",
    },
    {
        answers: ["◑", "◑", "◑", "◑", "◐"],
        correctAnswer: "◐",
    },
    {
        answers: ["◬", "◬", "◬", "◬", "◭"],
        correctAnswer: "◭",
    },
    {
        answers: ["◭", "◭", "◭", "◭", "◬"],
        correctAnswer: "◬",
    },
    {
        answers: ["◰", "◰", "◰", "◰", "◳"],
        correctAnswer: "◳",
    },
    {
        answers: ["◳", "◳", "◳", "◳", "◰"],
        correctAnswer: "◰",
    },
    {
        answers: ["◴", "◴", "◴", "◴", "◷"],
        correctAnswer: "◷",
    },
    {
        answers: ["◷", "◷", "◷", "◷", "◴"],
        correctAnswer: "◴",
    },
    {
        answers: ["◸", "◸", "◸", "◸", "◹"],
        correctAnswer: "◹",
    },
    {
        answers: ["◹", "◹", "◹", "◹", "◸"],
        correctAnswer: "◸",
    },
    {
        answers: ["◺", "◺", "◺", "◺", "◿"],
        correctAnswer: "◿",
    },
    {
        answers: ["◿", "◿", "◿", "◿", "◺"],
        correctAnswer: "◺",
    },
    {
        answers: ["↓", "↓", "↓", "↓", "↡"],
        correctAnswer: "↡",
    },
    {
        answers: ["↡", "↡", "↡", "↡", "↓"],
        correctAnswer: "↓",
    },
    {
        answers: ["↟", "↟", "↟", "↟", "↑"],
        correctAnswer: "↑",
    },
    {
        answers: ["↑", "↑", "↑", "↑", "↟"],
        correctAnswer: "↟",
    },
    {
        answers: ["↽", "↽", "↽", "↽", "⇁"],
        correctAnswer: "⇁",
    },
    {
        answers: ["⇁", "⇁", "⇁", "⇁", "↽"],
        correctAnswer: "↽",
    },
    {
        answers: ["⇃", "⇃", "⇃", "⇃", "↾"],
        correctAnswer: "↾",
    },
    {
        answers: ["↾", "↾", "↾", "↾", "⇃"],
        correctAnswer: "⇃",
    },
    {
        answers: ["⇄", "⇄", "⇄", "⇄", "⇆"],
        correctAnswer: "⇆",
    },
    {
        answers: ["⇆", "⇆", "⇆", "⇆", "⇄"],
        correctAnswer: "⇄",
    },
    {
        answers: ["⇇", "⇇", "⇇", "⇇", "⇉"],
        correctAnswer: "⇉",
    },
    {
        answers: ["⇉", "⇉", "⇉", "⇉", "⇇"],
        correctAnswer: "⇇",
    },
    {
        answers: ["⇈", "⇈", "⇈", "⇈", "⇅"],
        correctAnswer: "⇅",
    },
    {
        answers: ["⇅", "⇅", "⇅", "⇅", "⇈"],
        correctAnswer: "⇈",
    },
    {
        answers: ["⇊", "⇊", "⇊", "⇊", "⇄"],
        correctAnswer: "⇄",
    },
    {
        answers: ["⇄", "⇄", "⇄", "⇄", "⇊"],
        correctAnswer: "⇊",
    },
    {
        answers: ["⇋", "⇋", "⇋", "⇋", "⇅"],
        correctAnswer: "⇅",
    },
    {
        answers: ["⇅", "⇅", "⇅", "⇅", "⇋"],
        correctAnswer: "⇋",
    },
    {
        answers: ["⇍", "⇍", "⇍", "⇍", "⇏"],
        correctAnswer: "⇏",
    },
    {
        answers: ["⇏", "⇏", "⇏", "⇏", "⇍"],
        correctAnswer: "⇍",
    },
    {
        answers: ["⇎", "⇎", "⇎", "⇎", "⇌"],
        correctAnswer: "⇌",
    },
    {
        answers: ["⇌", "⇌", "⇌", "⇌", "⇎"],
        correctAnswer: "⇎",
    },
    {
        answers: ["ↇ", "ↇ", "ↇ", "ↇ", "ↁ"],
        correctAnswer: "ↁ",
    },
    {
        answers: ["ↁ", "ↁ", "ↁ", "ↁ", "ↇ"],
        correctAnswer: "ↇ",
    },
    {
        answers: ["∢", "∢", "∢", "∢", "∡"],
        correctAnswer: "∡",
    },
    {
        answers: ["∡", "∡", "∡", "∡", "∢"],
        correctAnswer: "∢",
    },
    {
        answers: ["⨒", "⨒", "⨒", "⨒", "⨓"],
        correctAnswer: "⨓",
    },
    {
        answers: ["⨓", "⨓", "⨓", "⨓", "⨒"],
        correctAnswer: "⨒",
    },
    {
        answers: ["⨔", "⨔", "⨔", "⨔", "⨕"],
        correctAnswer: "⨕",
    },
    {
        answers: ["⨕", "⨕", "⨕", "⨕", "⨔"],
        correctAnswer: "⨔",
    },
    {
        answers: ["⪙", "⪙", "⪙", "⪙", "⪚"],
        correctAnswer: "⪚",
    },
    {
        answers: ["⪚", "⪚", "⪚", "⪚", "⪙"],
        correctAnswer: "⪙",
    },
    {
        answers: ["⫓", "⫓", "⫓", "⫓", "⫔"],
        correctAnswer: "⫔",
    },
    {
        answers: ["⫔", "⫔", "⫔", "⫔", "⫓"],
        correctAnswer: "⫓",
    },
];

// ScoringFn takes in a boolean for if the question was answered correctly and returns the current number of correct answers
export type ScoringFn = (correct: boolean) => number;
