import { writable } from 'svelte/store'

// export const baseUrl = "https://opentdb.com/api.php?";
// export const baseUrl = "https://opentdb.com/api.php?amount=10";
export const baseUrl = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

export const url = writable(baseUrl)

export type GameState = "greeting" | "settings" | "fetching" | "playing" | "end";
export const gameState = writable<GameState>("greeting");

export type GameSpeed = "slow" | "medium" | "fast"
export const gameSpeed = writable<GameSpeed>("slow")

export const gamePoints = writable<number>(0)
