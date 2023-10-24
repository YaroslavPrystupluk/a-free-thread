import React, { FC } from 'react';
import { Box, IconButton } from '@mui/material';
import search from '../../../images/icon/search.webp';

interface SearchProps {
	handleOpenModal: () => void;
}

const Search: FC<SearchProps> = React.memo(({ handleOpenModal }) => {
	return (
		<Box component="div">
			<IconButton onClick={handleOpenModal}>
				<img src={search} alt="icon search" />
			</IconButton>
		</Box>
	);
});

export default Search;
