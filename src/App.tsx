import { Posts } from "./component/posts";
import React from "react";
// const Posts = React.lazy(() => import("./component/posts"));
import { ErrorBoundary } from "./component/ErrorBoundary";

function App() {
	return (
		<>
			<div>Hi</div>
			<ErrorBoundary>
				<React.Suspense fallback={<div>Loading...</div>}>
					<Posts />
				</React.Suspense>
			</ErrorBoundary>
		</>
	);
}

export default App;
