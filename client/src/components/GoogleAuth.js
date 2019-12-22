import React from "react";

class GoogleAuth extends React.Component {
	state = {
		isSignedIn: null
	};

	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"498280022932-6uf7lfcjtqs8dnoo29rh07mojglk46ir.apps.googleusercontent.com",
					scope: "email"
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		this.setState({
			isSignedIn: this.auth.isSignedIn.get()
		});
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return <div>Not sure if signed in</div>;
		} else if (this.state.isSignedIn === true) {
			return <div>Signed in</div>;
		} else {
			return <div>I am not signed in</div>;
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

export default GoogleAuth;
