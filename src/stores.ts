import { writable } from 'svelte/store'

export const baseUrl = "https://opentdb.com/api.php?amount=25&type=multiple";

export const url = writable(baseUrl)

export type GameState = "greeting" | "settings" | "fetching" | "playing" | "end";
export const gameState = writable<GameState>("settings");

export type GameSpeed = "slow" | "medium" | "fast"
export const gameSpeed = writable<GameSpeed>("medium")

export const gamePoints = writable<number>(0)
