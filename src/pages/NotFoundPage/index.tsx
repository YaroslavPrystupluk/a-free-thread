import error from '../../images/Others/404.jpg';
import { StyleGridWrapper, StyleTextError, StyleGrid } from '../../Theme/OthersTheme';

function PageNotFound() {
	return (
		<StyleGridWrapper container>
			<StyleGrid item md={12}>
				<img width="100%" src={error} alt="404" loading="lazy" className="mainImage_error" />
				<StyleTextError>
					Oops, something went wrong...
					<br />
					You have entered a wrong address, or this page on the site is no longer available.
				</StyleTextError>
			</StyleGrid>
		</StyleGridWrapper>
	);
}

export default PageNotFound;
