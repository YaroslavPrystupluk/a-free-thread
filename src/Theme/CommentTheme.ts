import styled from 'styled-components';
import { Avatar, Card, Typography } from '@mui/material';
import { GiRoundStar } from 'react-icons/gi';

interface StarProps {
	$isEmpty?: boolean;
}

const CustomCard = styled(Card)`
	&.MuiPaper-root.MuiCard-root {
		border-radius: 0;
	}
	display: grid;
	padding: 16px;
`;

const CustomAvatar = styled(Avatar)`
	&.MuiAvatar-colorDefault {
		background: ${({ theme }) => theme.colorText.fourth};
	}
`;

const NameAuthor = styled(Typography)`
	&.MuiTypography-root {
		font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
		font-size: 14px;
		line-height: 140%;
		letter-spacing: 0.28px;
	}

	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		&.MuiTypography-root {
			font-size: 16px;
			line-height: 140%;
			letter-spacing: 0.32px;
		}
	}

	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		&.MuiTypography-root {
			font-size: 18px;
			line-height: 140%;
			letter-spacing: 0.36px;
		}
	}
`;

const CommentDate = styled(Typography)`
	&.MuiTypography-root {
		font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
		color: rgba(71, 33, 36, 0.5);
		font-size: 12px;
		line-height: 140%;
		letter-spacing: 0.24px;
		padding: 8px 0 16px 0;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		&.MuiTypography-root {
			font-size: 14px;
			letter-spacing: 0.28px;
			padding: 0;
		}
	}

	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		&.MuiTypography-root {
			font-size: 16px;
			letter-spacing: 0.32px;
			padding: 0;
		}
	}
`;

const Star = styled(GiRoundStar)<StarProps>`
	font-size: 28px;
	padding: 0 8px 0 0;
	color: ${(props) => (props.$isEmpty ? '#e6e6e6' : props.theme.colors.star)};
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		font-size: 32px;
	}
`;

const CommentBody = styled(Typography)`
	&.MuiTypography-root {
		font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
		font-size: 12px;
		line-height: 20px;
		letter-spacing: 0.24px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		&.MuiTypography-root {
			font-size: 14px;
			line-height: 160%;
			letter-spacing: 0.28px;
		}
	}

	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		&.MuiTypography-root {
			font-size: 16px;
			line-height: 26px;
			letter-spacing: 0.32px;
		}
	}
`;

export { CustomCard, CustomAvatar, NameAuthor, CommentDate, Star, CommentBody };
