import { useTranslation } from 'react-i18next';
import Collection from '../../components/Collection';
import SubHeader from '../../components/SubHeader';
import Likes from '../../components/Likes';

const Main = () => {
	const { t } = useTranslation();

	return (
		<>
			<SubHeader />
			<Likes
				classWrapper="main"
				title={t('likes.title.hit')}
				collection="hit"
				badge={t('likes.badge.hit')}
			/>
			<Likes
				classWrapper="main"
				title={t('likes.title.new')}
				collection="new"
				badge={t('likes.badge.new')}
			/>
			<Collection title="kiev" />
			<Collection title="grandmother" />
			<Collection title="regions" />
		</>
	);
};

export default Main;
