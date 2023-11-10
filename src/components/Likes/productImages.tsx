import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyleSlideImg } from '../../Theme/LikesTheme';

interface ProductImagesProps {
	img: string;
	alt: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ img, alt }) => {
	const location = useLocation();
	const hasProductPath = location.pathname.includes('product');

	return <StyleSlideImg src={hasProductPath ? `../${img}` : img} alt={alt} loading="lazy" />;
};

export default ProductImages;
