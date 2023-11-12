import { FC, useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { getCommentsAsync } from '../../redux/slices/commentsSlice';
import Comment from './Comment';
import {
	Container,
	SquareTitle,
	StarIcon,
	Title,
	TitleWrapper,
	CardsWrapper,
} from '../../Theme/CommentsTheme';

import star from '../../images/icon/star.webp';

const Comments: FC = () => {
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

	useEffect(() => {
		dispatch(getCommentsAsync());
	}, [dispatch]);

	const { comments } = useSelector((state: RootState) => state.comments);

	return (
		<Container>
			<TitleWrapper>
				<Title>Відгуки</Title>
				<StarIcon src={star} alt="star" />
				<SquareTitle />
			</TitleWrapper>
			<CardsWrapper>
				{comments.map((comment, index) => (
					<Comment key={index} comment={comment} />
				))}
			</CardsWrapper>
		</Container>
	);
};

export default Comments;
