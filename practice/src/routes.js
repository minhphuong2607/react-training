import React from 'react';
import HomePage from './pages/HomePage/HomePage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ActionPage from './pages/ActionPage/ActionPage';



const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    // ,
    // {
    //     path: '',
    //     exact: false,
    //     main: () => <NotFoundPage />
    // },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ActionPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match}) => <ActionPage match={match} />
    }
];

export default routes;