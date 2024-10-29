import { z } from "zod";

const triviaQuestionSchema = z.object({
  category: z.string(),
  type: z.enum(["multiple", "boolean"]),
  difficulty: z.enum(["easy", "medium", "hard"]),
  question: z.string(),
  correct_answer: z.string(),
  incorrect_answers: z.array(z.string()),
});

export type TriviaQuestion = z.infer<typeof triviaQuestionSchema>;
