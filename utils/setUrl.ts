export type UrlKey = 'amount' | 'category' | 'difficulty' | 'type';
export type UrlValue = number | 'easy' | 'medium' | 'hard' | 'oolean' | 'multiple';

export const setUrl = (url: string, name: UrlKey, value: UrlValue) => {
  if (name) {
    if (url.includes(name)) {
      const regex = new RegExp(
        `${name}=(\\d+|easy|medium|hard|boolean|multiple)`,
      );
      url = url.replace(regex, `${name}=${value}`);
    } else {
      url =
        url.at(-1) === "?"
          ? `${url}${name}=${value}`
          : `${url}&${name}=${value}`;
    }
  }
  return url
}
