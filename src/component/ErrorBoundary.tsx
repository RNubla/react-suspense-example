import React from "react";

class ErrorBoundary extends React.Component {
	constructor(props: React.Component) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static defaultProps = {
		fallback: <h1>Something went wrong.</h1>,
	};

	static getDerivedStateFromError(error: any) {
		// this.setState({ error });
		return { hasError: true, error: error };
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.log({ errorInfo, error });
		// this.setState({ hasError: true, error: error });
		// this.setState({ error, errorInfo });
	}

	render() {
		if (this.state.hasError) {
			// return this.props.fallback;
			return <div>Error: {this.state.error.message}</div>;
		}

		return this.props.children;
	}
}

export { ErrorBoundary };
