import { get, type Writable } from "svelte/store";

export type UrlKey = 'amount' | 'category' | 'difficulty' | 'type';
export type UrlValue = number | 'easy' | 'medium' | 'hard' | 'oolean' | 'multiple' | 'any';

export const setUrl = (urlStore: Writable<string>, name: UrlKey, value: UrlValue) => {
  let url = get(urlStore)

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
  urlStore.set(url)
}
