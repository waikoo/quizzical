import { get, type Writable } from "svelte/store";
import type { UrlKey, UrlValue } from "./setUrl";

export const removeFromUrl = (urlStore: Writable<string>, name: UrlKey, value: UrlValue) => {
  let url = get(urlStore)

  if (url.includes(name) && value === 'any') {
    const regex = new RegExp(
      `&${name}=(\\d+|easy|medium|hard|boolean|multiple)`,
    );
    url = url.replace(regex, "");
    urlStore.set(url)
  }
}
