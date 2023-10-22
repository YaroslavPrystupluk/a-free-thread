import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { WrapperMenu, CustomLink, MenuButton } from './styledMenu';

const MenuHeader = React.memo(() => {
	const [catalog, setCatalog] = useState<null | HTMLElement>(null);
	const openCatalog = Boolean(catalog);

	const handleClickBayer = (event: React.MouseEvent<HTMLButtonElement>) => {
		setCatalog(event.currentTarget);
	};
	const handleCloseBayer = () => {
		setCatalog(null);
	};

	return (
		<WrapperMenu>
			<CustomLink to="/">
				<MenuButton
					id="MenuButton-bayer"
					aria-controls={openCatalog ? 'menu-bayer' : undefined}
					aria-haspopup="true"
					aria-expanded={openCatalog ? 'true' : undefined}
					onClick={handleClickBayer}
				>
					каталог
				</MenuButton>
				<Menu
					id="menu-bayer"
					anchorEl={catalog}
					open={openCatalog}
					onClose={handleCloseBayer}
					MenuListProps={{
						'aria-labelledby': 'MenuButton-catalog',
					}}
				>
					<CustomLink to="/guarantee">
						<MenuItem divider onClick={handleCloseBayer}>
							“Сорочки Київщини”
						</MenuItem>
					</CustomLink>
					<CustomLink to="/paymentAndDelivery">
						<MenuItem divider onClick={handleCloseBayer}>
							“Регіони України”
						</MenuItem>
					</CustomLink>
					<CustomLink to="/exchangeAndReturn">
						<MenuItem divider onClick={handleCloseBayer}>
							“Віднови вишиванку своєї бабусі”
						</MenuItem>
					</CustomLink>
					<CustomLink to="/exchangeAndReturn">
						<MenuItem divider onClick={handleCloseBayer}>
							Аксесуари
						</MenuItem>
					</CustomLink>
				</Menu>
			</CustomLink>
			<CustomLink to="/">
				<MenuButton>про нас</MenuButton>
			</CustomLink>
			<CustomLink to="/">
				<MenuButton>доставка і оплата</MenuButton>
			</CustomLink>
			<CustomLink to="/">
				<MenuButton>відгуки</MenuButton>
			</CustomLink>
			<CustomLink to="/">
				<MenuButton>контакти</MenuButton>
			</CustomLink>
		</WrapperMenu>
	);
});

export default MenuHeader;
