import type { NextPage } from 'next'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { useState, FC } from 'react'
import ChoiceButton from './ChoiceButton'

export type ButtonStyle ={
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined
    variant: "text" | "outlined" | "contained" | undefined
}
type BigQuestion = {
    id: number;
    choices: string[];
    answerIndex: number;
    image: string;
}
type QuizProps = {
    bigQuestion: BigQuestion
}
const Quiz: FC<QuizProps> = ({ bigQuestion }) => {
    // 答えのモーダルを出すための定義
    const [answerIsShown, setAnswerIsShown] = useState(false);
    // 押したボタンが正解かを判別するための定義
    const [answerIsRight, setAnswerIsRight] = useState(false);
    const id = bigQuestion.id;
    const answerNum: number = bigQuestion.answerIndex;
    const choices = bigQuestion.choices;
    const defaultButtonStyle: ButtonStyle[] = [
        { variant: 'outlined', color: 'inherit' },
        { variant: 'outlined', color: 'inherit' },
        { variant: 'outlined', color: 'inherit' },
    ];
    const [buttonStyle, setButtonStyle] = useState<ButtonStyle[]>(defaultButtonStyle);
    // ボタンを押した時の処理
    const judgeAnswer = (choiceNum: number) => {
        // ボタンを一度押したら処理を抜ける
        if(answerIsShown)return;
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
        console.log(judgeAnswer)
    }
    return (
        <Box>
            <Typography fontWeight="bold" sx={{ mb: 5 }}>
                {id}. この地名はなんて読む？
            </Typography>
            <Box display="flex" sx={{ justifyContent: "center" }}>
                <Image
                    src={bigQuestion.image}
                    alt="Picture of the author"
                    width={400}
                    height={400}
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
                        {!answerIsRight && <span>不</span>}正解
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