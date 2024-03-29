/* FlatOrIconButton.jsx */
import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-md";

const FlatOrIconButton = ({ mobile, children, ...props }) => (
	<Button
		icon={mobile}
		flat={!mobile}
		primary
		tooltipLabel={mobile ? children : null}
		{...props}
	>
		{mobile ? null : children}
	</Button>
);

FlatOrIconButton.propTypes = {
	mobile: PropTypes.bool,
	children: PropTypes.node.isRequired
};

export default FlatOrIconButton;
