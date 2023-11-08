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
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
		max-width: 220px;
	}
	@media (min-width: ${({ theme }) => `${theme.breakpoints.xl}px`}) {
		max-width: 360px;
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

export { CustomCard, CardTitle, CardSubTitle };
