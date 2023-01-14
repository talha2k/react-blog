import React from "react";
import CommentList from "./CommentList";

const PostSingle = (props) => {
    return (
		<div className="post-container">
			<p className="post-id">Post# {props.id}</p>
			<p className="post-title">{props.title}</p>
			<p className="post-body">{props.text}</p>
			<CommentList postId={props.id} />
		</div>
	);
}

export default PostSingle;