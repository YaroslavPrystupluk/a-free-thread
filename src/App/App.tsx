import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Main from '../pages/Main';
import CollectionPage from '../pages/Collections';
import PageNotFound from '../pages/NotFoundPage';
import Footer from '../components/Footer';
import ProductPage from '../pages/Product';
import About from '../pages/About';
import DeliveryAndPai from '../pages/DeliveryAndPai';
import Comments from '../pages/Comments';
import Contacts from '../pages/Contacts';
import ResultSearch from '../pages/ResultSearch';
import { Product } from '../redux/slices/productsSlice';
import { RootState } from '../redux/store/store';
import { useToggle } from '../hooks/useToggle';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;

const App = () => {
	const [isVisible, toggleVisible] = useToggle(false);
	const [isModalVisible, toggleModal] = useToggle(false);
	const [burgerMenu, setBurgerMenu] = useState<null | HTMLElement>(null);
	const [activeButtonLang, setActiveButtonLang] = useState(1);
	const [activeButtonMenu, setActiveButtonMenu] = useState(0);
	const [valueSearch, setValueSearch] = useState('');
	const [searchProduct, setSearchProduct] = useState('');
	const [searchResult, setSearchResult] = useState<Product[]>([]);

	const products = useSelector((state: RootState) => state.products.products) as Product[];

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setValueSearch(event.target.value);
		setSearchProduct(event.target.value);
	};

	const handleSearch = () => {
		const resultSearch = products.filter((product) => {
			return product.name.toLowerCase().includes(valueSearch.toLowerCase());
		});

		setValueSearch('');
		setSearchResult(resultSearch);
	};

	const handleClickBurgerMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setBurgerMenu(event.currentTarget);
	};

	const handleCloseBurgerMenu = () => {
		setBurgerMenu(null);
	};

	const handleActiveButtonLang = (buttonIndex: number) => {
		setActiveButtonLang(buttonIndex);
	};

	const handleActiveButtonMenu = (buttonIndex: number) => {
		setActiveButtonMenu(buttonIndex);
	};

	return (
		<BrowserRouter>
			<Wrapper>
				<Modal
					handleChange={handleChange}
					valueSearch={valueSearch}
					handleCloseModal={toggleModal}
					openModal={isModalVisible}
					handleSearch={handleSearch}
				/>
				<Header
					activeButtonLang={activeButtonLang}
					handleActiveButtonLang={handleActiveButtonLang}
					handleOpenModal={toggleModal}
					handleActiveButtonMenu={handleActiveButtonMenu}
					activeButtonMenu={activeButtonMenu}
					handleOpenSubMenu={toggleVisible}
					openSubMenu={isVisible}
					toggleActive={toggleVisible}
					handleClickBurgerMenu={handleClickBurgerMenu}
					handleCloseBurgerMenu={handleCloseBurgerMenu}
					burgerMenu={burgerMenu}
					isActive={isVisible}
				/>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/:id" element={<CollectionPage />} />
					<Route path="/product/:id" element={<ProductPage />} />
					<Route path="about" element={<About />} />
					<Route path="delivery" element={<DeliveryAndPai />} />
					<Route path="comments" element={<Comments />} />
					<Route path="contacts" element={<Contacts />} />
					<Route
						path="search"
						element={<ResultSearch searchProduct={searchProduct} searchResult={searchResult} />}
					/>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
				<Footer
					handleOpenSubMenu={toggleVisible}
					openSubMenu={isVisible}
					handleCloseSubMenu={toggleVisible}
				/>
			</Wrapper>
		</BrowserRouter>
	);
};

export default App;
