export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/index'),
    },
];
