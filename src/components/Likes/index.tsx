import React from 'react';
import { useSelector } from 'react-redux';
import { StyleHitsWrapper, StyleTypography, StyleImageList } from '../../Theme/HitsTheme';
import LoadingAnimation from '../Loading';
import { RootState } from '../../redux/store/store';
import ProductItem from '../Hits/productItem';
import { Product } from '../../redux/slices/productsSlice';
import { CollectionState, CollectionItem } from '../../redux/slices/collectionSlice';

interface LikesProps {
	title: string;
	collection: string;
}

const Likes: React.FC<LikesProps> = ({ title, collection }) => {
	const loading: boolean = useSelector((state: RootState) => state.products.isLoading);
	const arrayColl = useSelector((state: RootState) => state.collection) as CollectionState;
	const collectionItem = arrayColl[collection] as CollectionItem | undefined;
	const collectionsProducts = collectionItem?.collectionProducts as Product[];
	const randomProducts = collectionsProducts
		.slice()
		.sort(() => 0.5 - Math.random())
		.slice(0, 4);

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
