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

const Highlights = () => (
	<section className="highlights-section">
		<DataTable baseId="menu-table">
			<TableHeader>
				<TableRow>
					<TableColumn></TableColumn>
					<TableColumn grow>Highlight</TableColumn>
					<TableColumn>Skills</TableColumn>
				</TableRow>
			</TableHeader>
			<TableBody>
				{highlights.map(({ highlight, sequence, skills }, i) => (
					<TableRow key={`hrow-${sequence}`.replace(/\s+/g, "-")}>
						<TableColumn>{i + 1}</TableColumn>
						<TableColumn>{highlight}</TableColumn>
						<TableColumn>{skills.length}</TableColumn>
						<KebabMenu />
					</TableRow>
				))}
			</TableBody>
		</DataTable>
	</section>
);
export default Highlights;
