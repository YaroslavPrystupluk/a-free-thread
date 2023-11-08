import React, { useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import { StyleHitsWrapper, StyleTypography, StyleImageList } from '../../Theme/HitsTheme';
import LoadingAnimation from '../Loading';
import { RootState } from '../../redux/store/store';
import ProductItem from './productItem';
import { Product } from '../../redux/slices/productsSlice';
import { CollectionItem } from '../../redux/slices/collectionSlice';
import { filterProducts } from '../../pages/Main/getProducts';

interface LikesProps {
	title: string;
	collection: string;
	badge: string;
}

const Likes: React.FC<LikesProps> = ({ title, collection, badge }) => {
	const productsArray: Product[] = useSelector(
		(state: RootState) => (state.products.products || []) as Product[],
	);

	const loading: boolean = useSelector((state: RootState) => state.products.isLoading);
	const arrayColl = useSelector((state: RootState) => state.collection) as unknown as Record<
		string,
		CollectionItem
	>;
	const collectionItem = arrayColl[collection] as CollectionItem | undefined;
	const collectionsProducts =
		collection === 'hit' || collection === 'new'
			? productsArray
			: (collectionItem?.collectionProducts as Product[]);
	const randomProducts =
		collection === 'new'
			? collectionsProducts.slice(-4)
			: collectionsProducts
					.slice()
					.sort(() => 0.5 - Math.random())
					.slice(0, 4);

	useEffect(() => {
		if (collectionsProducts.length <= 0) {
			filterProducts('../public/shirts.json');
		}
	}, [collectionsProducts]);

	return (
		<StyleHitsWrapper>
			<StyleTypography variant="h4" gutterBottom>
				{title}
			</StyleTypography>
			{loading && randomProducts ? (
				<LoadingAnimation />
			) : (
				<StyleImageList style={{ gap: 'auto' }}>
					{randomProducts.map((item: Product) => (
						<ProductItem item={item} badge={badge} key={item.id * Math.random()} />
					))}
				</StyleImageList>
			)}
		</StyleHitsWrapper>
	);
};

export default memo(Likes);
