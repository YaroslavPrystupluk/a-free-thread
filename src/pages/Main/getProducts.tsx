import store from '../../redux/store/store';
import { getProductsAsync } from '../../redux/slices/productsSlice';
import { selectCollection } from '../../redux/slices/collectionSlice';

const collectionsManes = ['kiev', 'grandmother', 'regions', 'accessories'];

export async function filterProducts(
	firstPathFile: string,
	secondPathFile: string,
	language: string,
) {
	try {
		await store.dispatch(getProductsAsync({ productsFile: firstPathFile, language }));
		await store.dispatch(getProductsAsync({ productsFile: secondPathFile, language }));
		await Promise.all(
			collectionsManes.map(async (item) => {
				await store.dispatch(selectCollection(item));
			}),
		);
	} catch (error) {
		console.error('Error dispatching actions:', error);
	}
}
