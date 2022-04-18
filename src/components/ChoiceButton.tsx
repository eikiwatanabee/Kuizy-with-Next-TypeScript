import type { NextPage } from 'next'
import { Button, Box } from '@mui/material'
import { FC } from 'react'
import { ButtonStyle } from './Quiz'

type ChoiceButtonProps = {
    choices: string[]
    judgeAnswer: any
    buttonStyle: ButtonStyle[]
}
const ChoiceButton: FC<ChoiceButtonProps> = ({ choices, judgeAnswer, buttonStyle }) => {
    console.log(judgeAnswer)
    return (
        <>
            {
                choices.map((choice: string, index: number) => {
                    return (
                        <>
                            <Box>
                                <Button
                                    onClick={() => judgeAnswer(index)}
                                    color={buttonStyle[index].color}
                                    variant={buttonStyle[index].variant}
                                    size='large'
                                    fullWidth
                                    sx={{
                                        mb: 1,
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    {choice}
                                </Button>
                            </Box>

                        </>
                    )
                })
            }
        </>
    )
}

export default ChoiceButton;