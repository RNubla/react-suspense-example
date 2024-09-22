// import { Posts } from "./component/posts";
import React from "react";
// const Posts = React.lazy(() => import("./component/posts"));
import { ErrorBoundary } from "./component/ErrorBoundary";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "./components/ui/card";
// import { PostForm } from "./component/FormPost";
const PostForm = React.lazy(() => import("./component/FormPost"));

function App() {
	return (
		<>
			<div>Hi</div>
			<ErrorBoundary>
				<React.Suspense
					fallback={
						<Card>
							<CardContent>
								<div className="flex flex-col space-y-3">
									<Skeleton className="h-[125px] w-full rounded-xl" />
									<div className="space-y-2">
										<Skeleton className="h-4 w-full" />
										<Skeleton className="h-4 w-full" />
									</div>
								</div>
							</CardContent>
						</Card>
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
