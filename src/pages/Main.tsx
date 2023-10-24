import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import Hits from '../components/Hits/index';
import Collection from '../components/Collection';
import { getProductsAsync } from '../redux/slices/productsSlice';
import { selectCollection } from '../redux/slices/collectionSlice';
import { RootState } from '../redux/store/store';

const Main = () => {
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
	const collectionsManes = ['kiev', 'grandmother', 'regions'];

	async function filterProducts() {
		await dispatch(getProductsAsync('shirts'));
		collectionsManes.forEach(async (item) => {
			await dispatch(selectCollection(item));
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
