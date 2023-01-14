import React from "react";

const CommentSingle = (props) => {
	return (
		<div className="comment">
			<p className="comment-title">{props.id}. {props.title}</p>
			<p className="comment-author">{props.author}</p>
			<p className="comment-body">{props.text}</p>
		</div>
	);
};

export default CommentSingle;
