import fetchData from "../utils/fetchData";
interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}
const resource = fetchData<Post[]>(
	"https://jsonplaceholder.typicode.com/posts",
);

function Posts() {
	const posts = resource.read();
	// console.log(posts);
	const renderPost = posts.map((post) => {
		return <li key={post.id}>{post.title}</li>;
	});
	return (
		<div>
			<h1>Posts</h1>
			<ul>{renderPost}</ul>
		</div>
	);
}
export { Posts };
// export default Posts;
