import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import { Product } from '../redux/slices/productsSlice';
import { RootState } from '../redux/store/store';
import { useToggle } from '../hooks/useToggle';
import { addProduct, addResult } from '../redux/slices/searchSlice';
import RoutesInApp from '../components/Routes';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;

const App = () => {
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const [isVisible, toggleVisible] = useToggle(false);
	const [isModalVisible, toggleModal] = useToggle(false);
	const [burgerMenu, setBurgerMenu] = useState<null | HTMLElement>(null);
	const [activeButtonLang, setActiveButtonLang] = useState(1);
	const [activeButtonMenu, setActiveButtonMenu] = useState(0);
	const [valueSearch, setValueSearch] = useState('');

	const products = useSelector((state: RootState) => state.products.products) as Product[];

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setValueSearch(event.target.value);
		dispatch(addProduct(event.target.value));
	};

	const handleSearch = () => {
		const resultSearch = products.filter((product) => {
			return product.name.toLowerCase().includes(valueSearch.toLowerCase());
		});

		setValueSearch('');
		dispatch(addResult(resultSearch));
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
				<RoutesInApp />
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
