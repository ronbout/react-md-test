/* KebabMenu.jsx */
import React from "react";
import { MenuButtonColumn, SVGIcon } from "react-md";

// import info from "./icons/info_outline.svg";
// import download from "./icons/file_download.svg";
// import duplicate from "./icons/content_copy.svg";
// import deleteIcon from "./icons/delete.svg";
//import kebab from "./icons/kebab.svg";

const menuItems = [
	{
		leftIcon: (
			<SVGIcon secondary>
				<path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
			</SVGIcon>
		),
		primaryText: "More info"
	},
	{
		leftIcon: (
			<SVGIcon secondary>
				<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
			</SVGIcon>
		),
		primaryText: "Duplicate"
	},
	{
		leftIcon: (
			<SVGIcon secondary>
				<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
			</SVGIcon>
		),
		primaryText: "Download"
	},
	{ divider: true },
	{
		leftIcon: (
			<SVGIcon className="md-text--error">
				<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
			</SVGIcon>
		),
		primaryText: <span className="md-text--error">Delete</span>
	}
];

const KebabMenu = props => (
	<MenuButtonColumn
		{...props}
		icon
		menuItems={menuItems}
		listClassName="tables__with-menus__kebab-list"
	>
		<SVGIcon primary>
			<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
		</SVGIcon>
	</MenuButtonColumn>
);
export default KebabMenu;
