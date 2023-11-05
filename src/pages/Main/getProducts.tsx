import store from '../../redux/store/store';
import { getProductsAsync } from '../../redux/slices/productsSlice';
import { selectCollection } from '../../redux/slices/collectionSlice';

const collectionsManes = ['kiev', 'grandmother', 'regions'];

export async function filterProducts() {
	try {
		await store.dispatch(getProductsAsync('src/products/shirts.json'));
		await Promise.all(
			collectionsManes.map(async (item) => {
				await store.dispatch(selectCollection(item));
			}),
		);
	} catch (error) {
		console.error('Error dispatching actions:', error);
	}
}
