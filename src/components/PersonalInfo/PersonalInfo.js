import React from "react";
import ProfileImg from "./ProfileImg";
import ProfileCompGraph from "./ProfileCompGraph";

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
					<button>Manage My Resumes</button>
				</div>
				<br />
				<div>
					<button>
						<a
							href="https://www.imdb.com/name/nm6111305/"
							rel="noopener noreferrer"
							target="_blank"
						>
							Misha Cross IMDB
						</a>
					</button>
				</div>
			</div>
		</section>
	);
};

export default PersonalInfo;
