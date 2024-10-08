import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import fetchData from "@/utils/fetchData";
import wrapPromise from "@/utils/wrapPromise";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	userId: z.coerce.number(),
	title: z.string(),
	body: z.string(),
});
// const resource = fetchData<z.infer<typeof formSchema>>(
// 	"https://jsonplaceholder.typicode.com/posts/e",
// );
const resource = wrapPromise<z.infer<typeof formSchema>>(
	fetchData("https://jsonplaceholder.typicode.com/posts/1"),
);

function PostForm() {
	// const queryClient = useQueryClient();

	const { data: postData } = useSuspenseQuery({
		queryKey: ["post"],
		queryFn: resource.read,
	});
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		mode: "onChange",
		// defaultValues: resource.read(),
		defaultValues: postData,
	});

	const { reset } = form;

	function onSubmit(data: z.infer<typeof formSchema>) {
		console.log({ data });
	}

	function resetForm() {
		reset();
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Post Form</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="userId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>UserId</FormLabel>
									<FormControl>
										<Input placeholder="shadcn" {...field} />
									</FormControl>
									<FormDescription>
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input placeholder="shadcn" {...field} />
									</FormControl>
									<FormDescription>
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="body"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Body</FormLabel>
									<FormControl>
										<Textarea rows={5} placeholder="shadcn" {...field} />
									</FormControl>
									<FormDescription>Article Content</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button onClick={resetForm}>Reset</Button>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
// export { PostForm };
export default PostForm;
