const randomizeAnswers = (correctAnswerObject: { correct_answer: string, uuid: string }, incorrectAnswersArray: { incorrect_answer: string, uuid: string }[]): { answer: string, uuid: string }[] => {
  const randomIndex = Math.floor(Math.random() * incorrectAnswersArray.length);
  const newIncorrectAnswersArray = incorrectAnswersArray.map(incorrectAnswer => {
    return {
      answer: incorrectAnswer.incorrect_answer,
      uuid: incorrectAnswer.uuid
    }
  })
  newIncorrectAnswersArray.splice(randomIndex, 0, {
    answer: correctAnswerObject.correct_answer,
    uuid: correctAnswerObject.uuid
  });

  return newIncorrectAnswersArray;
}

export default randomizeAnswers
