import Collection from '../../components/Collection';
import SubHeader from '../../components/SubHeader';
import Likes from '../../components/Likes';

const Main = () => {
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
