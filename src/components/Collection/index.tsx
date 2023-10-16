import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import regions from "../../images/Collections/collection_regions.webp";
import { StyledContainerWrapper, StyleTypography, StyleSlideImg } from "../../Theme/HitsTheme";
import { StyleCollectionImg } from "../../Theme/CollectionTheme";
import { printCollectionCard } from "../../redux/slices/collectionSlice";
import { RootState } from "../../redux/selectors";

interface CollectionProps {
	title: string;
}
const Collection: React.FC<CollectionProps> = ({ title }) => {
	const titleColl = useSelector((state: RootState) => state.collection.title);
	const dispatch = useDispatch();
	const titleCollection = title === "regions" ? "regions" : "nnn";

	// useEffect(() => {
	// 	dispatch(printCollectionCard(title));
	// }, [dispatch]);

	return (
		<StyledContainerWrapper>
			<StyleTypography variant="h4" gutterBottom>
				{titleColl}
			</StyleTypography>
			<StyleCollectionImg src={regions} alt={title} loading="lazy" />
			{/* <StyleSlideImg src={img} alt={alt} loading="lazy" />; */}
		</StyledContainerWrapper>
	)
};

export default Collection;
