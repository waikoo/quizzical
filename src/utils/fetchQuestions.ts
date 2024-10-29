import type { TriviaQuestion } from "../type";

const fetchQuestions = async (url: string): Promise<TriviaQuestion[]> => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
  return [];
};

export default fetchQuestions;
