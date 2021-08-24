import {writable}  from 'svelte/store'
import {browser} from '$app/env'

const storedTheme = browser ? localStorage.theme : null;

export const theme = writable(storedTheme || 'system');

// runs every time theme changes
theme.subscribe((value) => {
	browser ? (localStorage.theme = value) : null
		browser ? (document.querySelector('html').className = value) : null
})
