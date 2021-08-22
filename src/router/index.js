import { createRouter, createWebHistory } from 'vue-router'
import Index from '/src/components/pages/index.vue'
import Work from '/src/components/pages/work.vue'
import About from '/src/components/pages/about.vue'
import Notes from '/src/components/pages/notes.vue'

const routes = [
	{
		path: '/',
		component: Index,
	},
	{
		path: '/work',
		component: Work,
	},
	{
		path: '/about',
		component: About,
	},
	{
		path: '/notes',
		component: Notes,
	},
]
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
