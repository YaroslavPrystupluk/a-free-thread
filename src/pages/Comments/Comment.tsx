import { FC } from 'react';
import { Box, Card, Typography, Avatar } from '@mui/material';
import { Comments } from '../../model/Icomments';

interface CommentProps {
	comment: Comments;
}

const Comment: FC<CommentProps> = ({ comment }) => {
	return (
		<Box sx={{ minWidth: 268 }}>
			<Card variant="outlined">
				<Typography>
					<Avatar>{comment.avatar}</Avatar> {comment.name}
				</Typography>
				<Typography>{comment.date}</Typography>
				<Typography>{comment.star}</Typography>
				<Typography>{comment.body}</Typography>
			</Card>
		</Box>
	);
};

export default Comment;
