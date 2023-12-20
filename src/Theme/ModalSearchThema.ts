import styled from 'styled-components';
import { Dialog, Button, Grid, TextField } from '@mui/material';

const CustomDialog = styled(Dialog)`
	& .MuiPaper-root {
		background: rgba(255, 255, 255, 0.9);
	}
`;
const ContainerGrid = styled(Grid)`
	position: relative;
	top: 35%;
`;
const CustomTextField = styled(TextField)`
	& .MuiInputBase-input {
		background: ${({ theme }) => theme.colors.fourth};
		padding: 12px 16px;
		width: 0;
		min-width: 157px;
		font-size: 14px;

		@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
			min-width: 400px;
			font-size: 16px;
		}
		&::placeholder {
			font-size: 14px;
			color: ${({ theme }) => theme.colorText.third};
			font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
			opacity: 1;
			@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
				font-size: 16px;
			}
		}
	}

	& .MuiInputLabel-root.Mui-focused {
		display: none;
		opacity: 0;
	}

	& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused {
		display: none;
	}

	& .MuiOutlinedInput-root {
		font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
		border: 1px solid ${({ theme }) => theme.colors.third};
		border-radius: 0;
	}

	& .MuiOutlinedInput-notchedOutline {
		border: none;
	}
`;

const CustomButton = styled(Button)`
	&& {
		font-family: ${({ theme }) => theme.fontFamily.text}, sans-serif;
		border-radius: 0;
		background: ${({ theme }) => theme.colors.third};
		box-shadow: none;
		padding: 14px;
		font-size: 12px;
		line-height: 152%;
		letter-spacing: 0.24px;

		@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
			font-size: 14px;
			padding: 16px 30px;
			line-height: 121%;
			letter-spacing: 0.28px;
		}

		&:hover {
			background: ${({ theme }) => theme.colors.third};
			box-shadow: none;
		}
	}
`;

export { CustomTextField, CustomButton, ContainerGrid, CustomDialog };
