import React, { useState } from "react";
import {
	DialogContainer,
	TextField,
	Button,
	SelectionControlGroup,
	Switch
} from "react-md";

const AdvancedSearch = props => {
	return (
		<div style={{ textAlign: "left", marginTop: "24px" }}>
			<div>
				<SelectionControlGroup
					id="skills-techtags-radios"
					name="skillsOrTechtags"
					type="radio"
					inline
					label="Search Term Type"
					defaultValue="S"
					controls={[
						{
							label: "Skill",
							value: "S"
						},
						{
							label: "Techtag",
							value: "T"
						}
					]}
				/>
			</div>
			<div>
				<SelectionControlGroup
					id="highlight-or-skills-radios"
					name="highlightsOrSkills"
					type="radio"
					inline
					label="Search Columns"
					defaultValue="S"
					controls={[
						{
							label: "Highlights (string search)",
							value: "H"
						},
						{
							label: "Skills",
							value: "S"
						},
						{
							label: "Both (string search)",
							value: "B"
						}
					]}
				/>
			</div>
			<div className="md-grid">
				<Switch
					id="parent-skills"
					className="md-cell--6"
					type="switch"
					label="Include Parent Skills"
					name="parentSkillsSwitch"
				/>
				<Switch
					id="child-skills"
					className="md-cell--6"
					type="switch"
					label="Include Child Skills"
					name="childSkillsSwitch"
				/>
			</div>
		</div>
	);
};

const SearchHighlightsDialog = ({
	showSearch,
	searchHighlights,
	hideSearchDialog
}) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleOnChange = term => {
		setSearchTerm(term);
	};

	const actions = [];
	actions.push({
		secondary: true,
		children: "Cancel",
		onClick: hideSearchDialog
	});
	actions.push(
		<Button flat primary onClick={searchTerm => searchHighlights(searchTerm)}>
			Search
		</Button>
	);

	return (
		<DialogContainer
			id="highlight-search-dialog"
			visible={showSearch}
			onHide={hideSearchDialog}
			actions={actions}
			title="Search Highlights"
			height={520}
			width={600}
		>
			<div>
				<TextField
					id="highlight-search-term"
					label="Search Term"
					value={searchTerm}
					onChange={handleOnChange}
				/>
				<AdvancedSearch />
			</div>
		</DialogContainer>
	);
};

export default SearchHighlightsDialog;
