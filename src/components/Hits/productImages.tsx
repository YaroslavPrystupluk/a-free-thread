import React from 'react';
import { StyleSlideImg } from '../../Theme/HitsTheme';

interface ProductImagesProps {
	img: string;
	alt: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ img, alt }) => {
	return <StyleSlideImg src={img} alt={alt} loading="lazy" />;
};

export default ProductImages;
