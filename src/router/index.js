import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path: '/',
            name: 'todolist',
            component: () => import('@/pages/AddTodolist.vue')
        }
        // {
        //     path: '/test',
        //     name: 'test',
        //     component: () => import('../components/test.vue')
        // }
    ]
});
export default router;
