import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product, getProductsAsync } from "../../redux/slices/productsSlice";
import { RootState } from "../../redux/selectors";
import LoadingAnimation from "../Loading";
import ProductItem from "./productItem";
import { StyleImageList, StyleTypography, StyledContainerWrapper } from "../../Theme/HitsTheme";

interface HitsProps {
	badge: string;
}

const Hits: React.FC<HitsProps> = ({ badge }) => {
	const productsArray = useSelector((state: RootState) => state.products.products || []);
	const loading = useSelector((state: RootState) => state.products.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsAsync("shirts"));
	}, [dispatch]);

	const randomProducts =
		badge === "Хіт"
			? productsArray
					.slice()
					.sort(() => 0.5 - Math.random())
					.slice(0, 4)
			: productsArray.slice(-4);

	const titleList = badge === "Хіт" ? "популярні товари" : "нові надходження";

	return (
		<StyledContainerWrapper>
			<StyleTypography variant="h4" gutterBottom>
				{titleList}
			</StyleTypography>
			{loading ? (
				<LoadingAnimation />
			) : (
				<StyleImageList style={{ gap: "auto" }}>
					{randomProducts.map((item: Product) => (
						<ProductItem item={item} badge={badge} key={item.id * Math.random()} />
					))}
				</StyleImageList>
			)}
		</StyledContainerWrapper>
	);
};

export default Hits;
