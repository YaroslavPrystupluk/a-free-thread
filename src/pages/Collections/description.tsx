import { useTranslation } from 'react-i18next';

const useDescriptionCollections = () => {
	const { t } = useTranslation();

	const descriptionCollections: {
		[key: string]: {
			titleCol: string;
			description: string;
		};
	} = {
		kiev: {
			titleCol: `${t('collection.kiev.title')}`,
			description: `${t('collection.kiev.description')}`,
		},
		grandmother: {
			titleCol: `${t('collection.grandmother.title')}`,
			description: `${t('collection.grandmother.description')}`,
		},
		regions: {
			titleCol: `${t('collection.regions.title')}`,
			description: `${t('collection.regions.description')}`,
		},
		accessories: {
			titleCol: `${t('collection.accessories.title')}`,
			description: `${t('collection.accessories.description')}`,
		},
	};

	return descriptionCollections;
};

export default useDescriptionCollections;
