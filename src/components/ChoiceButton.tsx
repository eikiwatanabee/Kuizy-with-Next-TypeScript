import type { NextPage } from 'next'
import { Button, Box } from '@mui/material'
import { FC } from 'react'

type ChoiceButtonProps = {
    choices: string[]
    judgeAnswer: any
    buttonStyle: any
}
const ChoiceButton: FC<ChoiceButtonProps> = ({ choices, judgeAnswer, buttonStyle }) => {
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