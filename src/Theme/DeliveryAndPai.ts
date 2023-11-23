import styled from 'styled-components';
import DoneIcon from '@mui/icons-material/Done';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface TitleProps {
	$isTitle?: boolean;
}

const Container = styled.article`
	margin: 0 auto;
	padding: 0 26px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		max-width: ${({ theme }) => `${theme.breakpoints.xl}px`};
	}
`;

const TitleWrapper = styled.div`
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
	margin: 0 0 30px -10px;

	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 20px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		max-width: 24px;
		margin: 0 0 55px -15px;
	}
`;

const SquareTitle = styled.span`
	min-width: 28px;
	min-height: 28px;
	margin: 0 -13px 25px 0;
	background: ${({ theme }) => theme.colors.primary};
	opacity: 0.2;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		margin: 0 -15px 30px 0;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		min-width: 40px;
		min-height: 40px;
		margin: 0 -23px 45px 0;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 60px;
	margin: 0 0 70px 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		flex-direction: row;
		gap: 20px;
		margin: 0 0 120px 0;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		gap: 24px;
		margin: 0 0 128px 0;
	}
`;

const TitleContent = styled.p<TitleProps>`
	background: ${(props) => (props.$isTitle ? props.theme.colors.primary : 'transparent')};
	font-family: ${({ theme }) => theme.fontFamily.title}, sans-serif;
	text-align: ${(props) => (props.$isTitle ? 'center' : 'start')};
	font-size: 16px;
	font-weight: 500;
	line-height: 160%;
	letter-spacing: 0.32px;
	text-transform: uppercase;
	padding: ${(props) => (props.$isTitle ? '20px 16px 24px 16px' : '0')};
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		font-size: 18px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		font-size: 24px;
		padding: ${(props) => (props.$isTitle ? '40px 40px 32px 40px' : '0')};
	}
`;

const ContentList = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		order: 1;
		min-width: 340px;
	}

	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		min-width: 550px;
	}
`;

const CustomList = styled(List)`
	&.MuiList-root {
		background: ${({ theme }) => theme.colors.primary};
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	&.MuiList-padding {
		padding: 0;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		&.MuiList-root {
			gap: 32px;
		}
	}

	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		&.MuiList-root {
			gap: 40px;
		}
	}
`;

const CustomListItem = styled(ListItem)`
	&.MuiListItem-padding {
		padding: 0 16px;
		&:last-child {
			padding: 0 16px 20px 16px;
		}
	}
  @media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
	&.MuiListItem-padding {
	  padding: 0 40px;
	  &:last-child {
		padding: 0 40px 40px 40px;
	  }
  }
`;

const CustomListItemIcon = styled(ListItemIcon)`
	&.MuiListItemIcon-root {
		min-width: 0;
		padding: 0 12px 0 0;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		&.MuiListItemIcon-root {
			padding: 0 16px 0 0;
		}
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
	& .MuiTypography-root {
		font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
		font-size: 12px;
		line-height: 160%;
		letter-spacing: 0.5px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		& .MuiTypography-root {
			font-size: 14px;
		}
	}

	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		& .MuiTypography-root {
			font-size: 16px;
		}
	}
`;

const ContentText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;
const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const Text = styled.p`
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	font-size: 12px;
	line-height: 160%;
	letter-spacing: 0.24px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		font-size: 14px;
		letter-spacing: 0.28px;
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
	CustomList,
	CustomListItem,
	CustomListItemIcon,
	CustomDoneIcon,
	CustomListItemText,
	ContentText,
	TextWrapper,
	Text,
};
