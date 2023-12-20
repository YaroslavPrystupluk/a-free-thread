import { FC } from 'react';
import { Box } from '@mui/material';
import { Comments } from '../../model/Icomments';
import {
	CustomCard,
	CustomAvatar,
	NameAuthor,
	CommentDate,
	StarsWrapper,
	Star,
	CommentBody,
} from '../../Theme/CommentTheme';

interface CommentProps {
	comment: Comments;
}

const Comment: FC<CommentProps> = ({ comment }) => {
	const stars = [];

	for (let i = 1; i <= 5; i++) {
		if (i <= comment.star) {
			stars.push(<Star $isEmpty={false} key={i} />);
		} else {
			stars.push(<Star $isEmpty key={i} />);
		}
	}

	function stringAvatar(name: string) {
		return {
			children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
		};
	}

	return (
		<Box sx={{ minWidth: 268 }}>
			<CustomCard variant="outlined">
				<CustomAvatar {...stringAvatar(comment.name)} />
				<NameAuthor>{comment.name}</NameAuthor>
				<CommentDate>{comment.date}</CommentDate>
				<StarsWrapper>{stars}</StarsWrapper>
				<CommentBody>{comment.body}</CommentBody>
			</CustomCard>
		</Box>
	);
};

export default Comment;
