import { writable } from 'svelte/store';

/**
 * This is really a global counter that can only be incremented.
 * Used for globally unique ids for Color Picker without needing a UUID generator.
 */
function createCounter() {
  const { subscribe, update } = writable(0);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
	};
}

export const counter = createCounter();