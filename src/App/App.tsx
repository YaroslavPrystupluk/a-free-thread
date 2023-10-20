import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Hits from '../components/Hits';
import Modal from '../components/Modal';

const App = () => {
	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<BrowserRouter>
			<Modal handleCloseModal={handleCloseModal} openModal={openModal} />
			<Header handleOpenModal={handleOpenModal} />
			<Hits badge="Хіт" />
			<Hits badge="Новинка" />
		</BrowserRouter>
	);
};

export default App;
