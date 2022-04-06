import React from "react";
import Monkey from "../Monkey";
import { useMainPage } from "./MainPage.hooks";
import {
  PageWrapper,
  SubmitWrapper,
  Title,
  Answer,
  QuestionInput,
  Button,
} from "./MainPage.spec";

const MainPage = () => {
  const {
    question,
    answer,
    wasAnswered,
    canClickButton,
    handleQuestionInput,
    handleSubmit,
    resetForm,
  } = useMainPage();
  return (
    <PageWrapper>
      <Monkey />
      <SubmitWrapper>
        <Title>Pergunte ao macaco:</Title>
        <QuestionInput
          onChange={(e) => handleQuestionInput(e.target.value)}
          value={question}
        />
        {!wasAnswered && (
          <Button disabled={!canClickButton} onClick={() => handleSubmit()}>
            Perguntar
          </Button>
        )}
        {wasAnswered && (
          <Answer positive={answer}>{answer ? "Sim" : "Não"}</Answer>
        )}
        {wasAnswered && (
          <Button onClick={() => resetForm()}>Pergunte novamente!</Button>
        )}
      </SubmitWrapper>
    </PageWrapper>
  );
};

export default MainPage;
