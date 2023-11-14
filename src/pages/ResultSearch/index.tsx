import React, { FC } from 'react';
import star from '../../images/icon/star.webp';
import {
	Container,
	TitleWrapper,
	Title,
	StarIcon,
	SquareTitle,
	NotFoundWrapper,
	TitleNotFound,
	SubTitleNotFound,
} from '../../Theme/ResultSearchTheme';
import { Product } from '../../redux/slices/productsSlice';
import ProductItem from '../../components/Likes/productItem';
import { StyleImageList } from '../../Theme/LikesTheme';

interface ResultSearchProps {
	searchProduct: string;
	searchResult: Product[];
}

const ResultSearch: FC<ResultSearchProps> = React.memo(({ searchProduct, searchResult }) => {
	return (
		<Container>
			<TitleWrapper>
				<Title>
					<SquareTitle />
					Результати пошуку: &ldquo;{searchProduct}&ldquo;
					<StarIcon src={star} alt="star" />
				</Title>
			</TitleWrapper>
			{searchResult.length > 0 ? (
				<StyleImageList className="collectionPage" style={{ gap: 'auto' }}>
					{searchResult.map((item: Product) => (
						<ProductItem badge="last" item={item} key={item.id} />
					))}
				</StyleImageList>
			) : (
				<NotFoundWrapper>
					<TitleNotFound>За даними параметрами, на жаль, нічого не знайдено</TitleNotFound>
					<SubTitleNotFound>
						Перейдіть до каталогу, щоб обрати бажаний продукт або спробуйте ще.
					</SubTitleNotFound>
				</NotFoundWrapper>
			)}
		</Container>
	);
});

export default ResultSearch;
