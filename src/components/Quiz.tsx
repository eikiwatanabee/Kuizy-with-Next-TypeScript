import type { NextPage } from 'next' // TODO 使っていないimportは消す
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { useState, FC } from 'react'
import ChoiceButton from './ChoiceButton'
type BigQuestionProps = { // TODO 命名はBigQuestionでいいです。BigQuestionというコンポーネントがあるわけではないので。
    id: number;
    choices: string[];
    answerIndex: number;
    image: string;
}
type QuizProps = {
    bigQuestion: BigQuestionProps
}
const Quiz: FC<QuizProps> = ({ bigQuestion }) => {
    // 答えのモーダルを出すための定義
    const [answerIsShown, setAnswerIsShown] = useState(false); // TODO useStateの型定義
    // 押したボタンが正解かを判別するための定義
    const [answerIsRight, setAnswerIsRight] = useState(false); // TODO useStateの型定義
    const id = bigQuestion.id; // TODO なんのidか分からないので、questionIdとかにしましょう。
    const answerNum: number = bigQuestion.answerIndex; // TODO 自明な型宣言は不要です。numだと数になっちゃうので、answerIndexでいいと思います。
    const choices = bigQuestion.choices;
    const defaultButtonStyle = [
        { variant: 'outlined', color: 'inherit' },
        { variant: 'outlined', color: 'inherit' },
        { variant: 'outlined', color: 'inherit' },
    ];
    const [buttonStyle, setButtonStyle] = useState(defaultButtonStyle); // TODO useStateの型定義
    // ボタンを押した時の処理
    const judgeAnswer = (choiceNum: number) => {
        // ボタンを一度押したら処理を抜ける
        if (answerIsShown) return;
        setAnswerIsShown(true);
        if (choiceNum == answerNum) {
            buttonStyle[answerNum] = { variant: 'contained', color: 'primary' }
            setButtonStyle(buttonStyle)
            setAnswerIsRight(true);
        }
        else {
            buttonStyle[choiceNum] = { variant: 'contained', color: 'error' }
            buttonStyle[answerNum] = { variant: 'contained', color: 'primary' }
        }
        console.log(judgeAnswer) // TODO console.logを消す
    }
    return (
        <Box>
            <Typography fontWeight="bold" sx={{ mb: 5 }}>
                {id}. この地名はなんて読む？
            </Typography>
            <Box display="flex" sx={{ justifyContent: "center" }}>
                <Image
                    src={bigQuestion.image} // TODO imageUrlとかがいいかも。
                    alt="Picture of the author" // TODO なんか残ってる
                    width={500}
                    height={500}
                />
            </Box>
            <ChoiceButton
                choices={choices}
                judgeAnswer={judgeAnswer}
                buttonStyle={buttonStyle}
            />
            {answerIsShown &&
                <Box sx={{ p: 2, border: '1px solid black', borderRadius: '4px', }}>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            borderBottom: `3px solid ${answerIsRight ? '#1976d2' : 'red'}`,
                            display: 'block',
                            width: 'fit-content',
                            mb: 2,
                        }}>
                        {!answerIsRight && <span>不</span>}正解 {/* TODO span要らないので、"不"にしましょう。 */}
                    </Typography>
                    <Typography>
                        正解は「{choices[answerNum]}」です！
                    </Typography>
                </Box>
            }
        </Box>
    )
}

export default Quiz;