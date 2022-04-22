import { Button, Box } from '@mui/material'
import { FC } from 'react'
import { ButtonStyle } from './Quiz'

type ChoiceButtonProps = {
    choices: string[]
    judgeAnswer: (index: number) => void
    buttonStyle: ButtonStyle[]
}

const ChoiceButtons: FC<ChoiceButtonProps> = ({ choices, judgeAnswer, buttonStyle }) => {
    return (
        <>
            {
                choices.map((choice: string, index: number) => {
                    return (
                        <>
                            <Box key={index}>
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

export default ChoiceButtons;