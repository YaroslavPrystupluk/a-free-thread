import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Main from '../pages/Main';
import CollectionPage from '../pages/Collections';
import PageNotFound from '../pages/NotFoundPage';
import Footer from '../components/Footer';
import ProductPage from '../pages/Product';
import About from '../pages/About';

const App = () => {
	const [burgerMenu, setBurgerMenu] = useState<null | HTMLElement>(null);
	const [isActive, setIsActive] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [activeButtonLang, setActiveButtonLang] = useState(1);
	const [activeButtonMenu, setActiveButtonMenu] = useState(0);
	const [openSubMenu, setOpenSubMenu] = useState(false);
	const [valueSearch, setValueSearch] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setValueSearch(event.target.value);
	};
	const toggleActive = () => {
		setIsActive(!isActive);
	};

	const handleClickBurgerMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setBurgerMenu(event.currentTarget);
	};

	// const handleKeyDoun = (e: KeyboardEvent<HTMLInputElement>) => {
	// eslint-disable-next-line no-tabs
	// 	if (e.key === "Enter") showIssues();
	// };

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
			<Modal
				handleChange={handleChange}
				valueSearch={valueSearch}
				handleCloseModal={handleCloseModal}
				openModal={openModal}
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
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/:id" element={<CollectionPage />} />
				<Route path="/product/:id" element={<ProductPage />} />
				<Route path="about" element={<About />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer
				handleOpenSubMenu={handleOpenSubMenu}
				openSubMenu={openSubMenu}
				handleCloseSubMenu={handleCloseSubMenu}
			/>
		</BrowserRouter>
	);
};

export default App;
