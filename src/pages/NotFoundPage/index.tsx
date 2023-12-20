import { useTranslation } from 'react-i18next';
import error from '../../images/Others/404.jpg';
import { StyleGridWrapper, StyleTextError, StyleGrid } from '../../Theme/OthersTheme';

function PageNotFound() {
	const { t } = useTranslation();

	return (
		<StyleGridWrapper container>
			<StyleGrid item md={12}>
				<img width="100%" src={error} alt="404" loading="lazy" className="mainImage_error" />
				<StyleTextError>
					{t('error.page.title')}
					<br />
					{t('error.page.description')}
				</StyleTextError>
			</StyleGrid>
		</StyleGridWrapper>
	);
}

export default PageNotFound;
