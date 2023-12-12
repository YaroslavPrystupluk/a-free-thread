import { FC, useEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Pagination, PaginationItem, PaginationRenderItemParams } from '@mui/material';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { getCommentsAsync } from '../../redux/slices/commentsSlice';
import Comment from './Comment';
import { RightArrow, LeftArrow, DividerIcon } from '../../components/Collection/arrows';
import {
	Container,
	SquareTitle,
	StarIcon,
	Title,
	TitleWrapper,
	CardsWrapper,
	StylePaginationBox,
	StylePaginationButton,
} from '../../Theme/CommentsTheme';

import star from '../../images/icon/star.webp';

const Comments: FC = () => {
	const { t } = useTranslation();
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage, setProductsPerPage] = useState<number>(6);
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
	const currentLanguage = i18next.language;

	useEffect(() => {
		dispatch(getCommentsAsync(currentLanguage));
	}, [dispatch, currentLanguage]);

	const { comments } = useSelector((state: RootState) => state.comments);
	const total = comments?.length;
	const countPagination = total ? Math.ceil(total / productsPerPage) : 0;
	const startIndex = (currentPage - 1) * productsPerPage;
	const endIndex = currentPage * productsPerPage;

	const commentsSliced = comments?.slice(startIndex, endIndex);

	const handleScrollAndResize = () => {
		if (window.innerWidth >= 768) {
			setProductsPerPage(6);
		} else {
			setProductsPerPage(6);
		}
	};

	useEffect(() => {
		setCurrentPage(1);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleScrollAndResize);
		handleScrollAndResize();
		return () => {
			window.removeEventListener('resize', handleScrollAndResize);
		};
	}, []);

	return (
		<Container>
			<TitleWrapper>
				<SquareTitle />
				<Title>{t('header.button.reviews')}</Title>
				<StarIcon src={star} alt="star" />
			</TitleWrapper>
			<CardsWrapper>
				{commentsSliced.map((comment, index) => (
					<Comment key={index} comment={comment} />
				))}
			</CardsWrapper>
			<StylePaginationBox>
				<Pagination
					sx={{ margin: '40px auto' }}
					count={countPagination}
					color="primary"
					page={currentPage}
					renderItem={(item: PaginationRenderItemParams) => {
						if (item.type === 'page') {
							if (item.page === currentPage || item.page === countPagination) {
								if (item.page === currentPage) {
									return (
										<StylePaginationButton>
											0
											<PaginationItem
												component="button"
												slots={{ previous: LeftArrow, next: RightArrow }}
												{...item}
												onClick={() => {
													setCurrentPage(item.page as number);
												}}
											/>
											<DividerIcon />
											{item.page === countPagination ? (
												<StylePaginationButton className="countPagination1">
													0
													<PaginationItem
														component="button"
														{...item}
														onClick={() => {
															setCurrentPage(item.page as number);
														}}
													/>
												</StylePaginationButton>
											) : null}
										</StylePaginationButton>
									);
								}
								return (
									<StylePaginationButton className="countPagination2">
										0
										<PaginationItem
											component="button"
											slots={{ previous: LeftArrow, next: RightArrow }}
											{...item}
											onClick={() => {
												setCurrentPage(item.page as number);
											}}
										/>
									</StylePaginationButton>
								);
							}
						} else if (item.type === 'start-ellipsis' || item.type === 'end-ellipsis') {
							return null;
						} else {
							return (
								<PaginationItem
									component="button"
									slots={{ previous: LeftArrow, next: RightArrow }}
									{...item}
									onClick={() => {
										setCurrentPage(item.page as number);
									}}
								/>
							);
						}
						return null;
					}}
				/>
			</StylePaginationBox>
		</Container>
	);
};

export default Comments;
