import { writable } from 'svelte/store'

export const baseUrl = "https://opentdb.com/api.php?";

export const url = writable(baseUrl)

type GameState = "settings" | "fetching" | "playing" | "end";
export const gameState = writable<GameState>("settings");

export type GameSpeed = "slow" | "medium" | "fast"
export const gameSpeed = writable<GameSpeed>("slow")
