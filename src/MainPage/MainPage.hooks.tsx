import { useEffect, useState } from 'react'
import { randomAnswer } from '../utils'

const useMainPage = () => {
  const [question, setQuestion] = useState<string>()
  const [answer, setAnswer] = useState<boolean>(false)
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

  return {
    question,
    answer,
    wasAnswered,
    canClickButton,
    handleQuestionInput,
    handleSubmit,
    resetForm,
  }
}

export { useMainPage }
