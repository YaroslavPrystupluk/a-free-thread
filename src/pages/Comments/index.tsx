import { FC, useEffect } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { getCommentsAsync } from '../../redux/slices/commentsSlice';
import Comment from './Comment';
import { Container } from '../../Theme/CommentsTheme';

const Comments: FC = () => {
	const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

	useEffect(() => {
		dispatch(getCommentsAsync());
	}, [dispatch]);

	const { comments } = useSelector((state: RootState) => state.comments);

	return (
		<Container>
			{comments.map((comment, index) => (
				<Comment key={index} comment={comment} />
			))}
		</Container>
	);
};

export default Comments;
