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

const triviaQuestionWithUuid = z.object({
  category: z.string(),
  type: z.enum(["multiple", "boolean"]),
  difficulty: z.enum(["easy", "medium", "hard"]),
  question: z.string(),
  correct_answer: z.object({
    correct_answer: z.string(),
    uuid: z.string()
  }),
  incorrect_answers: z.array(z.object({
    incorrect_answer: z.string(),
    uuid: z.string()
  })),
});

export type TriviaQuestionWithUuid = z.infer<typeof triviaQuestionWithUuid>;
