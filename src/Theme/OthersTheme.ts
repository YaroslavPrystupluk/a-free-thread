import styled from 'styled-components';
import Grid from '@mui/material/Grid';

const StyleTextError = styled('div')({
	color: '#9A9292',
	margin: '20px 0',
});

const StyleGridWrapper = styled(Grid)({
	width: '85%',
	margin: '20px auto',
});

const StyleGrid = styled(Grid)`
	display: flex;
	flex-direction: column !important;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export { StyleGrid, StyleGridWrapper, StyleTextError };
