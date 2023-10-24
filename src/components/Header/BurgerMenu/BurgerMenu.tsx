import React, { FC, useState } from 'react';
import { IconButton, MenuItem, Collapse } from '@mui/material';
import {
	CustomizedMenu,
	CustomLink,
	BtnCatalogLine,
	ArrowRight,
	ArrowDown,
	SubMenuItem,
} from './styledBurgerMenu';
import openMenu from '../../../images/icon/cancel-menu.webp';
import closeMenu from '../../../images/icon/menu-2.webp';

interface HeaderBurgerMenuProps {
	activeButtonMenu: number;
	handleActiveButtonMenu: (buttonIndex: number) => void;
}

const BurgerMenu: FC<HeaderBurgerMenuProps> = React.memo(() => {
	const [burgerMenu, setBurgerMenu] = useState<null | HTMLElement>(null);
	const [isActive, setIsActive] = useState(false);
	const openBurgerMenu = Boolean(burgerMenu);

	const toggleActive = () => {
		setIsActive(!isActive);
	};

	const handleClickBurgerMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setBurgerMenu(event.currentTarget);
	};
	const handleCloseBurgerMenu = () => {
		setBurgerMenu(null);
	};

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<>
			<IconButton
				disableRipple
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
				<CustomLink onClick={toggleActive} to="/">
					<MenuItem disableRipple divider onClick={handleClick}>
						<BtnCatalogLine $active={isActive} />
						Каталог
						{!open ? <ArrowRight /> : <ArrowDown />}
					</MenuItem>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<SubMenuItem to="/products">
							<MenuItem disableRipple divider onClick={handleCloseBurgerMenu}>
								“Сорочки Київщини”
							</MenuItem>
						</SubMenuItem>
						<SubMenuItem to="/guarantee">
							<MenuItem disableRipple divider onClick={handleCloseBurgerMenu}>
								“Регіони України”
							</MenuItem>
						</SubMenuItem>
						<SubMenuItem to="/paymentAndDelivery">
							<MenuItem disableRipple divider onClick={handleCloseBurgerMenu}>
								“Віднови вишиванку своєї бабусі”
							</MenuItem>
						</SubMenuItem>
						<SubMenuItem to="/contacts">
							<MenuItem disableRipple divider onClick={handleCloseBurgerMenu}>
								Аксесуари
							</MenuItem>
						</SubMenuItem>
					</Collapse>
				</CustomLink>
				<CustomLink to="/products">
					<MenuItem disableRipple divider onClick={handleCloseBurgerMenu}>
						Про нас
					</MenuItem>
				</CustomLink>
				<CustomLink to="/guarantee">
					<MenuItem disableRipple divider onClick={handleCloseBurgerMenu}>
						Доставка і оплата
					</MenuItem>
				</CustomLink>
				<CustomLink to="/paymentAndDelivery">
					<MenuItem divider onClick={handleCloseBurgerMenu}>
						Відгуки
					</MenuItem>
				</CustomLink>
				<CustomLink to="/contacts">
					<MenuItem disableRipple divider onClick={handleCloseBurgerMenu}>
						Контакти
					</MenuItem>
				</CustomLink>
			</CustomizedMenu>
		</>
	);
});

export default BurgerMenu;
