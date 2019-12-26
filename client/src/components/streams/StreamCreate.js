import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
	//	renderInput(formProps) {
	//		return (
	//			<div className="field">
	//				<label></label>
	//				<input {...formProps.input} />
	//			</div>
	//		);
	//	}

	renderInput({ input, label }) {
		return (
			<div className="field">
				<label>{label}</label>
				<input {...input} />
			</div>
		);
	}

	render() {
		return (
			<form className="ui form">
				<Field
					name="title"
					component={this.renderInput}
					label="Enter Title"
				/>
				<Field
					name="desciption"
					component={this.renderInput}
					label="Enter Description"
				/>
			</form>
		);
	}
}
export default reduxForm({
	form: "streamCreate"
})(StreamCreate);
