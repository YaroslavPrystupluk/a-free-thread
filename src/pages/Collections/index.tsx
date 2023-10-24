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
	StyleCollectionImageList,
} from '../../Theme/CollectionTheme';
import { StyleTypography } from '../../Theme/HitsTheme';

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

	console.log(id);

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
		<StyledCollectionWrapper>
			<StyleTypography variant="h4" gutterBottom>
				&ldquo;
				{collectionItem.title}
				&rdquo;
			</StyleTypography>
			<StyleTypography variant="body1" gutterBottom>
				{collectionItem.description}
			</StyleTypography>
			<StyleCollectionImageWrapper className={`wrapper_${id}`}>
				<StyleCollectionImg
					src={collectionItem.img}
					alt={id}
					loading="lazy"
					className={`mainImage_${id}`}
				/>
				<StyleCollectionProducts>
					<StyleCollectionImageList style={{ gap: 'auto' }}>
						{collectionsProducts.map((item: Product) => (
							<ProductItem item={item} badge="Новинка" key={item.id * Math.random()} />
						))}
					</StyleCollectionImageList>
				</StyleCollectionProducts>
			</StyleCollectionImageWrapper>
		</StyledCollectionWrapper>
	);
};

export default CollectionPage;
