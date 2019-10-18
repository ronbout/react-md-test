import React, { useState } from "react";
import UserForm from "./UserForm";
import UserModalMsg from "../testUserModalMsg/UserModalMsg";

const objCopy = obj => JSON.parse(JSON.stringify(obj));

const deepCompare = (obj1, obj2) => {
	console.log("obj1: ", JSON.stringify(obj1));
	console.log("obj2: ", JSON.stringify(obj2));
	return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const clearFormfields = {
	name: "",
	age: ""
};

const userInfoDefault = {
	name: "Fred Flintstone",
	age: "42"
};

const useDirtyMsg = dispFlg => {
	return (
		<div>
			{dispFlg && (
				<UserModalMsg
					heading="Warning"
					subHeading="You have unsaved changes"
					msgBody="Do you still want to clear the form?"
					btns={btns}
					closeModalMsg={closeModalMsg}
				/>
			)}
		</div>
	);
};

const UserFormContainer = props => {
	const [userInfo, setUserInfo] = useState(userInfoDefault);
	const [origForm, setOrigForm] = useState(objCopy(userInfoDefault));
	const [dispModalMsg, setDispModalMsg] = useState(false);

	const handleSubmit = ev => {
		ev.preventDefault();
		console.log("submitted");
	};

	const handleInputChange = ev => {
		const target = ev.target;

		setUserInfo(prev => {
			return {
				...prev,

				[target.name]: target.value
			};
		});
	};

	const handleClear = () => {
		if (checkDirtyForm()) return;
		console.log("handleClear");
		clearForm();
	};

	const clearForm = () => {
		setUserInfo({ ...clearFormfields });
		setDispModalMsg(false);
	};

	const checkDirtyForm = () => {
		const dirty = deepCompare(origForm, userInfo) ? false : true;
		console.log("form is dirty: ", dirty);
		if (dirty) {
			console.log("dirty");
			openModalMsg();
		}
		return dirty;
	};

	const closeModalMsg = () => {
		setDispModalMsg(false);
	};

	const openModalMsg = () => {
		setDispModalMsg(true);
	};

	const btns = [
		{
			display: "Yes",
			action: clearForm
		},
		{
			display: "No",
			action: closeModalMsg
		}
	];

	return (
		<div>
			<UserForm
				handleInputChange={handleInputChange}
				userInfo={userInfo}
				handleSubmit={handleSubmit}
				handleClear={handleClear}
			/>
		</div>
	);
};

export default UserFormContainer;
