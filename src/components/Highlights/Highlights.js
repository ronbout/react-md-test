import React from "react";
import {
	DataTable,
	TableHeader,
	TableBody,
	TableRow,
	TableColumn
} from "react-md";
import "./css/highlights.css";
import highlights from "./highlightsData";

//import "./styles.css";
import KebabMenu from "./KebabMenu";

const onMenuClick = (action, ndx) => {
	alert(action);
};

const Highlights = () => (
	<section className="highlights-section">
		<DataTable baseId="menu-table">
			<TableHeader>
				<TableRow>
					<TableColumn></TableColumn>
					<TableColumn grow>Highlight</TableColumn>
					<TableColumn
						tooltipLabel="# of Skills attached"
						tooltipDelay={500}
						tooltipPosition="left"
					>
						Skills
					</TableColumn>
				</TableRow>
			</TableHeader>
			<TableBody>
				{highlights.map(({ highlight, sequence, skills }, i) => {
					let skillsTooltip = {};
					if (skills.length) {
						skillsTooltip = {
							tooltipStyle: { background: "#ddd", color: "black" },
							tooltipPosition: "left",
							tooltipLabel: skills.map(s => (
								<p>
									{s.id}-{s.name}
								</p>
							))
						};
					}

					return (
						<TableRow key={`hrow-${sequence}`.replace(/\s+/g, "-")}>
							<TableColumn>{i + 1}</TableColumn>
							<TableColumn>{highlight}</TableColumn>
							<TableColumn
								className={skills.length ? "" : "md-text--error"}
								{...skillsTooltip}
							>
								{skills.length ? skills.length : "--"}
							</TableColumn>
							<KebabMenu ndx={i} onMenuClick={onMenuClick} />
						</TableRow>
					);
				})}
			</TableBody>
		</DataTable>
	</section>
);
export default Highlights;
