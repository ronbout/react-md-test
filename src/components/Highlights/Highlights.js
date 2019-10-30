import React, { useState } from "react";
import {
	Button,
	Card,
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
import SelectMenu from "./SelectMenu";

const onMenuClick = (action, ndx) => {
	alert(action);
};

const Highlights = () => {
	const [highlights, setHighlights] = useState(highlightsData);
	const [selectedRows, setSelectedRows] = useState(
		highlightsData.map(() => false)
	);
	const [selectCount, setSelectCount] = useState(0);

	const onHighlightChange = (ndx, highlight) => {
		const newHighlights = highlights.slice();
		newHighlights[ndx].highlight = highlight;
		setHighlights(newHighlights);
	};

	const handleRowToggle = (row, selected, count) => {
		console.log("handleRowToggle row, selected, count: ", row, selected, count);
		let sRows = selectedRows.slice();
		if (row === 0) {
			sRows = sRows.map(() => selected);
		} else {
			sRows[row - 1] = selected;
		}
		setSelectedRows(sRows);
		setSelectCount(count);
	};

	return (
		<Card tableCard className="highlights-section">
			<SelectMenu
				count={selectCount}
				onDeleteClick={() => onMenuClick("delete")}
				onMoveClick={() => onMenuClick("Move")}
			/>
			<DataTable
				baseId="highlights-table"
				onRowToggle={handleRowToggle}
				fixedHeader
				fixedHeight={500}
			>
				<TableHeader>
					<TableRow>
						<TableColumn></TableColumn>
						<TableColumn grow>Highlight</TableColumn>
						<TableColumn
							tooltipLabel="# of Skills attached"
							tooltipDelay={500}
							tooltipPosition="left"
							style={{ paddingLeft: "28px" }}
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
								tooltipDelay: 500,
								tooltipPosition: "left",
								tooltipLabel: skills.map(s => (
									<p key={s.id}>
										{s.id}-{s.name}
									</p>
								))
							};
						}

						return (
							<TableRow key={`hrow-${sequence}`.replace(/\s+/g, "-")}>
								<TableColumn>{i + 1}</TableColumn>
								<EditDialogColumn
									title=""
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
									<Button flat onClick={() => alert("edit Skills")}>
										{skills.length ? skills.length : "--"}
									</Button>
								</TableColumn>
								<KebabMenu ndx={i} onMenuClick={onMenuClick} />
							</TableRow>
						);
					})}
				</TableBody>
			</DataTable>
		</Card>
	);
};
export default Highlights;
