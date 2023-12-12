import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { DialogActions, Grid, IconButton } from '@mui/material';
import {
	CustomTextField,
	CustomButton,
	ContainerGrid,
	CustomDialog,
} from '../../Theme/ModalSearchThema';
import closeMenu from '../../images/icon/cancel-menu.webp';

interface ModalSearchProps {
	valueSearch: string;
	openModal: boolean;
	handleCloseModal: () => void;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleSearch: () => void;
}

const ModalSearch: FC<ModalSearchProps> = React.memo(
	({ handleCloseModal, openModal, valueSearch, handleChange, handleSearch }) => {
		const { t } = useTranslation();

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
							placeholder={t('search.modal.placeholder')}
						/>
					</Grid>
					<Grid item>
						<NavLink to="/search">
							<CustomButton
								disableRipple
								variant="contained"
								onClick={() => {
									handleSearch();
									handleCloseModal();
								}}
							>
								{t('search.modal.button')}
							</CustomButton>
						</NavLink>
					</Grid>
				</ContainerGrid>
			</CustomDialog>
		);
	},
);

export default ModalSearch;
