import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hits from "../components/Hits/index";
import Collection from "../components/Collection";
import { getProductsAsync } from "../redux/slices/productsSlice";

const Main = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsAsync('shirts'));
	}, [dispatch]);

	return (
		<>
			<Hits badge="Хіт" />
			<Hits badge="Новинка" />
			<Collection title="grandmother" />
			<Collection title="kiev" />
			<Collection title="regions" />
		</>
	);
};

export default Main;
