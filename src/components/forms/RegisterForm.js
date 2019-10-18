import React, { useState, useEffect } from "react";
import UserMsg from "components/UserMsg";
import { useForm } from "./useForm";
import {
	Form,
	InpString,
	InpTextAsNumber,
	InpNumber,
	InpEmail,
	InpUrl,
	InpPassword,
	InpDate,
	InpPhone,
	InpZip,
	InpTextArea,
	InpSwitch
} from "./formInputs";
import "./css/forms.css";

const validCheck = vals => {
	const errors = [];
	if (vals.password1 !== vals.password2) {
		errors[0] = "Passwords must match";
	}
	return errors;
};

/**
 * Start of sample form using useForm Hook
 */
const RegisterForm = ({ userInfo, clearFormFields, handleSubmit }) => {
	const {
		formFields,
		BtnSubmit,
		BtnClear,
		BtnCancel,
		dirtyMsg,
		errors
	} = useForm(userInfo, clearFormFields, handleSubmit, validCheck);
	const [dispErrMsg, setDispErrMsg] = useState(true);

	useEffect(() => {
		if (errors && errors.length) {
			setDispErrMsg(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [errors]);

	const doCancel = () => {
		console.log("This form has been cancelled and closed");
	};

	const errListing = errors.map((err, ndx) => {
		return <p key={ndx}>{err}</p>;
	});

	return (
		<div
			style={{
				padding: "1rem",
				height: "380px",
				overflowY: "auto",
				border: "1px solid #888",
				width: "820px",
				margin: "2rem auto"
			}}
		>
			{dirtyMsg}
			<Form>
				<div className="form-container">
					<div className="tsd-form-row">
						<InpString
							id="name1"
							name="name"
							label="User Name *"
							placeholder="User name"
							minlength={3}
							maxlength={25}
							value={formFields.name}
							autoFocus
							required
						/>
						<InpEmail
							id="email1"
							name="personal-email"
							label="Email *"
							value={formFields.personal.email}
							required
						/>
					</div>
					<div className="tsd-form-row">
						<InpTextArea
							id="objective"
							name="objective"
							label="Objective"
							value={formFields.objective}
						/>
						<InpPhone
							name="personal-phone"
							defaultCountry={"us"}
							preferredCountries={["us", "gb", "ie", "in"]}
							label="phone input"
							value={formFields.personal.phone}
						/>
					</div>
					<div className="tsd-form-row">
						<InpTextAsNumber
							id="age1"
							name="personal-age"
							label="Age (minimum 21)"
							min={21}
							max={120}
							value={formFields.personal.age}
						/>
						<InpNumber
							id="weight"
							name="personal-weight"
							label="Weight"
							max={500}
							value={formFields.personal.weight}
						/>
						<InpZip
							name="personal-zipcode"
							id="zipcode"
							label="Zipcode"
							value={formFields.personal.zipcode}
						/>
					</div>
					<div className="tsd-form-row">
						<InpUrl
							id="website"
							name="website"
							label="Website"
							type="url"
							value={formFields.website}
						/>
						<InpDate
							id="startDate"
							name="startDate"
							label="Start Date"
							minDate="2016-06-15"
							value={formFields.startDate}
							required
						/>
					</div>
					<div className="tsd-form-row">
						<InpPassword
							id="password1"
							name="password1"
							label="Password *"
							minlength={8}
							value={formFields.password1}
							required
						/>
						<InpPassword
							id="password2"
							name="password2"
							label="Confirm Password *"
							minlength={8}
							value={formFields.password2}
							required
						/>
						<InpSwitch
							id="sendAlerts"
							name="sendAlerts"
							checked={formFields.sendAlerts}
							label="Send Alerts"
						/>
					</div>
				</div>
				{errors.length > 0 && dispErrMsg && (
					<UserMsg
						style={{ height: "auto", width: "auto" }}
						msg={errListing}
						msgHeader="Error(s)"
						msgType="info"
						handleClose={() => setDispErrMsg(false)}
					/>
				)}

				<div className="btns-container">
					<BtnSubmit>Enter</BtnSubmit>
					<BtnClear checkDirty />
					<BtnCancel checkDirty onCancel={doCancel} />
				</div>
			</Form>
		</div>
	);
};

export default RegisterForm;
