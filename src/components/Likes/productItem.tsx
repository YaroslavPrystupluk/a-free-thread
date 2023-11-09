import React from 'react';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import {
	StyleImageListItem,
	StyleImageListItemBadge,
	StyleImageListItemBar,
} from '../../Theme/LikesTheme';
import ProductImages from './productImages';
import { Product } from '../../redux/slices/productsSlice';

interface ProductItemProps {
	item: Product;
	badge: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, badge }) => {
	return (
		<StyleImageListItem key={item.id}>
			<Carousel renderCenterLeftControls={null} renderCenterRightControls={null}>
				{item.imageUrls.map((imageUrls: string) => (
					<ProductImages img={imageUrls} key={item.id} alt={item.name} />
				))}
			</Carousel>
			<Link to={`/product/${item.id}`} style={{ color: 'black', textDecoration: 'none' }}>
				<StyleImageListItemBar
					title={item.price}
					subtitle={<span>{item.name}</span>}
					position="below"
				/>
			</Link>
			<StyleImageListItemBadge className={badge} title={badge} position="top" />
		</StyleImageListItem>
	);
};

export default ProductItem;
