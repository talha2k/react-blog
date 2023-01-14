import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import "./assets/index.css";

const App = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
    document.title = "Blog Posts React";
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<div className="app-container">
			<h1>Blog Posts</h1>
			<PostList posts={posts} />
		</div>
	);
};

export default App;