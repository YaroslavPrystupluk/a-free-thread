import { FC } from 'react';
import { Dialog, DialogActions, Grid, IconButton } from '@mui/material';
import { CustomTextField, CustomButton } from './styledModalSearch';
import closeMenu from '../../images/icon/cancel-menu.webp';

interface ModalSearchProps {
	openModal: boolean;
	handleCloseModal: () => void;
}

const ModalSearch: FC<ModalSearchProps> = ({ handleCloseModal, openModal }) => {
	return (
		<Dialog fullScreen open={openModal} onClose={handleCloseModal}>
			<DialogActions>
				<IconButton edge="start" color="inherit" onClick={handleCloseModal} aria-label="close">
					<img src={closeMenu} alt="icon menu close" />
				</IconButton>
			</DialogActions>
			<Grid container alignItems="center">
				<Grid item>
					<CustomTextField size="small" placeholder="введіть назву" />
				</Grid>
				<Grid item>
					<CustomButton variant="contained" onClick={handleCloseModal}>
						Пошук
					</CustomButton>
				</Grid>
			</Grid>
		</Dialog>
	);
};

export default ModalSearch;
