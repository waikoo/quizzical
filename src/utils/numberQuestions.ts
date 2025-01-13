import type { TriviaQuestionWithUuid } from "../type";

const numberQuestions = (questions: TriviaQuestionWithUuid[]) => {
  return questions.map((question, i) => {
    return {
      ...question,
      index: i + 1
    }
  })
}

export default numberQuestions;
