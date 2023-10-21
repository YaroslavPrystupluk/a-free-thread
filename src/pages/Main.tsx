import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Hits from '../components/Hits/index';
import Collection from '../components/Collection';
import { getProductsAsync } from '../redux/slices/productsSlice';
import { selectCollection } from '../redux/slices/collectionSlice';

const Main = () => {
	const dispatch = useDispatch();
	const collectionsManes = ['kiev', 'grandmother', 'regions'];

	async function filterProducts() {
		await dispatch(getProductsAsync('shirts'));
		collectionsManes.forEach((item) => {
			dispatch(selectCollection(item));
		});
	}

	useEffect(() => {
		filterProducts();
	}, [dispatch]);

	return (
		<>
			<Hits badge="Хіт" />
			<Hits badge="Новинка" />
			<Collection title="kiev" />
			<Collection title="grandmother" />
			<Collection title="regions" />
		</>
	);
};

export default Main;
