import styled from 'styled-components';
import { Card, Typography } from '@mui/material';

const CustomCard = styled(Card)`
	max-width: 126px;

	&& {
		border: none;
		border-radius: 0;
		box-shadow:
			0 0 1px 0 rgba(0, 0, 0, 0.04),
			0 2px 2px 0 rgba(0, 0, 0, 0.04),
			0 4px 2px 0 rgba(0, 0, 0, 0.02),
			0 6px 3px 0 rgba(0, 0, 0, 0.01),
			0 10px 3px 0 rgba(0, 0, 0, 0);
	}

	&& .MuiCardContent-root {
		padding: 8px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 220px;
		&& .MuiCardContent-root {
			padding: 10px;
		}
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		max-width: 360px;
		&& .MuiCardContent-root {
			padding: 16px;
		}
	}
`;

const Front = styled.div`
	overflow: hidden;
	backface-visibility: hidden;
	transition: transform 1s linear;
	transform: perspective(600px) rotateY(0deg);
`;

const Back = styled.div`
	width: 100%;
	position: absolute;
	padding: 20px 10px;
	top: 0;
	height: 100%;
	background: ${({ theme }) => theme.colors.primary};
	overflow: auto;
	backface-visibility: hidden;
	transition: transform 1s linear;
	transform: perspective(600px) rotateY(180deg);
`;

const CardHeader = styled.div`
	position: relative;
	&:hover > ${Front} {
		transform: perspective(600px) rotateY(-180deg);
	}
	&:hover > ${Back} {
		transform: perspective(600px) rotateY(0deg);
	}
`;

const BackContent = styled.p`
	padding: 12px 10px;
	font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
	font-size: 10px;
	line-height: 147%;
	letter-spacing: 0.2px;
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		font-size: 16px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		font-size: 24px;
	}
`;

const CardTitle = styled(Typography)`
	&.MuiTypography-root {
		font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
		color: ${({ theme }) => theme.colorText.third};
		font-size: 10px;
		text-transform: uppercase;
	}

	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    &.MuiTypography-root {
      font-size: 16px;
    }
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
    &.MuiTypography-root {
      font-size: 24px;
    }
	}
`;

const CardSubTitle = styled(Typography)`
	&.MuiTypography-root {
    font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
    color: rgba(71, 33, 36, 0.56);
    font-size: 11px;
	}
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    &.MuiTypography-root {
      font-size: 14px;
    }
    @media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
      &.MuiTypography-root {
        font-size: 16px;
      }
`;

export { CustomCard, CardHeader, Front, Back, BackContent, CardTitle, CardSubTitle };
