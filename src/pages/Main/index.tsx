import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import Collection from '../../components/Collection';
import { RootState } from '../../redux/store/store';
import { filterProducts } from './getProducts';
import SubHeader from '../../components/SubHeader';
import Likes from '../../components/Likes';

const Main = () => {
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

	useEffect(() => {
		filterProducts('public/shirts.json');
	}, [dispatch]);

	return (
		<>
			<SubHeader />
			<Likes title="популярні товари" collection="hit" badge="Хіт" />
			<Likes title="нові надходження" collection="new" badge="Новинка" />
			<Collection title="kiev" />
			<Collection title="grandmother" />
			<Collection title="regions" />
		</>
	);
};

export default Main;
