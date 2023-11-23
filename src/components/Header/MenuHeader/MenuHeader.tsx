import React, { FC } from 'react';
import { MenuItem } from '@mui/material';
import { WrapperMenu, CustomMenu, CustomLink, MenuButton } from '../../../Theme/MenuThema';

interface HeaderMenuProps {
	activeButtonMenu: number;
	handleActiveButtonMenu: (buttonIndex: number) => void;
	handleOpenCatalog: (event: React.MouseEvent<HTMLButtonElement>) => void;
	handleCloseCatalog: () => void;
	catalog: null | HTMLElement;
}

const MenuHeader: FC<HeaderMenuProps> = React.memo(
	({
		activeButtonMenu,
		handleActiveButtonMenu,
		handleOpenCatalog,
		handleCloseCatalog,
		catalog,
	}) => {
		const openCatalog = Boolean(catalog);

		return (
			<WrapperMenu>
				<CustomLink onClick={() => handleActiveButtonMenu(1)} to="/">
					<MenuButton
						id="MenuButton-bayer"
						aria-controls={openCatalog ? 'menu-bayer' : undefined}
						aria-haspopup="true"
						aria-expanded={openCatalog ? 'true' : undefined}
						onClick={handleOpenCatalog}
						$active={activeButtonMenu === 1}
						disableRipple
					>
						каталог
					</MenuButton>
					<CustomMenu
						id="menu-bayer"
						anchorEl={catalog}
						open={openCatalog}
						onClose={handleCloseCatalog}
						MenuListProps={{
							'aria-labelledby': 'MenuButton-catalog',
						}}
					>
						<CustomLink to="/kiev">
							<MenuItem disableRipple divider onClick={handleCloseCatalog}>
								“Сорочки Київщини”
							</MenuItem>
						</CustomLink>
						<CustomLink to="regions">
							<MenuItem disableRipple divider onClick={handleCloseCatalog}>
								“Регіони України”
							</MenuItem>
						</CustomLink>
						<CustomLink to="/grandmother">
							<MenuItem disableRipple divider onClick={handleCloseCatalog}>
								“Віднови вишиванку своєї бабусі”
							</MenuItem>
						</CustomLink>
						<CustomLink to="/accessories">
							<MenuItem disableRipple divider onClick={handleCloseCatalog}>
								Аксесуари
							</MenuItem>
						</CustomLink>
					</CustomMenu>
				</CustomLink>
				<CustomLink to="/about">
					<MenuButton
						disableRipple
						$active={activeButtonMenu === 2}
						onClick={() => handleActiveButtonMenu(2)}
					>
						про нас
					</MenuButton>
				</CustomLink>
				<CustomLink to="/delivery">
					<MenuButton
						disableRipple
						$active={activeButtonMenu === 3}
						onClick={() => handleActiveButtonMenu(3)}
					>
						доставка і оплата
					</MenuButton>
				</CustomLink>
				<CustomLink to="/comments">
					<MenuButton
						disableRipple
						$active={activeButtonMenu === 4}
						onClick={() => handleActiveButtonMenu(4)}
					>
						відгуки
					</MenuButton>
				</CustomLink>
				<CustomLink to="/contacts">
					<MenuButton
						disableRipple
						$active={activeButtonMenu === 5}
						onClick={() => handleActiveButtonMenu(5)}
					>
						контакти
					</MenuButton>
				</CustomLink>
			</WrapperMenu>
		);
	},
);

export default MenuHeader;
