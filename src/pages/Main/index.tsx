import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import Hits from '../../components/Hits/index';
import Collection from '../../components/Collection';
import { RootState } from '../../redux/store/store';
import { filterProducts } from './getProducts';

const Main = () => {
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

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
