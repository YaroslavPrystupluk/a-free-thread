import styled from 'styled-components';
import { Button, TextField } from '@mui/material';

const CustomTextField = styled(TextField)`
	& .Mui-focused {
		fieldset {
			border: none;
		}
	}

	& .MuiOutlinedInput-root {
		border: 1px solid ${({ theme }) => theme.colors.third};
		border-radius: 0;
	}

	& .MuiOutlinedInput-notchedOutline {
		border: none;
	}
`;

const CustomButton = styled(Button)`
	&& {
		border-radius: 0;
		background: ${({ theme }) => theme.colors.third};
		box-shadow: none;
		padding: 8px;
		&:hover {
			background: ${({ theme }) => theme.colors.third};
			box-shadow: none;
		}
	}
`;

export { CustomTextField, CustomButton };
