import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { Typography } from '@mui/material';
import { RootState } from '../../redux/store/store';
import { Product } from '../../redux/slices/productsSlice';
import { getProduct } from '../../redux/slices/productSlice';
import LoadingAnimation from '../../components/Loading';
import { ArrowHide, ArrowShow } from '../../components/Collection/arrows';
import Likes from '../../components/Likes';
import { addProduct } from '../../redux/slices/lastVisitedSlice';
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
	StyleProductMain,
} from '../../Theme/ProductPageTheme';

type DescriptionsOpen = {
	description: boolean;
	recommendations: boolean;
	deliveryAndPayment: boolean;
	exchangeAndReturn: boolean;
};

const ProductPage: React.FC = () => {
	const { id } = useParams<{ id: string | undefined }>();
	const { t } = useTranslation();
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
	const productsArray: Product[] = useSelector(
		(state: RootState) => (state.products.products || []) as Product[],
	);
	const languageState = useSelector((state: RootState) => state.products.language);
	const productItem: Product = useSelector(
		(state: RootState) => state.product.product || {},
	) as Product;
	const productNotFound: boolean = useSelector((state: RootState) => state.product.productNotFound);
	const loadingProduct: boolean = useSelector((state: RootState) => state.product.isLoading);
	const lastVisitedProducts = useSelector((state: RootState) => state.lastVisited.lastArray);
	const imgArray = productItem?.imageUrls || [];
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
			setMainImage(`../${imgArray[0]}`);
		}
	}, [imgArray]);

	useEffect(() => {
		const fetchData = async () => {
			if (idProduct !== undefined) {
				await dispatch(getProduct(idProduct));
			}

			if (productItem && Object.keys(productItem).length > 0) {
				await dispatch(addProduct(productItem));
			}
		};

		fetchData();
	}, [idProduct, productItem, productsArray, languageState]);

	if (productNotFound) {
		return (
			<>
				<StyleProductNotFound>{t('product.error')}</StyleProductNotFound>
				<Likes classWrapper="main" title={t('likes.title.hit')} collection="hit" badge="Хіт" />
			</>
		);
	}

	return Object.keys(productItem).length === 0 || loadingProduct ? (
		<LoadingAnimation />
	) : (
		<StyleProductWrapper>
			<StyleProductMain>
				<StyleProductGallery>
					<StyleProductThumbnails>
						{imgArray.map((thumbnail, index) => (
							<button
								type="button"
								key={`productItem.name_${index + 1}`}
								onClick={() => handleThumbnailClick(`../${thumbnail}`, index)}
								className={index === selectedButtonIndex ? 'selected' : ''}
							>
								<img src={`../${thumbnail}`} alt={`${index + 1}`} />
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
						<Typography
							variant="h4"
							component="h4"
							style={{ cursor: 'pointer' }}
							onClick={() => toggleDescription('description')}
						>
							{t('product.description.button')}
							<button type="button">
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
						<Typography
							variant="h4"
							component="h4"
							style={{ cursor: 'pointer' }}
							onClick={() => toggleDescription('recommendations')}
						>
							{t('product.recommendations.button')}
							<button type="button">
								{descriptionsOpen.recommendations && <ArrowShow />}
								{!descriptionsOpen.recommendations && <ArrowHide />}
							</button>
						</Typography>
						{descriptionsOpen.recommendations && (
							<Typography variant="body2" component="p" className="product_recommendations">
								{productItem.recommendations}
							</Typography>
						)}
					</StyleProductDescriptionContainer>
					<StyleProductDescriptionContainer>
						<Typography
							variant="h4"
							component="h4"
							style={{ cursor: 'pointer' }}
							onClick={() => toggleDescription('deliveryAndPayment')}
						>
							{t('product.deliveryAndPayment.button')}
							<button type="button">
								{descriptionsOpen.deliveryAndPayment && <ArrowShow />}
								{!descriptionsOpen.deliveryAndPayment && <ArrowHide />}
							</button>
						</Typography>
						{descriptionsOpen.deliveryAndPayment && (
							<Typography variant="body2" component="p">
								{t('product.deliveryAndPayment.text')}
							</Typography>
						)}
					</StyleProductDescriptionContainer>
					<StyleProductDescriptionContainer>
						<Typography
							variant="h4"
							component="h4"
							style={{ cursor: 'pointer' }}
							onClick={() => toggleDescription('exchangeAndReturn')}
						>
							{t('product.exchangeAndReturn.button')}
							<button type="button">
								{descriptionsOpen.exchangeAndReturn && <ArrowShow />}
								{!descriptionsOpen.exchangeAndReturn && <ArrowHide />}
							</button>
						</Typography>
						{descriptionsOpen.exchangeAndReturn && (
							<Typography variant="body2" component="p">
								{t('product.exchangeAndReturn.text')}
							</Typography>
						)}
					</StyleProductDescriptionContainer>
				</StyleProductDescription>
			</StyleProductMain>
			<Likes
				classWrapper="product"
				title={t('likes.title.like')}
				collection={productItem.collection}
				badge={t('likes.badge.hit')}
			/>
			{lastVisitedProducts.length < 4 ? (
				<Likes
					classWrapper="product"
					title={t('likes.title.hit')}
					collection="hit"
					badge={t('likes.badge.hit')}
				/>
			) : (
				<Likes
					classWrapper="product"
					title={t('likes.title.last')}
					collection="last"
					badge="last"
				/>
			)}
		</StyleProductWrapper>
	);
};

export default ProductPage;
