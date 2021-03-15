import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('./components/HelloWorld.vue'),
	},

	{
		path: '/:notFound(.*):',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	console.log({ to, from });
	next();
});

export default router;
