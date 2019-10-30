/* SelectMenu.js */
import React from "react";
import { Button, TableCardHeader } from "react-md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectMenu = ({ count, onDeleteClick, onMoveClick }) => (
	<TableCardHeader
		title="Highlights"
		visible={count > 0}
		contextualTitle={`${count} item${count > 1 ? "s" : ""} selected`}
		actions={[
			<Button
				flat={false}
				key="move"
				onClick={onMoveClick}
				tooltipLabel="Move selected rows"
				tooltipDelay={300}
				tooltipPosition="left"
			>
				<FontAwesomeIcon
					style={{ color: "#651fff" }}
					size="lg"
					fixedWidth
					icon="arrows-alt-v"
				/>
			</Button>,
			<Button
				icon
				className="md-text--error"
				key="delete"
				onClick={onDeleteClick}
				tooltipLabel="Remove selected rows"
				tooltipDelay={300}
				tooltipPosition="left"
			>
				delete
			</Button>
		]}
	></TableCardHeader>
);

export default SelectMenu;
