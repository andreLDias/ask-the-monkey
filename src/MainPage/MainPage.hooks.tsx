import { useEffect, useState } from 'react'
import { randomAnswer } from '../utils'

enum Languages {
  PT = 'PT',
  EN = 'EN',
  ES = 'ES',
}

const useMainPage = () => {
  const [question, setQuestion] = useState<string>()
  const [answer, setAnswer] = useState<boolean>(false)
  const [language, setLanguage] = useState<Languages>(Languages.PT)
  const [wasAnswered, setWasAnswered] = useState<boolean>()
  const [canClickButton, setCanClickButton] = useState<boolean>(false)

  useEffect(() => {
    setCanClickButton(false)
  }, [])

  useEffect(() => {
    question && setCanClickButton(true)
  }, [question])

  const handleQuestionInput = (text: string) => {
    setQuestion(text)
  }

  const handleSubmit = () => {
    setAnswer(randomAnswer())
    setWasAnswered(true)
  }

  const resetForm = () => {
    setWasAnswered(false)
    setQuestion('')
  }

  const handleLanguage = (newLanguage: Languages) => {
    setLanguage(newLanguage)
  }

  return {
    question,
    answer,
    wasAnswered,
    canClickButton,
    language,
    handleQuestionInput,
    handleSubmit,
    resetForm,
    handleLanguage,
  }
}

export { useMainPage }
