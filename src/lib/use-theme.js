import { ref } from 'vue'

export const useTheme = () => {
	const isDarkMode = ref(window.isDark || false)

	const toggleDarkMode = () => {
		if (window.isDark) {
			document.querySelector('html').classList.remove('dark')
			window.isDark = false
			window.localStorage.removeItem('dark-mode')
			isDarkMode.value = false
		} else {
			document.querySelector('html').classList.add('dark')
			window.isDark = true
			window.localStorage.setItem('dark-mode', '1')
			isDarkMode.value = true
		}
	}
	return { isDarkMode, toggleDarkMode }
}
