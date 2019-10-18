/**
 * useDirtyCheck is Hook for checking forms for changes
 * when a user clicks either Clear or Cancel.  It will
 * take in the origForm and compare it to the currForm.
 * If "dirty", it will use the UserModalMsg to find out
 * whether the user really wants to continue.
 */

import React, { useState, useEffect } from "react";

import UserModalMsg from "../testUserModalMsg/UserModalMsg";

const deepCompare = (obj1, obj2) => {
	console.log("obj1: ", JSON.stringify(obj1));
	console.log("obj2: ", JSON.stringify(obj2));
	return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const useDirtyCheck = (origForm, curForm, clrFormCallBk) => {
	const [dispModalMsg, setDispModalMsg] = useState(false);
	const [oForm, setOForm] = useState(origForm);
	const [cForm, setCForm] = useState(curForm);
	const clearForm = () => {
		clrFormCallBk();
		setDispModalMsg(false);
	};

	useEffect(() => {
		setOForm(origForm);
		setCForm(curForm);
	}, [origForm, curForm]);

	const checkDirtyForm = () => {
		const dirty = deepCompare(oForm, cForm) ? false : true;
		console.log("form is dirty: ", dirty);
		if (dirty) {
			console.log("dirty");
			setDispModalMsg(true);
		} else {
			clrFormCallBk();
		}
		return dirty;
	};

	const closeModalMsg = () => {
		setDispModalMsg(false);
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

	const dirtyMsg = dispModalMsg ? (
		<div>
			<UserModalMsg
				heading="Warning"
				subHeading="You have unsaved changes"
				msgBody="Do you still want to clear the form?"
				btns={btns}
				closeModalMsg={closeModalMsg}
			/>
		</div>
	) : (
		""
	);

	return [dirtyMsg, checkDirtyForm];
};
