// import { Posts } from "./component/posts";
import React from "react";
// const Posts = React.lazy(() => import("./component/posts"));
import { ErrorBoundary } from "./component/ErrorBoundary";
import { Skeleton } from "@/components/ui/skeleton";
// import { PostForm } from "./component/FormPost";
const PostForm = React.lazy(() => import("./component/FormPost"));

function App() {
	return (
		<>
			<div>Hi</div>
			<ErrorBoundary>
				<React.Suspense
					fallback={
						<div className="flex flex-col space-y-3">
							<Skeleton className="h-[125px] w-[250px] rounded-xl" />
							<div className="space-y-2">
								<Skeleton className="h-4 w-[250px]" />
								<Skeleton className="h-4 w-[200px]" />
							</div>
						</div>
					}
				>
					{/* <Posts /> */}
					<PostForm />
				</React.Suspense>
			</ErrorBoundary>
		</>
	);
}

export default App;
