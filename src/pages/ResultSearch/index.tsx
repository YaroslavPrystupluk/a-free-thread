import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
	const { t } = useTranslation();
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
					{t('search.page.title')} &ldquo;{searchProduct}&ldquo;
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
					<TitleNotFound>{t('search.page.error')}</TitleNotFound>
					<SubTitleNotFound>{t('search.page.error.text')}</SubTitleNotFound>
				</NotFoundWrapper>
			)}
		</Container>
	);
});

export default ResultSearch;
