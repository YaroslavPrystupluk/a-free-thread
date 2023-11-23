import React, { useEffect } from 'react';
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
import { filterProducts } from '../Main/getProducts';

const ResultSearch = React.memo(() => {
	const searchProduct: string = useSelector((state: RootState) => state.search.searchProduct || '');
	const searchResult: Product[] = useSelector(
		(state: RootState) => state.search.searchResult || [],
	);
	const аllProductsArray: Product[] = useSelector(
		(state: RootState) => (state.products.products || []) as Product[],
	);

	useEffect(() => {
		if (!аllProductsArray?.length) {
			filterProducts('shirts.json', 'accessories.json');
		}
	}, []);

	return (
		<Container>
			<TitleWrapper>
				<Title className="search">
					<SquareTitle />
					Результати пошуку: &ldquo;{searchProduct}&ldquo;
					<StarIcon src={star} alt="star" />
				</Title>
			</TitleWrapper>
			{searchResult.length > 0 ? (
				<StyleImageList className="collectionPage searchPage" style={{ gap: 'auto' }}>
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
