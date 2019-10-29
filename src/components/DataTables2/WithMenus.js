/* WithMenus.jsx */
import React from "react";
import {
	DataTable,
	TableHeader,
	TableBody,
	TableRow,
	TableColumn
} from "react-md";

import books from "./books";

//import "./styles.css";
import KebabMenu from "./KebabMenu";

const WithMenus = () => (
	<DataTable baseId="menu-table">
		<TableHeader>
			<TableRow>
				<TableColumn grow>Title</TableColumn>
				<TableColumn>Author</TableColumn>
				<TableColumn />
				<TableColumn />
			</TableRow>
		</TableHeader>
		<TableBody>
			{books.map(({ title, author }, i) => (
				<TableRow key={`${title}-${author}`.replace(/\s+/g, "-")}>
					<TableColumn>{title}</TableColumn>
					<TableColumn>{author}</TableColumn>
					<KebabMenu />
				</TableRow>
			))}
		</TableBody>
	</DataTable>
);
export default WithMenus;
