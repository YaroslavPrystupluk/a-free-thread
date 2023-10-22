import React from 'react';
import { useSelector } from 'react-redux';
import { StyleTypography } from '../../Theme/HitsTheme';
import {
	StyleCollectionImg,
	StyleCollectionProducts,
	StyleCollectionButton,
	StyleCollectionImageList,
	StyledCollectionWrapper,
	StyleCollectionImageWrapper,
} from '../../Theme/CollectionTheme';
import { RootState, CollectionState } from '../../redux/slices/collectionSlice';
import ProductItem from '../Hits/productItem';
import { Product } from '../../redux/slices/productsSlice';

interface CollectionProps {
	title: keyof CollectionState;
}

const Collection: React.FC<CollectionProps> = ({ title }) => {
	const titleColl = useSelector((state: RootState) => state.collection);
	const collectionsProducts = titleColl[title].collectionProducts;

	const randomCollectionProducts = collectionsProducts
		.slice()
		.sort(() => 0.5 - Math.random())
		.slice(0, 2);

	return (
		<StyledCollectionWrapper>
			<StyleTypography variant="h4" gutterBottom>
				&ldquo;
				{titleColl[title].title}
				&rdquo;
			</StyleTypography>
			<StyleTypography variant="body1" gutterBottom>
				{titleColl[title].description}
			</StyleTypography>
			<StyleCollectionImageWrapper className={`wrapper_${title}`}>
				<StyleCollectionImg
					src={titleColl[title].img}
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
					<StyleCollectionButton>
						<div>перейти до колекції</div>
						<div>&#10230;</div>
					</StyleCollectionButton>
				</StyleCollectionProducts>
			</StyleCollectionImageWrapper>
		</StyledCollectionWrapper>
	);
};

export default Collection;
