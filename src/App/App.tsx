import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Hits from '../components/Hits';
import Modal from '../components/Modal';

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
			<Hits badge="Хіт" />
			<Hits badge="Новинка" />
		</BrowserRouter>
	);
};

export default App;
