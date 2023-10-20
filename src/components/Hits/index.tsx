import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'nuka-carousel';
import { Product, getProductsAsync } from '../../redux/slices/productsSlice';
import { RootState } from '../../redux/store/store';
import ProductItem from '../ex';
import {
	StyleImageList,
	StyleImageListItemBar,
	StyleImageListItem,
	StyleTypography,
	StyleImageListItemBadge,
	StyledContainerWrapper,
} from '../../Theme/HitsTheme';

interface HitsProps {
	badge: string;
}

const Hits: React.FC<HitsProps> = ({ badge }) => {
	const productsArray = useSelector((state: RootState) => state.products.products || []);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsAsync('shirts'));
	}, [dispatch]);

	const randomProducts =
		badge === 'Хіт'
			? productsArray
					.slice()
					.sort(() => 0.5 - Math.random())
					.slice(0, 4)
			: productsArray.slice(-4);

	const titleList = badge === 'Хіт' ? 'популярні товари' : 'нові надходження';

	return (
		<StyledContainerWrapper>
			<StyleTypography variant="h4" gutterBottom>
				{titleList}
			</StyleTypography>
			<StyleImageList style={{ gap: 'auto' }}>
				{randomProducts.map((item: Product) => (
					<StyleImageListItem key={item.id}>
						<Carousel renderCenterLeftControls={false} renderCenterRightControls={false}>
							{item.imageUrls.map((imageUrls: string[]) => (
								<ProductItem img={imageUrls} key={item.id * Math.random()} alt={item.name} />
							))}
						</Carousel>
						<StyleImageListItemBar
							title={item.price}
							subtitle={<span>{item.name}</span>}
							position="below"
						/>
						<StyleImageListItemBadge title={badge} position="top" />
					</StyleImageListItem>
				))}
			</StyleImageList>
		</StyledContainerWrapper>
	);
};

export default Hits;
