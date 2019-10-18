import React from "react";

const UserForm = ({
	userInfo,
	handleSubmit,
	handleInputChange,
	handleClear
}) => {
	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						name="name"
						value={userInfo.name}
						onChange={handleInputChange}
					/>

					<input
						type="text"
						name="age"
						value={userInfo.age}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<button type="submit">Submit</button>
					<button type="button" onClick={handleClear}>
						Clear
					</button>
				</div>
			</form>
		</div>
	);
};

export default UserForm;
