import React, { FC } from 'react';
import star from '../../images/icon/star.webp';
import {
	Container,
	TitleWrapper,
	Title,
	StarIcon,
	SquareTitle,
	ProductsWrapper,
} from '../../Theme/ResultSearch';
import { Product } from '../../redux/slices/productsSlice';
import ProductItem from '../../components/Likes/productItem';

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
			<ProductsWrapper>
				{searchResult.length > 0 ? (
					searchResult.map((item: Product) => <ProductItem badge="Хіт" item={item} key={item.id} />)
				) : (
					<div>
						<p>За даними параметрами, на жаль, нічого не знайдено</p>
						<p>Перейдіть до каталогу, щоб обрати бажаний продукт або спробуйте ще.</p>
					</div>
				)}
			</ProductsWrapper>
		</Container>
	);
});

export default ResultSearch;
