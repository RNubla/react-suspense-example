import { Posts } from "./component/posts";
import React from "react";
// const Posts = React.lazy(() => import("./component/posts"));
import { ErrorBoundary } from "./component/ErrorBoundary";
import { PostForm } from "./component/FormPost";

function App() {
	return (
		<>
			<div>Hi</div>
			<ErrorBoundary>
				<React.Suspense fallback={<div>Loading...</div>}>
					{/* <Posts /> */}
					<PostForm />
				</React.Suspense>
			</ErrorBoundary>
		</>
	);
}

export default App;
