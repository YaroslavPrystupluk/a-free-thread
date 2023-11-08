import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { Typography } from '@mui/material';
import { RootState } from '../../redux/store/store';
import { Product } from '../../redux/slices/productsSlice';
import { getProduct } from '../../redux/slices/productSlice';
import LoadingAnimation from '../../components/Loading';
import { ArrowHide, ArrowShow } from '../../components/Collection/arrows';
import Likes from '../../components/Likes';
import {
	StyleProductDescription,
	StyleProductGallery,
	StyleProductItemBar,
	StyleProductMainImg,
	StyleProductNotFound,
	StyleProductSize,
	StyleProductThumbnails,
	StyleProductWrapper,
	StyleProductDescriptionContainer,
} from '../../Theme/ProductPageTheme';

type DescriptionsOpen = {
	description: boolean;
	recommendations: boolean;
	deliveryAndPayment: boolean;
	exchangeAndReturn: boolean;
};

const ProductPage: React.FC = () => {
	const { id } = useParams<{ id: string | undefined }>();
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
	const productItem: Product = useSelector(
		(state: RootState) => state.product.product || {},
	) as Product;
	const productNotFound: boolean = useSelector((state: RootState) => state.product.productNotFound);
	const loadingProduct: boolean = useSelector((state: RootState) => state.product.isLoading);
	const imgArray = (productItem?.imageUrls || []).map((path) => `../${path}`);
	const productSizes = productItem?.size || [];
	const [mainImage, setMainImage] = useState('');
	const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
	const idProduct: number | undefined = id ? parseInt(id, 10) : undefined;
	const handleThumbnailClick = (image: string, index: number) => {
		setMainImage(image);
		setSelectedButtonIndex(index);
	};

	const [descriptionsOpen, setDescriptionsOpen] = useState<DescriptionsOpen>({
		description: false,
		recommendations: false,
		deliveryAndPayment: false,
		exchangeAndReturn: false,
	});

	const toggleDescription = (descriptionType: keyof typeof descriptionsOpen) => {
		setDescriptionsOpen((prevOpen) => ({
			...prevOpen,
			[descriptionType]: !prevOpen[descriptionType],
		}));
	};

	useEffect(() => {
		if (imgArray.length > 0) {
			setMainImage(imgArray[0]);
		}
	}, [imgArray]);

	useEffect(() => {
		if (idProduct !== undefined) {
			dispatch(getProduct(idProduct));
		}
	}, [dispatch, idProduct]);

	if (productNotFound) {
		return (
			<>
				<StyleProductNotFound>У нашій базі даних такого продукту немає.</StyleProductNotFound>
				{/* <Hits badge="Новинка" /> */}
			</>
		);
	}

	return Object.keys(productItem).length === 0 || loadingProduct ? (
		<LoadingAnimation />
	) : (
		<StyleProductWrapper>
			<StyleProductGallery>
				<StyleProductThumbnails>
					{imgArray.map((thumbnail, index) => (
						<button
							type="button"
							key={`productItem.name_${index + 1}`}
							onClick={() => handleThumbnailClick(thumbnail, index)}
							className={index === selectedButtonIndex ? 'selected' : ''}
						>
							<img src={thumbnail} alt={`Превью ${index + 1}`} />
						</button>
					))}
				</StyleProductThumbnails>
				<StyleProductMainImg
					src={mainImage}
					alt={productItem.name}
					loading="lazy"
					className="mainImage_page"
				/>
			</StyleProductGallery>
			<StyleProductDescription>
				<StyleProductItemBar
					className="product"
					subtitle={<span>{productItem.name}</span>}
					title={productItem.price}
					position="below"
				/>
				<StyleProductSize>
					{productSizes.map((size) => (
						<span key={`productItem.name_${size}`}>{size}</span>
					))}
				</StyleProductSize>
				<StyleProductDescriptionContainer>
					<Typography variant="h4" component="h4">
						опис
						<button type="button" onClick={() => toggleDescription('description')}>
							{descriptionsOpen.description && <ArrowShow />}
							{!descriptionsOpen.description && <ArrowHide />}
						</button>
					</Typography>
					{descriptionsOpen.description && (
						<Typography variant="body2" component="p">
							{productItem.description}
						</Typography>
					)}
				</StyleProductDescriptionContainer>
				<StyleProductDescriptionContainer>
					<Typography variant="h4" component="h4">
						рекомендації по догляду
						<button type="button" onClick={() => toggleDescription('recommendations')}>
							{descriptionsOpen.recommendations && <ArrowShow />}
							{!descriptionsOpen.recommendations && <ArrowHide />}
						</button>
					</Typography>
					{descriptionsOpen.recommendations && (
						<Typography variant="body2" component="p">
							{productItem.recommendations}
						</Typography>
					)}
				</StyleProductDescriptionContainer>
				<StyleProductDescriptionContainer>
					<Typography variant="h4" component="h4">
						доставка і оплата
						<button type="button" onClick={() => toggleDescription('deliveryAndPayment')}>
							{descriptionsOpen.deliveryAndPayment && <ArrowShow />}
							{!descriptionsOpen.deliveryAndPayment && <ArrowHide />}
						</button>
					</Typography>
					{descriptionsOpen.deliveryAndPayment && (
						<Typography variant="body2" component="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
						</Typography>
					)}
				</StyleProductDescriptionContainer>
				<StyleProductDescriptionContainer>
					<Typography variant="h4" component="h4">
						обмін і повернення
						<button type="button" onClick={() => toggleDescription('exchangeAndReturn')}>
							{descriptionsOpen.exchangeAndReturn && <ArrowShow />}
							{!descriptionsOpen.exchangeAndReturn && <ArrowHide />}
						</button>
					</Typography>
					{descriptionsOpen.exchangeAndReturn && (
						<Typography variant="body2" component="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
						</Typography>
					)}
				</StyleProductDescriptionContainer>
			</StyleProductDescription>
			<Likes title="вам може сподобатись" collection={productItem.collection} badge="Хіт" />
		</StyleProductWrapper>
	);
};

export default ProductPage;
