import React from 'react';
import { useSelector } from 'react-redux';
import star from '../../images/icon/star.webp';
import {
	Container,
	TitleWrapper,
	Title,
	StarIcon,
	SquareTitle,
	NotFoundWrapper,
	TitleNotFound,
	SubTitleNotFound,
} from '../../Theme/ResultSearchTheme';
import { Product } from '../../redux/slices/productsSlice';
import ProductItem from '../../components/Likes/productItem';
import { StyleImageList } from '../../Theme/LikesTheme';
import { RootState } from '../../redux/store/store';

const ResultSearch = React.memo(() => {
	const searchProduct: string = useSelector((state: RootState) => state.search.searchProduct || '');
	const searchResult: Product[] = useSelector(
		(state: RootState) => state.search.searchResult || [],
	);

	return (
		<Container>
			<TitleWrapper>
				<Title>
					<SquareTitle />
					Результати пошуку: &ldquo;{searchProduct}&ldquo;
					<StarIcon src={star} alt="star" />
				</Title>
			</TitleWrapper>
			{searchResult.length > 0 ? (
				<StyleImageList className="collectionPage" style={{ gap: 'auto' }}>
					{searchResult.map((item: Product) => (
						<ProductItem badge="last" item={item} key={item.id} />
					))}
				</StyleImageList>
			) : (
				<NotFoundWrapper>
					<TitleNotFound>За даними параметрами, на жаль, нічого не знайдено</TitleNotFound>
					<SubTitleNotFound>
						Перейдіть до каталогу, щоб обрати бажаний продукт або спробуйте ще.
					</SubTitleNotFound>
				</NotFoundWrapper>
			)}
		</Container>
	);
});

export default ResultSearch;
