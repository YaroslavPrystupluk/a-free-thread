/* eslint-disable max-len */
import { Container } from '@mui/material';
import { StyleSquare, StyleStar } from '../../Theme/CollectionPageTheme';
import { StyleCollectionImageWrapper } from '../../Theme/CollectionTheme';
import { StyleTypography } from '../../Theme/LikesTheme';
import {
	StyleContactsParagraph,
	StyleContactsSpan,
	StyleContactsBlock,
	StyleContactsWrapper,
	StyleImgMap,
	StylePosition,
} from '../../Theme/OthersTheme';

function Contacts() {
	return (
		<StyleContactsWrapper>
			<Container style={{ display: 'flex', position: 'relative' }}>
				<StyleSquare className="contacts_square"> </StyleSquare>
				<StyleTypography variant="h4">Наші контакти</StyleTypography>
				<StyleStar className="contacts_star">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						className="collectionPageStar"
					>
						<path
							d="M7.2 16H8.8C8.8 12.0296 12.0304 8.8 16 8.8V7.2C12.0304 7.2 8.8 3.9704 8.8 0H7.2C7.2 3.9704 3.9696 7.2 0 7.2V8.8C3.9696 8.8 7.2 12.0296 7.2 16Z"
							fill="#C77A54"
						/>
					</svg>
				</StyleStar>
			</Container>
			<StyleCollectionImageWrapper className="contacts_text-block">
				<StyleContactsBlock>
					<StyleContactsSpan>АДРЕСА</StyleContactsSpan>
					<StyleContactsParagraph>Україна, Київська обл, м.Вишневе</StyleContactsParagraph>
				</StyleContactsBlock>
				<StyleContactsBlock>
					<StyleContactsSpan>ТЕЛЕФОН</StyleContactsSpan>
					<StyleContactsParagraph>+38 (050) 3337820</StyleContactsParagraph>
				</StyleContactsBlock>
				<StyleContactsBlock>
					<StyleContactsSpan>ЕМЕЙЛ</StyleContactsSpan>
					<StyleContactsParagraph>Vilna.nytka@gmail.com</StyleContactsParagraph>
				</StyleContactsBlock>
			</StyleCollectionImageWrapper>
			<StylePosition>вільна нитка</StylePosition>
			<StyleImgMap src="/images/Others/map.png" alt="Map" />
		</StyleContactsWrapper>
	);
}

export default Contacts;
