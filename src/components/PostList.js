import React from "react";
import PostSingle from "../components/PostSingle";

const PostList = (props) => {
	return (
		<div>
			{props.posts.map((post, index) => (
				<PostSingle key={index} id={post.id}  title={post.title} text={post.body} />
			))}
		</div>
	);
};

export default PostList;
