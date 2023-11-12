import styled from 'styled-components';
import { Avatar, Card, Typography } from '@mui/material';
import { GiRoundStar } from 'react-icons/gi';

interface StarProps {
	$isEmpty?: boolean;
}

const CustomCard = styled(Card)`
	&.MuiPaper-root.MuiCard-root {
		border-radius: 0;
		display: grid;
		align-items: center;
		grid-template-columns: 20% 1fr;
		grid-template-areas:
			'avatar name'
			'date date'
			'stars stars'
			'body body';
		padding: 16px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		&.MuiPaper-root.MuiCard-root {
			border-radius: 0;
			display: grid;
			grid-template-columns: 8% 1.5fr 1fr 1fr;
			align-items: start;
			grid-template-areas:
				'avatar name stars date'
				'avatar name body body';
			padding: 20px 24px;
		}
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		&.MuiPaper-root.MuiCard-root {
			border-radius: 0;
			display: grid;
			grid-template-columns: 5% 1.5fr 1fr 1fr;
			align-items: start;
			grid-template-areas:
				'avatar name stars date'
				'avatar name body body';
			padding: 20px 40px;
		}
	}
`;

const CustomAvatar = styled(Avatar)`
	&.MuiAvatar-colorDefault {
		background: ${({ theme }) => theme.colorText.fourth};
		grid-area: avatar;
	}
`;

const NameAuthor = styled(Typography)`
	&.MuiTypography-root {
		font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
		font-size: 14px;
		line-height: 140%;
		letter-spacing: 0.28px;
		grid-area: name;
		padding: 0 0 8px 0;
	}

	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		&.MuiTypography-root {
			font-size: 16px;
			line-height: 140%;
			letter-spacing: 0.32px;
			padding: 10px 0 0 0;
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
		padding: 8px 0 0 0;
		grid-area: date;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		&.MuiTypography-root {
			font-size: 14px;
			letter-spacing: 0.28px;
			padding: 0;
			justify-self: end;
			align-self: center;
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

const StarsWrapper = styled.div`
	grid-area: stars;
	padding: 16px 0 20px 0;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		padding: 0;
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
		grid-area: body;
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

export { CustomCard, CustomAvatar, NameAuthor, CommentDate, StarsWrapper, Star, CommentBody };
