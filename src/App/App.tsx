import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Main from '../pages/Main';
import CollectionPage from '../pages/Collections';
import PageNotFound from '../pages/NotFoundPage';

const App = () => {
	const [openModal, setOpenModal] = useState(false);
	const [activeButtonLang, setActiveButtonLang] = useState(1);
	const [activeButtonMenu, setActiveButtonMenu] = useState(0);

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
			<Header
				activeButtonLang={activeButtonLang}
				handleActiveButtonLang={handleActiveButtonLang}
				handleOpenModal={handleOpenModal}
				handleActiveButtonMenu={handleActiveButtonMenu}
				activeButtonMenu={activeButtonMenu}
			/>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/:id" element={<CollectionPage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Modal handleCloseModal={handleCloseModal} openModal={openModal} />
		</BrowserRouter>
	);
};

export default App;
