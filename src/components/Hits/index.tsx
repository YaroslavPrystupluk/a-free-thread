/* eslint-disable react/jsx-indent-props */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product, getProductsAsync } from "../../redux/slices/productsSlice";
import {
	StyleImageList,
	StyleImageListItemBar,
	StyleImageListItem,
	StyleTypography,
	StyleImageListItemBadge,
} from "../../Theme/HitsTheme";

interface HitsProps {
	badge: string;
}

const Hits: React.FC<HitsProps> = ({ badge }) => {
	const productsArray = useSelector((state) => state.products.products || []);
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
		<>
			<StyleTypography variant="h4" gutterBottom>
				{titleList}
			</StyleTypography>
			<StyleImageList style={{ gap: "auto" }}>
				{randomProducts.map((item: Product) => (
					<StyleImageListItem key={item.id}>
						<img
							srcSet={`${item.imageUrls[0]}`}
							src={`${item.imageUrls[0]}`}
							alt={item.name}
							loading="lazy"
						/>
						<StyleImageListItemBar
							title={item.price}
							subtitle={<span>{item.name}</span>}
							position="below"
						/>
						<StyleImageListItemBadge title={badge} position="top" />
					</StyleImageListItem>
				))}
			</StyleImageList>
		</>
	);
};

export default Hits;
