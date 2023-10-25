/* eslint-disable max-len */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import { filterProducts } from '../Main/getProducts';
import { RootState } from '../../redux/store/store';
import { Product } from '../../redux/slices/productsSlice';
import { CollectionItem, CollectionState } from '../../redux/slices/collectionSlice';
import LoadingAnimation from '../../components/Loading';
import ProductItem from '../../components/Hits/productItem';
import PageNotFound from '../NotFoundPage';

import {
	StyledCollectionWrapper,
	StyleCollectionImageWrapper,
	StyleCollectionImg,
	StyleCollectionProducts,
} from '../../Theme/CollectionTheme';
import { StyleTypography, StyleImageList } from '../../Theme/HitsTheme';
import { StyleCollectionPageMain, StyleSquare, StyleStar } from '../../Theme/OthersTheme';

const CollectionPage = () => {
	const { id } = useParams<{ id: string | undefined }>();
	const idColl = useSelector((state: RootState) => state.collection) as CollectionState;
	const productsArrayAll: Product[] = useSelector(
		(state: RootState) => (state.products.products || []) as Product[],
	);
	const loadingCollection: boolean = useSelector(
		(state: RootState) => state.collection.isLoadingCollection,
	);
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
	const collectionItem = idColl[id] as CollectionItem;

	const collectionsProducts = collectionItem?.collectionProducts as Product[];

	useEffect(() => {
		if (productsArrayAll.length <= 0) {
			filterProducts();
		}
	}, [dispatch]);

	if (!id || !collectionItem) {
		return <PageNotFound />;
	}

	return loadingCollection ? (
		<LoadingAnimation />
	) : (
		<StyledCollectionWrapper className="collectionPage">
			<StyleTypography variant="h4" className="collectionPageTitle" gutterBottom>
				<StyleSquare> </StyleSquare>
				&ldquo;
				{collectionItem.title}
				&rdquo;
				<StyleStar>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						className="collectionPageStar"
					>
						<path
							d="M7.2 16H8.8C8.8 12.0296 12.0304 8.8 16 8.8V7.2C12.0304 7.2 8.8 3.9704 8.8 0H7.2C7.2 3.9704 3.9696 7.2 0 7.2V8.8C3.9696 8.8 7.2 12.0296 7.2 16Z"
							fill="#C77A54"
						/>
					</svg>
				</StyleStar>
			</StyleTypography>
			<StyleCollectionImageWrapper className="collectionPageMain">
				<StyleCollectionImg
					src={collectionItem.img}
					alt={id}
					loading="lazy"
					className="mainImage_page"
				/>
				<StyleCollectionPageMain>
					<StyleTypography variant="body1" className="collectionPageSpan" gutterBottom>
						{collectionItem.description}
					</StyleTypography>
				</StyleCollectionPageMain>
			</StyleCollectionImageWrapper>
			<StyleCollectionProducts>
				<StyleImageList style={{ gap: 'auto' }}>
					{collectionsProducts.map((item: Product) => (
						<ProductItem item={item} badge="Новинка" key={item.id * Math.random()} />
					))}
				</StyleImageList>
				<StyleImageList style={{ gap: 'auto' }}>
					{collectionsProducts.map((item: Product) => (
						<ProductItem item={item} badge="Новинка" key={item.id * Math.random()} />
					))}
				</StyleImageList>
				<StyleImageList style={{ gap: 'auto' }}>
					{collectionsProducts.map((item: Product) => (
						<ProductItem item={item} badge="Новинка" key={item.id * Math.random()} />
					))}
				</StyleImageList>
				<StyleImageList style={{ gap: 'auto' }}>
					{collectionsProducts.map((item: Product) => (
						<ProductItem item={item} badge="Новинка" key={item.id * Math.random()} />
					))}
				</StyleImageList>
				<StyleImageList style={{ gap: 'auto' }}>
					{collectionsProducts.map((item: Product) => (
						<ProductItem item={item} badge="Новинка" key={item.id * Math.random()} />
					))}
				</StyleImageList>
			</StyleCollectionProducts>
		</StyledCollectionWrapper>
	);
};

export default CollectionPage;
