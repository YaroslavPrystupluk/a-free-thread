import React from "react";
import Carousel from "nuka-carousel";
import {
	StyleImageListItem,
	StyleImageListItemBadge,
	StyleImageListItemBar,
} from "../../Theme/HitsTheme";
import ProductImages from "./productImages";
import { Product } from "../../redux/slices/productsSlice";

interface ProductItemProps {
	item: Product;
	badge: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, badge }) => {
	return (
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
	);
};

export default ProductItem;
