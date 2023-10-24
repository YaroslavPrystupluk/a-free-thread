import React, { FC } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Search from './Search/Search';
import MenuHeader from './MenuHeader/MenuHeader';

import {
	HeaderWrapper,
	LogoWrapper,
	Logo,
	PhoneWrapper,
	PhoneNumber,
	Wrapper,
	SearchDesktop,
	SelectLanguage,
	BtnLang,
	SubHeader,
} from './stylesHeader';
import logoBig from '../../images/logo/logo_free_thread.webp';
import phone from '../../images/icon/phone.webp';

interface HeaderProps {
	activeButtonLang: number;
	activeButtonMenu: number;
	openSubMenu: boolean;
	handleActiveButtonLang: (buttonIndex: number) => void;
	handleActiveButtonMenu: (buttonIndex: number) => void;
	handleOpenModal: () => void;
	handleOpenSubMenu: () => void;
	toggleActive: () => void;
	handleClickBurgerMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
	handleCloseBurgerMenu: () => void;
	burgerMenu: null | HTMLElement;
	isActive: boolean;
}

const Header: FC<HeaderProps> = ({
	handleOpenModal,
	handleActiveButtonLang,
	activeButtonLang,
	activeButtonMenu,
	handleActiveButtonMenu,
	openSubMenu,
	handleOpenSubMenu,
	toggleActive,
	handleClickBurgerMenu,
	handleCloseBurgerMenu,
	burgerMenu,
	isActive,
}) => {
	return (
		<header>
			<HeaderWrapper>
				<LogoWrapper>
					<Logo src={logoBig} alt="logo free thread" />
				</LogoWrapper>
				<PhoneWrapper>
					<img src={phone} alt="icon phone" />
					<PhoneNumber href="tel:+380503337820">+38 (050) 333 78 20</PhoneNumber>
				</PhoneWrapper>
				<MenuHeader
					activeButtonMenu={activeButtonMenu}
					handleActiveButtonMenu={handleActiveButtonMenu}
				/>
				<Wrapper>
					<SearchDesktop>
						<Search handleOpenModal={handleOpenModal} />
					</SearchDesktop>
					<SelectLanguage>
						<BtnLang $active={activeButtonLang === 1} onClick={() => handleActiveButtonLang(1)}>
							ua
						</BtnLang>
						<BtnLang $active={activeButtonLang === 2} onClick={() => handleActiveButtonLang(2)}>
							en
						</BtnLang>
					</SelectLanguage>
				</Wrapper>
			</HeaderWrapper>
			<SubHeader>
				<BurgerMenu
					activeButtonMenu={activeButtonMenu}
					handleActiveButtonMenu={handleActiveButtonMenu}
					openSubMenu={openSubMenu}
					handleOpenSubMenu={handleOpenSubMenu}
					toggleActive={toggleActive}
					handleClickBurgerMenu={handleClickBurgerMenu}
					handleCloseBurgerMenu={handleCloseBurgerMenu}
					burgerMenu={burgerMenu}
					isActive={isActive}
				/>
				<Search handleOpenModal={handleOpenModal} />
			</SubHeader>
		</header>
	);
};

export default Header;
