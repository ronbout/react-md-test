import React from "react";
import MakePopup from "components/hoc/MakePopup";

/**
 * Popup, draggable user message
 * parms:
 *    msg: main message to display
 *    msgHeader: header of display, default ''
 *    style: object of styles that will override
 *           any of the defautls
 * 		msgType: standard types with default styles
 * 						- std (default)
 * 						- warning
 * 		handleClose: required callBk for parent
 * 					 			 to close the msg
 */

const MsgDisplayComponent = ({
	msg,
	msgHeader = null,
	closeStyle = {},
	handleClose
}) => {
	const closeBtnStyle = {
		position: "absolute",
		top: "3px",
		right: "8px",
		fontWeight: "bold",
		cursor: "pointer",
		...closeStyle
	};

	const testClick = () => {
		handleClose();
	};

	return (
		<div className="message-container">
			{msgHeader ? <h1>{msgHeader}</h1> : ""}
			{msg ? <div>{msg}</div> : ""}
			<div style={closeBtnStyle} onClick={testClick}>
				X
			</div>
		</div>
	);
};

const UserMsg = ({
	msg,
	msgHeader,
	style = {},
	msgType = "std",
	handleClose
}) => {
	let typeStyle;
	switch (msgType) {
		case "warning":
			typeStyle = {
				backgroundColor: "red",
				color: "white"
			};
			break;
		default:
			typeStyle = {
				backgroundColor: "lightBlue"
			};
	}
	const popupStyle = {
		height: "150px",
		width: "80%",
		top: "40%",
		left: "50%",
		padding: "0 3rem 0.5rem",
		borderRadius: "8px",
		transform: "translate(-50%, -50%)",
		...typeStyle,
		...style
	};

	const MsgPopup = MakePopup(MsgDisplayComponent, popupStyle, true);

	return (
		<MsgPopup
			msg={msg}
			msgHeader={msgHeader}
			closeStyle={typeStyle}
			handleClose={handleClose}
		/>
	);
};

export default UserMsg;
