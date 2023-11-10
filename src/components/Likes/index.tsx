import React, { useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import { StyleHitsWrapper, StyleTypography, StyleImageList } from '../../Theme/LikesTheme';
import LoadingAnimation from '../Loading';
import { RootState } from '../../redux/store/store';
import ProductItem from './productItem';
import { Product } from '../../redux/slices/productsSlice';
import { CollectionItem } from '../../redux/slices/collectionSlice';
import { filterProducts } from '../../pages/Main/getProducts';
import { StyleSquare } from '../../Theme/CollectionPageTheme';

interface LikesProps {
	title: string;
	collection: string;
	badge: string;
	classWrapper: string;
}

const Likes: React.FC<LikesProps> = ({ title, collection, badge, classWrapper }) => {
	const productsArray: Product[] = useSelector(
		(state: RootState) => (state.products.products || []) as Product[],
	);

	const loading: boolean = useSelector((state: RootState) => state.products.isLoading);
	const lastVisitedProducts = useSelector((state: RootState) => state.lastVisited.lastArray);
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
			? collectionsProducts?.slice(-4)
			: collectionsProducts
					?.slice()
					.sort(() => 0.5 - Math.random())
					.slice(0, 4);

	useEffect(() => {
		if (!collectionsProducts?.length) {
			filterProducts('../public/shirts.json', '../public/sleeves.json');
		}
	}, []);

	return (
		<StyleHitsWrapper className={classWrapper}>
			<StyleSquare className={classWrapper}> </StyleSquare>
			<StyleTypography className={classWrapper} variant="h4" gutterBottom>
				{title}
			</StyleTypography>
			{loading && randomProducts ? (
				<LoadingAnimation />
			) : (
				<StyleImageList style={{ gap: 'auto' }}>
					{collection === 'last'
						? lastVisitedProducts
								.slice()
								.reverse()
								.map((item: Product) => (
									<ProductItem item={item} badge={badge} key={item.id * Math.random()} />
								))
						: randomProducts.map((item: Product) => (
								<ProductItem item={item} badge={badge} key={item.id * Math.random()} />
						  ))}
				</StyleImageList>
			)}
		</StyleHitsWrapper>
	);
};

export default memo(Likes);
