import { writable } from "svelte/store";

export let text = writable(true);
export let active = writable(0);