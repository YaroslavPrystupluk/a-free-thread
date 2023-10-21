import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Hits from '../components/Hits';
import Modal from '../components/Modal';
import Collection from '../components/Collection';
import Main from '../pages/Main';

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
			<Main />
		</BrowserRouter>
	);
};

export default App;
