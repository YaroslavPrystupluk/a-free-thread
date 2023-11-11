import { FC } from 'react';
import { Comments } from '../../model/Icomments';

interface ComentProps {
	comment: Comments;
}

const Comment: FC<ComentProps> = ({ comment }) => {
	return <div>{comment.name}</div>;
};

export default Comment;
