import { Fragment } from 'react'
import Monkey from '../Monkey'
import LanguageSelector from '../LanguageSelector'
import { useMainPage } from './MainPage.hooks'
import { texts } from '../constants/texts'
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
    language,
    handleQuestionInput,
    handleSubmit,
    resetForm,
    handleLanguage,
  } = useMainPage()

  const localeText = texts[language]

  return (
    <PageWrapper>
      <LanguageSelector handleLanguage={handleLanguage} />
      <Monkey />
      <SubmitWrapper>
        <Title>{localeText.title}</Title>
        {!wasAnswered && (
          <Fragment>
            <QuestionInput
              onChange={(e) => handleQuestionInput(e.target.value)}
              value={question}
            />
            <Button disabled={!canClickButton} onClick={() => handleSubmit()}>
              {localeText.askQuestionText}
            </Button>
          </Fragment>
        )}
        {wasAnswered && (
          <Fragment>
            <Answer positive={answer}>
              {answer ? localeText.positive : localeText.negative}
            </Answer>
            <Button onClick={() => resetForm()}>
              {localeText.askAgainText}
            </Button>
          </Fragment>
        )}
      </SubmitWrapper>
    </PageWrapper>
  )
}

export default MainPage
