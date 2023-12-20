import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Search from './Search/Search';
import MenuHeader from './MenuHeader/MenuHeader';
import { RootState } from '../../redux/store/store';
import { setLanguage, Product } from '../../redux/slices/productsSlice';
import { filterProducts } from '../../pages/Main/getProducts';

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
} from '../../Theme/HeaderThema';
import logoBig from '../../images/logo/logo_free_thread.webp';
import phone from '../../images/icon/phone.webp';

interface HeaderProps {
	activeButtonMenu: number;
	openSubMenu: boolean;
	handleActiveButtonMenu: (buttonIndex: number) => void;
	handleOpenModal: () => void;
	handleOpenSubMenu: () => void;
	toggleActive: () => void;
	handleOpenBurgerMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
	handleCloseBurgerMenu: () => void;
	handleOpenCatalog: (event: React.MouseEvent<HTMLButtonElement>) => void;
	handleCloseCatalog: () => void;
	catalog: null | HTMLElement;
	burgerMenu: null | HTMLElement;
	isActive: boolean;
}

const Header: FC<HeaderProps> = ({
	handleOpenModal,
	activeButtonMenu,
	handleActiveButtonMenu,
	openSubMenu,
	handleOpenSubMenu,
	toggleActive,
	handleOpenBurgerMenu,
	handleCloseBurgerMenu,
	handleOpenCatalog,
	handleCloseCatalog,
	catalog,
	burgerMenu,
	isActive,
}) => {
	const { i18n } = useTranslation();
	const currentLanguage = i18next.language;
	const languageState = useSelector((state: RootState) => state.products.language);
	const productsArray: Product[] = useSelector(
		(state: RootState) => (state.products.products || []) as Product[],
	);
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
	const location = useLocation();
	const hasProductPath = location.pathname.includes('product');

	const handleLanguageChange = (language: string) => {
		i18n.changeLanguage(language);
		dispatch(setLanguage(language));
	};

	useEffect(() => {
		if (languageState !== currentLanguage || !productsArray?.length) {
			if (!hasProductPath) {
				filterProducts(
					`shirts_${currentLanguage}.json`,
					`accessories_${currentLanguage}.json`,
					currentLanguage,
				);
			} else {
				filterProducts(
					`../shirts_${currentLanguage}.json`,
					`../accessories_${currentLanguage}.json`,
					currentLanguage,
				);
			}
		}
	}, [languageState, currentLanguage, productsArray, hasProductPath]);

	const toggleSearch = () => {
		handleOpenModal();
	};

	return (
		<header>
			<HeaderWrapper>
				<LogoWrapper>
					<a href="/">
						<Logo src={logoBig} alt="logo free thread" />
					</a>
				</LogoWrapper>
				<PhoneWrapper>
					<img src={phone} alt="icon phone" />
					<PhoneNumber href="tel:+380503337820">+38 (050) 333 78 20</PhoneNumber>
				</PhoneWrapper>
				<MenuHeader
					activeButtonMenu={activeButtonMenu}
					handleActiveButtonMenu={handleActiveButtonMenu}
					handleOpenCatalog={handleOpenCatalog}
					handleCloseCatalog={handleCloseCatalog}
					catalog={catalog}
				/>
				<Wrapper>
					<SearchDesktop>
						<Search handleOpenModal={toggleSearch} />
					</SearchDesktop>
					<SelectLanguage>
						<BtnLang $active={i18n.language === 'ua'} onClick={() => handleLanguageChange('ua')}>
							ua
						</BtnLang>
						<BtnLang $active={i18n.language === 'en'} onClick={() => handleLanguageChange('en')}>
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
					handleOpenBurgerMenu={handleOpenBurgerMenu}
					handleCloseBurgerMenu={handleCloseBurgerMenu}
					burgerMenu={burgerMenu}
					isActive={isActive}
				/>
				<Search handleOpenModal={toggleSearch} />
			</SubHeader>
		</header>
	);
};

export default Header;
