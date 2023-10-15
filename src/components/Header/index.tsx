import { FC } from "react";
import { Box, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
	HeaderWrapper,
	LogoWrapper,
	Logo,
	PhoneWrapper,
	PhoneNumber,
	SelectLanguage,
	BtnLang,
} from "./stylesHeader";
import logoBig from "../../images/logo/logo_free_thread.webp";
import phone from "../../images/icon/phone.webp";

const Header: FC = () => {
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
				<SelectLanguage>
					<BtnLang>UA</BtnLang>
					<BtnLang>EN</BtnLang>
				</SelectLanguage>
			</HeaderWrapper>
			<Box sx={{ flexGrow: 1 }}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<IconButton size="large" aria-label="search" color="inherit">
						<SearchIcon />
					</IconButton>
				</Toolbar>
			</Box>
		</header>
	);
};

export default Header;
