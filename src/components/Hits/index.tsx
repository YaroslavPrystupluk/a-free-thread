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

const Hits = () => {
	const productsArray = useSelector((state) => state.products.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsAsync("shirts"));
	}, [dispatch]);

	const randomProducts = productsArray.
		slice().
		sort(() => 0.5 - Math.random()).
		slice(0, 4);

	return (
		<>
			<StyleTypography variant="h4" gutterBottom>
				популярні товари
			</StyleTypography>
			<StyleImageList>
				{randomProducts.map((item: Product) => (
					<StyleImageListItem key={item.id} style={{ width: 130 }}>
						<img
							srcSet={`${item.imageUrls[0]}`}
							src={`${item.imageUrls[0]}`}
							alt={item.name}
							loading="lazy"
							style={{ height: 180 }}
						/>
						<StyleImageListItemBar
							title={item.price}
							subtitle={<span>{item.name}</span>}
							position="below"
						/>
						<StyleImageListItemBadge title="Хіт" position="top" />
					</StyleImageListItem>
				))}
			</StyleImageList>
		</>
	);
};

export default Hits;
