import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import regions from "../../images/Collections/collection_regions.webp";
import { StyledContainerWrapper, StyleTypography, StyleImageList } from "../../Theme/HitsTheme";
import { StyleCollectionImg } from "../../Theme/CollectionTheme";
import { selectCollection } from "../../redux/slices/collectionSlice";
import { RootState } from "../../redux/selectors";
import ProductItem from "../Hits/productItem";

interface CollectionProps {
	title: string;
}
const Collection: React.FC<CollectionProps> = ({ title }) => {
	const titleColl = useSelector((state: RootState) => state.collection.title);
	const collectionsProducts = useSelector(
		(state: RootState) => state.collection.collectionProducts,
	);
	const dispatch = useDispatch();

	const randomCollectionProducts = collectionsProducts
				.slice()
				.sort(() => 0.5 - Math.random())
				.slice(0, 2);

	useEffect(() => {
		dispatch(selectCollection(title));
	  }, [dispatch, title]);

	return (
		<StyledContainerWrapper>
			<StyleTypography variant="h4" gutterBottom>
				{titleColl}
			</StyleTypography>
			<StyleCollectionImg src={regions} alt={title} loading="lazy" />
			<StyleImageList style={{ gap: 'auto' }}>
				{randomCollectionProducts.map((item: Product) => (
					<ProductItem item={item} badge={"Новинка"} key={item.id * Math.random()} />
				))}
			</StyleImageList>
		</StyledContainerWrapper>
	)
};

export default Collection;
