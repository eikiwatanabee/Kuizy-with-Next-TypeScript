// TODO data.tsの場所、srcの下がいい。
// TODO data.tsでbigQuestionの型定義しちゃった方がいいかも
export type BigQuestion = {
    id: number;
    choices: string[];
    answerIndex: number;
    image: string;
}
export const bigQuestions = [
    {
        id: 1,
        choices: ["たかなわ", "こうわ", "たかわ"],
        answerIndex: 0,
        image:"https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png"
    },
    {
        id: 2,
        choices: ["かめど", "かめいど", "かめと"],
        answerIndex: 1,
        image: "https:d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png"
    },
    {
        id: 3,
        choices: ["かゆまち", "おかちまち", "こうじまち"],
        answerIndex: 2,
        image: "https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png"
    },
    {
        id: 4,
        choices: ["ごせいもん", "おなりもん", "おかどもん"],
        answerIndex: 1,
        image: "https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png"
    },
    {
        id: 5,
        choices: ["とどろき", "とどりき", "たたりき"],
        answerIndex: 0,
        image: "https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png"
    },
    {
        id: 6,
        choices: ["せきこうい", "しゃくじい", "いじい"],
        answerIndex: 1,
        image: "https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png"
    },
    {
        id: 7,
        choices: ["ざっしき", "ぞうしき", "ぞうしょく"],
        answerIndex: 1,
        image: "https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png"
    },
    {
        id: 8,
        choices: ["おかちまち", "おかとまち", "おかちょう"],
        answerIndex: 0,
        image: "https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png"
    },
    {
        id: 9,
        choices: ["しかほね", "ししぼね", "しこね"],
        answerIndex: 1,
        image: "https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png"
    },
    {
        id: 10,
        choices: ["おたる", "こしゃく", "こぐれ"],
        answerIndex: 2,
        image: "https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png"
    },
]