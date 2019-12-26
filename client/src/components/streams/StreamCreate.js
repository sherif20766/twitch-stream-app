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

	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, meta }) => {
		return (
			<div className="field">
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit(formValues) {
		console.log(formValues);
	}

	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form error"
			>
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
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = formValues => {
	const errors = {};

	if (!formValues.title) {
		errors.title = "You must enter a title";
	}
	if (!formValues.desciption) {
		errors.desciption = "You must enter a desciption";
	}

	return errors;
};

export default reduxForm({
	form: "streamCreate",
	validate: validate
})(StreamCreate);
