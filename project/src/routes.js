/* eslint-disable */
import Home from './page/Home';
import Movie from './page/Movie';
import User from './page/User';
import UserDetail from  './page/UserDetail';

export default [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/movie',
        component: Movie,
    },
    {
        path: '/user',
        component: User,
    },
    {
        path: '/user/:id',
        component: UserDetail,
    }
];