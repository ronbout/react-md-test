import React from "react";
import ProfileImg from "./ProfileImg";
import ProfileCompGraph from "./ProfileCompGraph";
import Button from "styledComponents/Button";

import "./css/personalInfo.css";

const PersonalInfo = props => {
	const formattedName = "Misha Cross";
	const pct = 90;

	return (
		<section className="personal-info-section">
			<div className="personal-info-display">
				<ProfileImg formattedName={formattedName} />
				<ProfileCompGraph pct={pct} />
				<div>
					<Button>Manage My Resumes</Button>
				</div>
				<br />
				<div>
					<Button href="https://www.imdb.com/name/nm6111305/" target="_blank">
						Misha Cross IMDB
					</Button>
				</div>
			</div>
		</section>
	);
};

export default PersonalInfo;
