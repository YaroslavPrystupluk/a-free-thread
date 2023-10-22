import React from 'react';
import { useSelector } from 'react-redux';
import LoadingAnimation from '../Loading';
import ProductItem from './productItem';
import { Product } from '../../redux/slices/productsSlice';
import { RootState } from '../../redux/slices/collectionSlice';
import { StyleHitsWrapper, StyleImageList, StyleTypography } from '../../Theme/HitsTheme';

interface HitsProps {
	badge: string;
}

const Hits: React.FC<HitsProps> = ({ badge }) => {
	const productsArray: Product[] = useSelector((state: RootState) => state.products.products || []);
	const loading: boolean = useSelector((state: RootState) => state.products.isLoading);

	const randomProducts =
		badge === 'Хіт'
			? productsArray
					.slice()
					.sort(() => 0.5 - Math.random())
					.slice(0, 4)
			: productsArray.slice(-4);

	const titleList = badge === 'Хіт' ? 'популярні товари' : 'нові надходження';

	return (
		<StyleHitsWrapper>
			<StyleTypography variant="h4" gutterBottom>
				{titleList}
			</StyleTypography>
			{loading ? (
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

export default Hits;
