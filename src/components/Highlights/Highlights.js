import React, { useState } from "react";
import {
	DataTable,
	TableHeader,
	TableBody,
	TableRow,
	TableColumn,
	EditDialogColumn
} from "react-md";
import "./css/highlights.css";
import highlightsData from "./highlightsData";

//import "./styles.css";
import KebabMenu from "./KebabMenu";

const onMenuClick = (action, ndx) => {
	alert(action);
};

const Highlights = () => {
	const [highlights, setHighlights] = useState(highlightsData);

	const onHighlightChange = (ndx, highlight) => {
		const newHighlights = highlights.slice();
		newHighlights[ndx].highlight = highlight;
		setHighlights(newHighlights);
	};

	return (
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
								<EditDialogColumn
									large
									className="table-edit-full-width"
									dialogStyle={{ width: "550px" }}
									style={{ width: "100%" }}
									value={highlight}
									onChange={val => onHighlightChange(i, val)}
									label="Edit Highlight"
									rows={1}
									maxRows={4}
									maxlength={200}
									helpText="max chars = 200"
								/>
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
};
export default Highlights;
