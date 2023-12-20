/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import { Product } from '../redux/slices/productsSlice';
import { RootState } from '../redux/store/store';
import { useToggle } from '../hooks/useToggle';
import { addProduct, addResult, clearSearch } from '../redux/slices/searchSlice';
import routes from '../components/Routes';
import { useMenu } from '../hooks/useMenu';
import { useToggleButton } from '../hooks/useToggleButton';
import LoadingAnimation from '../components/Loading';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;

const App = () => {
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
	const [isVisible, toggleVisible] = useToggle(false);
	const [openFooterSubMenu, toggleFooterSubMenu] = useToggle(false);
	const [isModalVisible, toggleModal] = useToggle(false);
	const [catalog, openCatalog, closeCatalog] = useMenu(null);
	const [burgerMenu, openBurgerMenu, closeBurgerMenu] = useMenu(null);
	const [activeButtonMenu, toggleButtonMenu] = useToggleButton(0);
	const [valueSearch, setValueSearch] = useState('');

	const products = useSelector((state: RootState) => state.products.products) as Product[];

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setValueSearch(event.target.value);
		dispatch(addProduct(event.target.value));
	};

	const handleSearch = () => {
		if (valueSearch.length > 0) {
			const resultSearch = products.filter((product) => {
				return product.name.toLowerCase().includes(valueSearch.toLowerCase());
			});

			dispatch(addResult(resultSearch));
		} else {
			dispatch(clearSearch());
		}
		setValueSearch('');
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
					handleOpenModal={toggleModal}
					handleActiveButtonMenu={toggleButtonMenu}
					activeButtonMenu={activeButtonMenu}
					handleOpenSubMenu={toggleVisible}
					openSubMenu={isVisible}
					toggleActive={toggleVisible}
					handleOpenBurgerMenu={openBurgerMenu}
					handleCloseBurgerMenu={closeBurgerMenu}
					handleOpenCatalog={openCatalog}
					handleCloseCatalog={closeCatalog}
					burgerMenu={burgerMenu}
					catalog={catalog}
					isActive={isVisible}
				/>
				<Routes>
					{routes.map(({ path, component: Component }) => (
						<Route
							key={path}
							path={path}
							element={
								<Suspense fallback={<LoadingAnimation />}>
									<Component />
								</Suspense>
							}
						/>
					))}
				</Routes>
				<Footer
					handleOpenSubMenu={toggleFooterSubMenu}
					openFooterSubMenu={openFooterSubMenu}
					handleCloseSubMenu={toggleFooterSubMenu}
				/>
			</Wrapper>
		</BrowserRouter>
	);
};

export default App;
