import React from 'react';
import { Button } from '@mui/material';
import { CustomLink } from './styledMenu';

const Menu = React.memo(() => {
	return (
		<div>
			<CustomLink to="/">
				<Button>каталог</Button>
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

export default Menu;
