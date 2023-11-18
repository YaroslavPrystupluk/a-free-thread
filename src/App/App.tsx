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
	const [burgerMenu, setBurgerMenu] = useState<null | HTMLElement>(null);
	const [isActive, setIsActive] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [activeButtonLang, setActiveButtonLang] = useState(1);
	const [activeButtonMenu, setActiveButtonMenu] = useState(0);
	const [openSubMenu, setOpenSubMenu] = useState(false);
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

	const toggleActive = () => {
		setIsActive(!isActive);
	};

	const handleClickBurgerMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setBurgerMenu(event.currentTarget);
	};

	const handleCloseBurgerMenu = () => {
		setBurgerMenu(null);
	};
	const handleOpenSubMenu = () => {
		setOpenSubMenu(!openSubMenu);
	};

	const handleCloseSubMenu = () => {
		setOpenSubMenu(false);
	};
	const handleActiveButtonLang = (buttonIndex: number) => {
		setActiveButtonLang(buttonIndex);
	};

	const handleActiveButtonMenu = (buttonIndex: number) => {
		setActiveButtonMenu(buttonIndex);
	};
	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<BrowserRouter>
			<Wrapper>
				<Modal
					handleChange={handleChange}
					valueSearch={valueSearch}
					handleCloseModal={handleCloseModal}
					openModal={openModal}
					handleSearch={handleSearch}
				/>
				<Header
					activeButtonLang={activeButtonLang}
					handleActiveButtonLang={handleActiveButtonLang}
					handleOpenModal={handleOpenModal}
					handleActiveButtonMenu={handleActiveButtonMenu}
					activeButtonMenu={activeButtonMenu}
					handleOpenSubMenu={handleOpenSubMenu}
					openSubMenu={openSubMenu}
					toggleActive={toggleActive}
					handleClickBurgerMenu={handleClickBurgerMenu}
					handleCloseBurgerMenu={handleCloseBurgerMenu}
					burgerMenu={burgerMenu}
					isActive={isActive}
				/>
				<RoutesInApp />
				<Footer
					handleOpenSubMenu={handleOpenSubMenu}
					openSubMenu={openSubMenu}
					handleCloseSubMenu={handleCloseSubMenu}
				/>
			</Wrapper>
		</BrowserRouter>
	);
};

export default App;
