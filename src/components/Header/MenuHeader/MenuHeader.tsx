import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '@mui/material';
import { WrapperMenu, CustomMenu, CustomLink, MenuButton } from '../../../Theme/MenuThema';
import { CatalogLink } from '../../../Theme/BurgerMenuThema';

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
		const { t } = useTranslation();

		return (
			<WrapperMenu>
				<CatalogLink onClick={() => handleActiveButtonMenu(1)}>
					<MenuButton
						id="MenuButton-bayer"
						aria-controls={openCatalog ? 'menu-bayer' : undefined}
						aria-haspopup="true"
						aria-expanded={openCatalog ? 'true' : undefined}
						onClick={handleOpenCatalog}
						$active={activeButtonMenu === 1}
						disableRipple
					>
						{t('header.catalog')}
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
								{t('collection.kiev.title')}
							</MenuItem>
						</CustomLink>
						<CustomLink to="regions">
							<MenuItem disableRipple divider onClick={handleCloseCatalog}>
								{t('collection.regions.title')}
							</MenuItem>
						</CustomLink>
						<CustomLink to="/grandmother">
							<MenuItem disableRipple divider onClick={handleCloseCatalog}>
								{t('collection.grandmother.title')}
							</MenuItem>
						</CustomLink>
						<CustomLink to="/accessories">
							<MenuItem disableRipple divider onClick={handleCloseCatalog}>
								{t('collection.accessories.title')}
							</MenuItem>
						</CustomLink>
					</CustomMenu>
				</CatalogLink>
				<CustomLink to="/about">
					<MenuButton
						disableRipple
						$active={activeButtonMenu === 2}
						onClick={() => handleActiveButtonMenu(2)}
					>
						{t('about.title')}
					</MenuButton>
				</CustomLink>
				<CustomLink to="/delivery">
					<MenuButton
						disableRipple
						$active={activeButtonMenu === 3}
						onClick={() => handleActiveButtonMenu(3)}
					>
						{t('delivery.title')}
					</MenuButton>
				</CustomLink>
				<CustomLink to="/comments">
					<MenuButton
						disableRipple
						$active={activeButtonMenu === 4}
						onClick={() => handleActiveButtonMenu(4)}
					>
						{t('header.button.reviews')}
					</MenuButton>
				</CustomLink>
				<CustomLink to="/contacts">
					<MenuButton
						disableRipple
						$active={activeButtonMenu === 5}
						onClick={() => handleActiveButtonMenu(5)}
					>
						{t('header.button.contacts')}
					</MenuButton>
				</CustomLink>
			</WrapperMenu>
		);
	},
);

export default MenuHeader;
