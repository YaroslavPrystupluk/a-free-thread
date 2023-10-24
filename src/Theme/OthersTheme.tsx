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

const StyleGrid = styled(Grid)({
	display: 'flex',
	flexDirection: 'column!important',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
});

export { StyleGrid, StyleGridWrapper, StyleTextError };
