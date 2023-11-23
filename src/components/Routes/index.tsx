import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/Main';
import CollectionPage from '../../pages/Collections';
import ProductPage from '../../pages/Product';
import About from '../../pages/About';
import DeliveryAndPai from '../../pages/DeliveryAndPai';
import Comments from '../../pages/Comments';
import Contacts from '../../pages/Contacts';
import PageNotFound from '../../pages/NotFoundPage';
import ResultSearch from '../../pages/ResultSearch';

const RoutesInApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/:id" element={<CollectionPage />} />
			<Route path="/product/:id" element={<ProductPage />} />
			<Route path="about" element={<About />} />
			<Route path="delivery" element={<DeliveryAndPai />} />
			<Route path="comments" element={<Comments />} />
			<Route path="contacts" element={<Contacts />} />
			<Route path="search" element={<ResultSearch />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default RoutesInApp;
