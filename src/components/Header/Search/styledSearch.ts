import styled from 'styled-components';
import { Box } from '@mui/material';

const SearchWrapper = styled(Box)`
	@media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
			display: none;
`;

export { SearchWrapper };
