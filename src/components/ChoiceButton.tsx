import type { NextPage } from 'next' // TODO 使っていないimportは消す
import { Button, Box } from '@mui/material'
import { FC } from 'react'

type ChoiceButtonProps = {
    choices: string[]
    judgeAnswer: any // TODO 型定義
    buttonStyle: any // TODO 型定義
}
// TODO 複数あるので、命名は複数形で。
const ChoiceButton: FC<ChoiceButtonProps> = ({ choices, judgeAnswer, buttonStyle }) => {
    return (
        <>
            {
                choices.map((choice: string, index: number) => { // choicesの数は固定なので、index使ってもOK。
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