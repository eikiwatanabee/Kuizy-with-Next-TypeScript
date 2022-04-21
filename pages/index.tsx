import Quiz from "../src/components/Quiz"
import { Container } from "@mui/material"
import { bigQuestions } from '../src/data'
const App = () => {
  return (
    <Container maxWidth="sm">
      {bigQuestions.map((bigQuestion) => {
        return (
          <Quiz key={bigQuestion.id} bigQuestion={bigQuestion} />
        )
      })}
    </Container>
  )
}

export default App;