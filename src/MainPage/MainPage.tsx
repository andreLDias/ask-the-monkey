import { Fragment } from 'react'
import Monkey from '../Monkey'
import { useMainPage } from './MainPage.hooks'
import {
  PageWrapper,
  SubmitWrapper,
  Title,
  Answer,
  QuestionInput,
  Button,
} from './MainPage.spec'

const MainPage = () => {
  const {
    question,
    answer,
    wasAnswered,
    canClickButton,
    handleQuestionInput,
    handleSubmit,
    resetForm,
  } = useMainPage()

  return (
    <PageWrapper>
      <Monkey />
      <SubmitWrapper>
        <Title>Pergunte ao macaco:</Title>
        {!wasAnswered && (
          <Fragment>
            <QuestionInput
              onChange={(e) => handleQuestionInput(e.target.value)}
              value={question}
            />
            <Button disabled={!canClickButton} onClick={() => handleSubmit()}>
              Perguntar
            </Button>
          </Fragment>
        )}
        {wasAnswered && (
          <Fragment>
            <Answer positive={answer}>{answer ? 'Sim' : 'Não'}</Answer>
            <Button onClick={() => resetForm()}>Pergunte novamente!</Button>
          </Fragment>
        )}
      </SubmitWrapper>
    </PageWrapper>
  )
}

export default MainPage
