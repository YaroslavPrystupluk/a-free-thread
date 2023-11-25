import { StyleImageListItem } from '../../Theme/LikesTheme';
import { StyleSpinner } from '../../Theme/LoadingTheme';

function CircleLoading() {
	return (
		<StyleImageListItem className="circleLoading">
			<StyleSpinner> </StyleSpinner>
		</StyleImageListItem>
	);
}

export default CircleLoading;
