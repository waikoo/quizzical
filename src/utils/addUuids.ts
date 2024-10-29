import { v4 as uuidv4 } from 'uuid'

import type { TriviaQuestion, TriviaQuestionWithUuid } from "../type";

const addUuids = (questions: TriviaQuestion[]): TriviaQuestionWithUuid[] => {
  return questions.map((question) => {
    return {
      ...question,
      correct_answer: {
        correct_answer: question.correct_answer,
        uuid: uuidv4()
      },
      incorrect_answers: question.incorrect_answers.map(incorrect_answer => {
        return {
          incorrect_answer,
          uuid: uuidv4()
        }
      }),
    }
  })
}

export default addUuids
