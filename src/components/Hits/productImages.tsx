import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { StyleSlideImg } from '../../Theme/HitsTheme';

interface ProductImagesProps {
	img: string;
	alt: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ img, alt }) => {
	const { id } = useParams<{ id: string | undefined }>();
	const location = useLocation();
	const [hasProductPath, setHasProductPath] = useState(false);

	useEffect(() => {
		const path = location.pathname.split('/').filter((crumb) => crumb);

		setHasProductPath(path.includes('product'));
	}, [location.pathname]);

	console.log(id, hasProductPath);

	return <StyleSlideImg src={hasProductPath ? `../${img}` : img} alt={alt} loading="lazy" />;
};

export default ProductImages;
