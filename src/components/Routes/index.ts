import React from 'react';
import Main from '../../pages/Main';

const AboutPage = React.lazy(() => import('../../pages/About'));
const NotFoundPage = React.lazy(() => import('../../pages/NotFoundPage'));
const CollectionPage = React.lazy(() => import('../../pages/Collections'));
const ProductPage = React.lazy(() => import('../../pages/Product'));
const DeliveryPage = React.lazy(() => import('../../pages/DeliveryAndPai'));
const CommentsPage = React.lazy(() => import('../../pages/Comments'));
const ContactsPage = React.lazy(() => import('../../pages/Contacts'));
const SearchPage = React.lazy(() => import('../../pages/ResultSearch'));

const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/about',
		component: AboutPage,
	},
	{
		path: '*',
		component: NotFoundPage,
	},
	{
		path: '/:id',
		component: CollectionPage,
	},
	{
		path: '/product/:id',
		component: ProductPage,
	},
	{
		path: '/delivery',
		component: DeliveryPage,
	},
	{
		path: '/comments',
		component: CommentsPage,
	},
	{
		path: '/contacts',
		component: ContactsPage,
	},
	{
		path: '/search',
		component: SearchPage,
	},
];

export default routes;
