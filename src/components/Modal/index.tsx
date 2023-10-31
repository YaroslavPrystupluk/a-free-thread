import React, { FC } from 'react';
import { DialogActions, Grid, IconButton } from '@mui/material';
import { CustomTextField, CustomButton, ContainerGrid, CustomDialog } from './ModalSearchThema';
import closeMenu from '../../images/icon/cancel-menu.webp';

interface ModalSearchProps {
	valueSearch: string;
	openModal: boolean;
	handleCloseModal: () => void;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalSearch: FC<ModalSearchProps> = React.memo(
	({ handleCloseModal, openModal, valueSearch, handleChange }) => {
		return (
			<CustomDialog fullScreen open={openModal} onClose={handleCloseModal}>
				<DialogActions>
					<IconButton
						disableRipple
						edge="start"
						color="inherit"
						onClick={handleCloseModal}
						aria-label="close"
					>
						<img src={closeMenu} alt="icon menu close" />
					</IconButton>
				</DialogActions>
				<ContainerGrid container justifyContent="center" alignItems="center">
					<Grid item>
						<CustomTextField
							value={valueSearch}
							onChange={handleChange}
							size="small"
							placeholder="введіть назву"
						/>
					</Grid>
					<Grid item>
						<CustomButton disableRipple variant="contained" onClick={handleCloseModal}>
							Знайти
						</CustomButton>
					</Grid>
				</ContainerGrid>
			</CustomDialog>
		);
	},
);

export default ModalSearch;
