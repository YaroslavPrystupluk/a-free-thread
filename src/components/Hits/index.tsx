import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Product, getProductsAsync } from "../../redux/slices/productsSlice";

const Hits = () => {
	const productsArray = useSelector((state) => state.products.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsAsync("shirts"));
	}, [dispatch]);

	const randomProducts = productsArray
		.slice()
		.sort(() => 0.5 - Math.random())
		.slice(0, 2);

	console.log(productsArray);

	return (
		<ImageList>
			{randomProducts.map((item: Product) => (
				<ImageListItem key={item.id} sx={{ width: 145, height: 180 }}>
					<img
						srcSet={`${item.imageUrls[0]}`}
						src={`${item.imageUrls[0]}`}
						alt={item.name}
						loading="lazy"
					/>
					<ImageListItemBar
						title={item.price}
						subtitle={<span>{item.name}</span>}
						position="below"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};

export default Hits;
