import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Main from '../pages/Main';

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
			<Modal handleCloseModal={handleCloseModal} openModal={openModal} />
			<Header
				activeButtonLang={activeButtonLang}
				handleActiveButtonLang={handleActiveButtonLang}
				handleOpenModal={handleOpenModal}
				handleActiveButtonMenu={handleActiveButtonMenu}
				activeButtonMenu={activeButtonMenu}
			/>
			<Main />
		</BrowserRouter>
	);
};

export default App;
