import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyleTypography } from '../../Theme/LikesTheme';
import {
	StyleCollectionImg,
	StyleCollectionProducts,
	StyleCollectionButton,
	StyleCollectionImageList,
	StyledCollectionWrapper,
	StyleCollectionImageWrapper,
} from '../../Theme/CollectionTheme';
import { CollectionState, CollectionItem } from '../../redux/slices/collectionSlice';
import { RootState } from '../../redux/store/store';
import ProductItem from '../Likes/productItem';
import { Product } from '../../redux/slices/productsSlice';
import LoadingAnimation from '../Loading';
import { RightArrowWhite } from './arrows';

interface CollectionProps {
	title: keyof CollectionState;
}

const Collection: React.FC<CollectionProps> = ({ title }) => {
	const titleColl = useSelector((state: RootState) => state.collection) as CollectionState;
	const loadingCollection: boolean = useSelector(
		(state: RootState) => state.collection.isLoadingCollection,
	);
	const loading: boolean = useSelector((state: RootState) => state.products.isLoading);

	const collectionItem = titleColl[title] as CollectionItem;

	const collectionsProducts = collectionItem.collectionProducts as Product[];

	const randomCollectionProducts = useMemo(() => {
		return collectionsProducts
			.slice()
			.sort(() => 0.5 - Math.random())
			.slice(0, 2);
	}, [collectionsProducts]);

	return loadingCollection || loading ? (
		<LoadingAnimation />
	) : (
		<StyledCollectionWrapper>
			<StyleTypography variant="h4" gutterBottom>
				&ldquo;
				{collectionItem.title}
				&rdquo;
			</StyleTypography>
			<StyleTypography variant="body1" gutterBottom>
				{collectionItem.description}
			</StyleTypography>
			<StyleCollectionImageWrapper className={`wrapper_${title}`}>
				<StyleCollectionImg
					src={collectionItem.img}
					alt={title}
					loading="lazy"
					className={`mainImage_${title}`}
				/>
				<StyleCollectionProducts>
					<StyleCollectionImageList style={{ gap: 'auto' }}>
						{randomCollectionProducts.map((item: Product) => (
							<ProductItem item={item} badge="Новинка" key={item.id * Math.random()} />
						))}
					</StyleCollectionImageList>
					<Link to={`/${title}`} style={{ textDecoration: 'none' }}>
						<StyleCollectionButton>
							<span style={{ lineHeight: '1.2' }}>перейти до колекції</span>
							<div>{RightArrowWhite()}</div>
						</StyleCollectionButton>
					</Link>
				</StyleCollectionProducts>
			</StyleCollectionImageWrapper>
		</StyledCollectionWrapper>
	);
};

export default Collection;
