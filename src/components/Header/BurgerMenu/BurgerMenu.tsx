import React, { FC, useState } from 'react';
import { Box, IconButton, MenuItem } from '@mui/material';
import { CustomizedMenu, CustomLink, Symbol } from './styledBurgerMenu';
import openMenu from '../../../images/icon/cancel-menu.webp';
import closeMenu from '../../../images/icon/menu-2.webp';

const BurgerMenu: FC = React.memo(() => {
	const [burgerMenu, setBurgerMenu] = useState<null | HTMLElement>(null);
	const openBurgerMenu = Boolean(burgerMenu);

	const handleClickBurgerMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setBurgerMenu(event.currentTarget);
	};
	const handleCloseBurgerMenu = () => {
		setBurgerMenu(null);
	};

	return (
		<Box>
			<IconButton
				id="button-burgerMenu"
				aria-controls={openBurgerMenu ? 'menu-burgerMenu' : undefined}
				aria-haspopup="true"
				aria-expanded={openBurgerMenu ? 'true' : undefined}
				onClick={handleClickBurgerMenu}
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
				<CustomLink to="/">
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Каталог
						<Symbol> </Symbol>
					</MenuItem>
				</CustomLink>
				<CustomLink to="/products">
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Про нас
					</MenuItem>
				</CustomLink>
				<CustomLink to="/guarantee">
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Доставка і оплата
					</MenuItem>
				</CustomLink>
				<CustomLink to="/paymentAndDelivery">
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Відгуки
					</MenuItem>
				</CustomLink>
				<CustomLink to="/contacts">
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Контакти
					</MenuItem>
				</CustomLink>
			</CustomizedMenu>
		</Box>
	);
});

export default BurgerMenu;
