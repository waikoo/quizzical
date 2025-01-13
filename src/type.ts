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
  index: z.number(),
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

export type TSettings<T> = {
  name: string;
  values: T[];
  buildUrl?: (e: MouseEvent) => void;
};

export type TSettingsArr = Array<
  TSettings<string> | TSettings<number> | TSettings<TCategory>
>;
export type TCategory = {
  id: number,
  name: string
}

