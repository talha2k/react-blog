import React, { useState, useEffect } from "react";
import CommentSingle from "../components/CommentSingle";

const CommentList = (props) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.postId}`)
			.then((response) => response.json())
			.then((data) => setComments(data));
	}, [props.postId]);
    //console.log(comments);
	return (
		<div>
			<h3>Comments</h3>
			<hr />
			{comments.map((comment, index) => (
				<CommentSingle key={index} id={comment.id} author={comment.email} title={comment.name} text={comment.body} />
			))}
		</div>
	);
};

export default CommentList;
