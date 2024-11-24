import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path: '/',
            name: 'todolist',
            component: () => import('@/pages/AddTodolist.vue'),
        },
    ],
});
export default router;
