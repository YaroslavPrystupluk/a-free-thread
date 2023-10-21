import React from 'react';
import { useSelector } from 'react-redux';
import regions from '../../images/Collections/collection_regions.webp';
import { StyleTypography } from '../../Theme/HitsTheme';
import {
	StyleCollectionImg,
	StyleCollectionProducts,
	StyleCollectionButton,
	StyleCollectionImageList,
	StyledCollectionWrapper,
} from '../../Theme/CollectionTheme';
import { RootState } from '../../redux/slices/collectionSlice';
import ProductItem from '../Hits/productItem';
import { Product } from '../../redux/slices/productsSlice';

interface CollectionProps {
	title: string;
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
				"{titleColl[title].title}"
			</StyleTypography>
			<StyleTypography variant="p" gutterBottom>
				{titleColl[title].description}
			</StyleTypography>
			<StyleCollectionImg src={titleColl[title].img} alt={title} loading="lazy" />
			<StyleCollectionProducts>
				<StyleCollectionImageList style={{ gap: 'auto' }}>
					{randomCollectionProducts.map((item: Product) => (
						<ProductItem item={item} badge="Новинка" key={item.id * Math.random()} />
					))}
				</StyleCollectionImageList>
				<StyleCollectionButton>перейти до колекції &#10230;</StyleCollectionButton>
			</StyleCollectionProducts>
		</StyledCollectionWrapper>
	);
};

export default Collection;
