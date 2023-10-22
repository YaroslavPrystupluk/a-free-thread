import React, { FC } from 'react';
import { IconButton } from '@mui/material';
import { SearchWrapper } from './styledSearch';
import search from '../../../images/icon/search.webp';

interface SearchProps {
	handleOpenModal: () => void;
}

const Search: FC<SearchProps> = React.memo(({ handleOpenModal }) => {
	return (
		<SearchWrapper component="div">
			<IconButton onClick={handleOpenModal}>
				<img src={search} alt="icon search" />
			</IconButton>
		</SearchWrapper>
	);
});

export default Search;
