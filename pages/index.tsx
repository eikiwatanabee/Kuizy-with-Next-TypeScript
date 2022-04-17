import Quiz from "../src/components/Quiz"
import { Container } from "@mui/material"
import { bigQuestions } from './data'
const App = () => {
  return (
    <Container maxWidth="sm">
      {bigQuestions.map((bigQuestion, index) => {
        return (
          <Quiz key={index} bigQuestion={bigQuestion} />
          // TODO keyにindex使わない方がいいです。
          // bigQuestion.idにしましょう。
        )
      })}
    </Container>
  )
}

export default App;