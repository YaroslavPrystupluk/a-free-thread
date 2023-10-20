import { FC } from 'react';
import { DialogActions, Grid, IconButton } from '@mui/material';
import { CustomTextField, CustomButton, ContainerGrid, CustomDialog } from './styledModalSearch';
import closeMenu from '../../images/icon/cancel-menu.webp';

interface ModalSearchProps {
	openModal: boolean;
	handleCloseModal: () => void;
}

const ModalSearch: FC<ModalSearchProps> = ({ handleCloseModal, openModal }) => {
	return (
		<CustomDialog fullScreen open={openModal} onClose={handleCloseModal}>
			<DialogActions>
				<IconButton edge="start" color="inherit" onClick={handleCloseModal} aria-label="close">
					<img src={closeMenu} alt="icon menu close" />
				</IconButton>
			</DialogActions>
			<ContainerGrid container justifyContent="center" alignItems="center">
				<Grid item>
					<CustomTextField size="small" placeholder="введіть назву" />
				</Grid>
				<Grid item>
					<CustomButton variant="contained" onClick={handleCloseModal}>
						Знайти
					</CustomButton>
				</Grid>
			</ContainerGrid>
		</CustomDialog>
	);
};

export default ModalSearch;
