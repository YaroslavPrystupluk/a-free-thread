import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Modal from '../components/Modal';
import Main from '../pages/Main';
import Footer from '../components/Footer';

const App = () => {
	const [burgerMenu, setBurgerMenu] = useState<null | HTMLElement>(null);
	const [isActive, setIsActive] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [activeButtonLang, setActiveButtonLang] = useState(1);
	const [activeButtonMenu, setActiveButtonMenu] = useState(0);
	const [openSubMenu, setOpenSubMenu] = useState(false);

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
			<Modal handleCloseModal={handleCloseModal} openModal={openModal} />
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
			<SubHeader />
			<Main />
			<Footer
				handleOpenSubMenu={handleOpenSubMenu}
				openSubMenu={openSubMenu}
				handleCloseSubMenu={handleCloseSubMenu}
			/>
		</BrowserRouter>
	);
};

export default App;
