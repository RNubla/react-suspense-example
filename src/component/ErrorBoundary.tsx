import React from "react";

class ErrorBoundary extends React.Component {
	constructor(props: React.Component) {
		super(props);
		this.state = { hasError: false };
	}

	static defaultProps = {
		fallback: <h1>Something went wrong.</h1>,
	};

	static getDerivedStateFromError(error: any) {
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback;
		}

		return this.props.children;
	}
}

export { ErrorBoundary };
