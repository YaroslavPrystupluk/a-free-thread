import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, MenuItem, Collapse } from '@mui/material';
import {
	CustomizedMenu,
	CustomLink,
	BtnCatalogLine,
	ArrowRight,
	ArrowDown,
	SubMenuItem,
	CatalogLink,
} from '../../../Theme/BurgerMenuThema';
import openMenu from '../../../images/icon/cancel-menu.webp';
import closeMenu from '../../../images/icon/menu-2.webp';

interface HeaderBurgerMenuProps {
	activeButtonMenu: number;
	openSubMenu: boolean;
	handleActiveButtonMenu: (buttonIndex: number) => void;
	handleOpenSubMenu: () => void;
	toggleActive: () => void;
	handleOpenBurgerMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
	handleCloseBurgerMenu: () => void;
	burgerMenu: null | HTMLElement;
	isActive: boolean;
}

const BurgerMenu: FC<HeaderBurgerMenuProps> = React.memo(
	({
		handleOpenSubMenu,
		openSubMenu,
		toggleActive,
		handleCloseBurgerMenu,
		handleOpenBurgerMenu,
		burgerMenu,
		isActive,
	}) => {
		const openBurgerMenu = Boolean(burgerMenu);
		const { t } = useTranslation();

		return (
			<>
				<IconButton
					disableRipple
					id="button-burgerMenu"
					aria-controls={openBurgerMenu ? 'menu-burgerMenu' : undefined}
					aria-haspopup="true"
					aria-expanded={openBurgerMenu ? 'true' : undefined}
					onClick={handleOpenBurgerMenu}
				>
					{!burgerMenu ? (
						<img src={closeMenu} alt="icon menu close" />
					) : (
						<img src={openMenu} alt="icon menu open" />
					)}
				</IconButton>
				<CustomizedMenu
					id="menu-burgerMenu"
					anchorEl={burgerMenu}
					open={openBurgerMenu}
					onClose={handleCloseBurgerMenu}
					MenuListProps={{
						'aria-labelledby': 'button-burgerMenu',
					}}
				>
					<CatalogLink onClick={toggleActive}>
						<MenuItem disableRipple divider onClick={handleOpenSubMenu}>
							<BtnCatalogLine $active={isActive} />
							{t('header.catalog')}
							{!openSubMenu ? <ArrowRight /> : <ArrowDown />}
						</MenuItem>
					</CatalogLink>
					<Collapse in={openSubMenu} timeout="auto" unmountOnExit>
						<SubMenuItem to="/kiev">
							<MenuItem
								disableRipple
								divider
								onClick={() => {
									handleCloseBurgerMenu();
									handleOpenSubMenu();
								}}
							>
								{t('collection.kiev.title')}
							</MenuItem>
						</SubMenuItem>
						<SubMenuItem to="regions">
							<MenuItem
								disableRipple
								divider
								onClick={() => {
									handleCloseBurgerMenu();
									handleOpenSubMenu();
								}}
							>
								{t('collection.regions.title')}
							</MenuItem>
						</SubMenuItem>
						<SubMenuItem to="/grandmother">
							<MenuItem
								disableRipple
								divider
								onClick={() => {
									handleCloseBurgerMenu();
									handleOpenSubMenu();
								}}
							>
								{t('collection.grandmother.title')}
							</MenuItem>
						</SubMenuItem>
						<SubMenuItem to="/accessories">
							<MenuItem
								disableRipple
								divider
								onClick={() => {
									handleCloseBurgerMenu();
									handleOpenSubMenu();
								}}
							>
								{t('collection.accessories.title')}
							</MenuItem>
						</SubMenuItem>
					</Collapse>
					<CustomLink to="/about">
						<MenuItem disableRipple divider onClick={handleCloseBurgerMenu}>
							{t('about.title')}
						</MenuItem>
					</CustomLink>
					<CustomLink to="/delivery">
						<MenuItem disableRipple divider onClick={handleCloseBurgerMenu}>
							{t('delivery.title')}
						</MenuItem>
					</CustomLink>
					<CustomLink to="/comments">
						<MenuItem divider onClick={handleCloseBurgerMenu}>
							{t('header.button.reviews')}
						</MenuItem>
					</CustomLink>
					<CustomLink to="/contacts">
						<MenuItem disableRipple divider onClick={handleCloseBurgerMenu}>
							{t('header.button.contacts')}
						</MenuItem>
					</CustomLink>
				</CustomizedMenu>
			</>
		);
	},
);

export default BurgerMenu;
