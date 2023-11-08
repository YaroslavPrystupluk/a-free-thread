import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { StyleHitsWrapper, StyleTypography, StyleImageList } from '../../Theme/HitsTheme';
import LoadingAnimation from '../Loading';
import { RootState } from '../../redux/store/store';
import ProductItem from '../Hits/productItem';
import { Product } from '../../redux/slices/productsSlice';
import { CollectionItem } from '../../redux/slices/collectionSlice';
import { filterProducts } from '../../pages/Main/getProducts';

interface LikesProps {
	title: string;
	collection: string;
}

const Likes: React.FC<LikesProps> = ({ title, collection }) => {
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
	const productsArrayAll: Product[] = useSelector(
		(state: RootState) => (state.products.products || []) as Product[],
	);
	const loading: boolean = useSelector((state: RootState) => state.products.isLoading);
	const arrayColl = useSelector((state: RootState) => state.collection) as unknown as Record<
		string,
		CollectionItem
	>;
	const collectionItem = arrayColl[collection] as CollectionItem | undefined;
	const collectionsProducts = collectionItem?.collectionProducts as Product[];
	const randomProducts = collectionsProducts
		.slice()
		.sort(() => 0.5 - Math.random())
		.slice(0, 4);

	useEffect(() => {
		if (collectionsProducts.length <= 0) {
			filterProducts();
		}
	}, [dispatch]);

	return (
		<StyleHitsWrapper>
			<StyleTypography variant="h4" gutterBottom>
				{title}
			</StyleTypography>
			{loading ? (
				<LoadingAnimation />
			) : (
				<StyleImageList style={{ gap: 'auto' }}>
					{randomProducts.map((item: Product) => (
						<ProductItem item={item} badge="Хіт" key={item.id * Math.random()} />
					))}
				</StyleImageList>
			)}
		</StyleHitsWrapper>
	);
};

export default Likes;
