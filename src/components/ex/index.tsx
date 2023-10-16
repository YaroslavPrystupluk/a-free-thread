import React from "react";
import { StyleSlideImg } from "../../Theme/HitsTheme";

interface ProductItemProps {
	img: string;
	alt: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ img, alt }) => {
	return <StyleSlideImg src={img} alt={alt} loading="lazy" />;
};

export default ProductItem;
