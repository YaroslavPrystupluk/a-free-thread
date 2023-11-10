import styled from 'styled-components';
import DoneIcon from '@mui/icons-material/Done';
import { ListItemText } from '@mui/material';

interface TitleProps {
	$isTitle?: boolean;
}

const Container = styled.article`
	max-width: ${({ theme }) => `${theme.breakpoints.xs}px`};
	margin: 0 auto;
	padding: 0 26px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: ${({ theme }) => `${theme.breakpoints.md}px`};
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		max-width: ${({ theme }) => `${theme.breakpoints.xl}px`};
	}
`;

const TitleWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 67px 0 24px 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		margin:60px 0 30px 0; 
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		margin: 80px 0 40px 0;
`;

const TitlePage = styled.h1`
	font-family: ${({ theme }) => theme.fontFamily.title}, sans-serif;
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	line-height: 160%;
	letter-spacing: 0.4px;
	text-transform: uppercase;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		font-size: 24px;
		letter-spacing: 0.48px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		font-size: 40px;
		letter-spacing: 0.8px;
	}
`;

const StarIcon = styled.img`
	max-width: 16px;
	position: absolute;
	bottom: 75%;
	right: 6%;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 20px;
		right: 31%;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		max-width: 24px;
		right: 31%;
	}
`;

const SquareTitle = styled.span`
	min-width: 28px;
	min-height: 28px;
	position: absolute;
	left: 5%;
	bottom: 60%;
	background: ${({ theme }) => theme.colors.primary};
	opacity: 0.2;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		left: 31%;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		min-width: 40px;
		min-height: 40px;
		left: 30.5%;
		bottom: 60%;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 60px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		flex-direction: row;
		gap: 20px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		gap: 24px;
	}
`;

const TitleContent = styled.p<TitleProps>`
	font-family: ${({ theme }) => theme.fontFamily.title}, sans-serif;
	text-align: ${(props) => (props.$isTitle ? 'center' : 'start')};
	font-size: 16px;
	font-weight: 500;
	line-height: 160%;
	letter-spacing: 0.32px;
	text-transform: uppercase;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		font-size: 18px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		font-size: 24px;
	}
`;

const ContentList = styled.div`
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 20px 16px 0 16px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		order: 1;
	}

	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		gap: 32px;
		padding: 40px 40px 0 40px;
	}
`;

const CustomDoneIcon = styled(DoneIcon)`
	&.MuiSvgIcon-root {
		font-size: 16px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		&.MuiSvgIcon-root {
			font-size: 20px;
		}
	}
`;

const CustomListItemText = styled(ListItemText)`
	&.MuiTypography-root {
		font-size: 12px;
		line-height: 160%;
		letter-spacing: 0.24px;
	}
`;

export {
	Container,
	TitleWrapper,
	TitlePage,
	StarIcon,
	SquareTitle,
	Content,
	TitleContent,
	ContentList,
	CustomDoneIcon,
	CustomListItemText,
};
