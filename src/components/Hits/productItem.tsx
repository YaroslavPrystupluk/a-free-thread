import React from 'react';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store/store';
import {
	StyleImageListItem,
	StyleImageListItemBadge,
	StyleImageListItemBar,
} from '../../Theme/HitsTheme';
import ProductImages from './productImages';
import { Product } from '../../redux/slices/productsSlice';
import { getProduct } from '../../redux/slices/productSlice';

interface ProductItemProps {
	item: Product;
	badge: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, badge }) => {
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

	const handleClick = (idItem: number) => {
		dispatch(getProduct(idItem));
		console.log(idItem);
	};

	return (
		<Link
			to={`/product/${item.id}`}
			style={{ color: 'black', textDecoration: 'none' }}
			onClick={() => {
				handleClick(item.id);
			}}
		>
			<StyleImageListItem key={item.id}>
				<Carousel renderCenterLeftControls={null} renderCenterRightControls={null}>
					{item.imageUrls.map((imageUrls: string) => (
						<ProductImages img={imageUrls} key={item.id * Math.random()} alt={item.name} />
					))}
				</Carousel>
				<StyleImageListItemBar
					title={item.price}
					subtitle={<span>{item.name}</span>}
					position="below"
				/>
				<StyleImageListItemBadge title={badge} position="top" />
			</StyleImageListItem>
		</Link>
	);
};

export default ProductItem;
