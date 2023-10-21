import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { CustomLink } from './styledMenu';

const MenuHeader = React.memo(() => {
	const [bayer, setBayer] = useState<null | HTMLElement>(null);
	const openBayer = Boolean(bayer);

	const handleClickBayer = (event: React.MouseEvent<HTMLButtonElement>) => {
		setBayer(event.currentTarget);
	};
	const handleCloseBayer = () => {
		setBayer(null);
	};

	return (
		<div>
			<CustomLink to="/">
				<Button
					id="button-bayer"
					aria-controls={openBayer ? 'menu-bayer' : undefined}
					aria-haspopup="true"
					aria-expanded={openBayer ? 'true' : undefined}
					onClick={handleClickBayer}
				>
					каталог
				</Button>
				<Menu
					id="menu-bayer"
					anchorEl={bayer}
					open={openBayer}
					onClose={handleCloseBayer}
					MenuListProps={{
						'aria-labelledby': 'button-bayer',
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
				<Button>про нас</Button>
			</CustomLink>
			<CustomLink to="/">
				<Button>доставка і оплата</Button>
			</CustomLink>
			<CustomLink to="/">
				<Button>відгуки</Button>
			</CustomLink>
			<CustomLink to="/">
				<Button>контакти</Button>
			</CustomLink>
		</div>
	);
});

export default MenuHeader;
