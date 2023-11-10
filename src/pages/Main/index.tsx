import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store/store';
import { filterProducts } from './getProducts';
import { Product } from '../../redux/slices/productsSlice';
import Collection from '../../components/Collection';
import SubHeader from '../../components/SubHeader';
import Likes from '../../components/Likes';

const Main = () => {
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
	const productsArray: Product[] = useSelector(
		(state: RootState) => (state.products.products || []) as Product[],
	);

	useEffect(() => {
		if (!productsArray?.length) {
			filterProducts('public/shirts.json', 'public/accessories.json');
		}
	}, [dispatch]);

	return (
		<>
			<SubHeader />
			<Likes classWrapper="main" title="популярні товари" collection="hit" badge="Хіт" />
			<Likes classWrapper="main" title="нові надходження" collection="new" badge="Новинка" />
			<Collection title="kiev" />
			<Collection title="grandmother" />
			<Collection title="regions" />
		</>
	);
};

export default Main;
