// function to set a given theme/color-scheme
function setTheme(theme) {
  window.localStorage.setItem('theme', theme)
  document.querySelector('html').className = theme
}
// function to toggle between light and dark theme
export function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('light')
  } else {
    setTheme('dark')
  }
}
// Immediately invoked function to set the theme on initial load
;(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('dark')
  } else {
    setTheme('light')
  }
})()
