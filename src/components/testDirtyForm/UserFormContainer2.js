import React, { useState } from "react";
import UserForm from "./UserForm";

import { useDirtyCheck } from "./useDirtyCheck";

const objCopy = obj => JSON.parse(JSON.stringify(obj));

const clearFormfields = {
	name: "",
	age: ""
};

const userInfoDefault = {
	name: "Fred Flintstone",
	age: "42"
};

/**
 * testing custom hooks
 */

const useTest = () => {
	return 42;
};

const useTestFn = cb => {
	const y = ["apples", "oranges"];
	return () => {
		return (
			<div>
				{cb(y)}
				<p>{y[0]}</p>
			</div>
		);
	};
};

const useChangeState = (x, cb) => {
	return () => {
		if (x > 5) {
			cb();
		}
	};
};

const UserFormContainer2 = props => {
	const [userInfo, setUserInfo] = useState(userInfoDefault);
	const [testState, setTestSTate] = useState("abc");
	const [origForm, setOrigForm] = useState(objCopy(userInfoDefault));
	const x = useTest();
	const hookFn = useTestFn(makeLi);
	const handleChangeState = useChangeState(8, changeTestState);
	const [dirtyMsg, checkDirtyForm] = useDirtyCheck(
		origForm,
		userInfo,
		clearForm
	);

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
		checkDirtyForm();
		//clearForm();
	};

	function clearForm() {
		setUserInfo({ ...clearFormfields });
		setOrigForm({ ...clearFormfields });
	}

	function makeLi(list) {
		return (
			<ul>
				{list.map((i, ndx) => (
					<li key={ndx}>{i}</li>
				))}
			</ul>
		);
	}

	function changeTestState() {
		setTestSTate("xyz");
	}

	return (
		<div>
			<div>
				<h2>{x}</h2>
				<h2>{hookFn()}</h2>
				{dirtyMsg}
			</div>
			<div>
				<p>testState: {testState}</p>
				<button onClick={handleChangeState}>Change Test State</button>
			</div>
			<UserForm
				handleInputChange={handleInputChange}
				userInfo={userInfo}
				handleSubmit={handleSubmit}
				handleClear={handleClear}
			/>
		</div>
	);
};

export default UserFormContainer2;
