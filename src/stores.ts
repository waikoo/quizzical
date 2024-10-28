import { writable } from 'svelte/store'

const baseUrl = "https://opentdb.com/api.php?";
export const url = writable(baseUrl)
