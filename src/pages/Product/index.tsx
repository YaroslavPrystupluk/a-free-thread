import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store/store';
import { Product } from '../../redux/slices/productsSlice';
import { getProduct } from '../../redux/slices/productSlice';
import { StyleCollectionImg } from '../../Theme/CollectionTheme';
import LoadingAnimation from '../../components/Loading';

const ProductPage: React.FC = () => {
	const { id } = useParams<{ id: string | undefined }>();
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
	const productItem: Product = useSelector(
		(state: RootState) => state.product.product || {},
	) as Product;
	const productNotFound: boolean = useSelector((state: RootState) => state.product.productNotFound);
	const loadingProduct: boolean = useSelector((state: RootState) => state.product.isLoading);

	const idProduct: number | undefined = id ? parseInt(id, 10) : undefined;

	useEffect(() => {
		if (idProduct !== undefined) {
			dispatch(getProduct(idProduct));
		}
	}, [dispatch, idProduct]);
	if (productNotFound) {
		return (
			<>
				<div>У нашій базі даних такого продукту немає.</div>
				{/* <Hits badge="Новинка" /> */}
			</>
		);
	}

	return Object.keys(productItem).length === 0 || loadingProduct ? (
		<LoadingAnimation />
	) : (
		<StyleCollectionImg
			src={`../${productItem.imageUrls[0]}`}
			alt={productItem.name}
			loading="lazy"
			className="mainImage_page"
		/>
	);
};

export default ProductPage;
