import React, { FC } from 'react';
import star from '../../images/icon/star.webp';
import { Container, TitleWrapper, Title, StarIcon, SquareTitle } from '../../Theme/ResultSearch';
import { Product } from '../../redux/slices/productsSlice';
import ProductItem from '../../components/Likes/productItem';
import { StyleImageList } from '../../Theme/LikesTheme';

interface ResultSearchProps {
	valueSearch: string;
	searchResult: Product[];
}

const ResultSearch: FC<ResultSearchProps> = React.memo(({ valueSearch, searchResult }) => {
	return (
		<Container>
			<TitleWrapper>
				<Title>
					<SquareTitle />
					Результати пошуку: &ldquo;{valueSearch}&ldquo;
					<StarIcon src={star} alt="star" />
				</Title>
			</TitleWrapper>
			<StyleImageList>
				{searchResult.map((item: Product) => (
					<ProductItem item={item} key={item.id} />
				))}
			</StyleImageList>
		</Container>
	);
});

export default ResultSearch;
