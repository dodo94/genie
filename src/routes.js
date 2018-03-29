import React from 'react';
import HomePage from './components/pages/home';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />
  },
  {
    path: '/product-list',
    exact: false,
    main: () => <ProductListPage />
  },
  {
    path: '/product/add',
    exact: false,
    main: ({history}) => <ProductActionPage history={history}/>
  },
  {
    path: '/product/:service_type_code/edit',
    exact: false,
    main: ({match, history}) => <ProductActionPage match={match} history={history} />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />
  }
];

export default routes;