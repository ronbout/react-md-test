import React, { useState } from "react";
import { Button, Toolbar, Autocomplete } from "react-md";

const SearchBar = ({
	handleNavClick,
	title = "",
	buttonProps = {},
	hidden = true,
	...props
}) => {
	const [searching, setSearching] = useState(!hidden);

	const handleSearchClick = () => {
		if (this.state.searching) {
			setSearching(false);
			searching();
		} else {
			setSearching(true);
		}
	};

	let barTitle = "Search Test";
	if (searching) {
		barTitle = (
			<Autocomplete
				id="search-pastries"
				block
				data={["front-end", "javascript"]}
				dataLabel="name"
				dataValue="key"
				placeholder="Search value"
				toolbar
				autoFocus
			/>
		);
	}

	return (
		<Toolbar
			id="search-toolbar"
			fixed={false}
			colored
			nav={
				<Button key="nav" icon onClick={searching ? handleNavClick : null}>
					{searching ? "arrow_back" : "menu"}
				</Button>
			}
			actions={
				<Button key="action" icon onClick={handleSearchClick} {...buttonProps}>
					{searching ? "close" : "search"}
				</Button>
			}
			title={barTitle}
			titleId="search"
			{...props}
		/>
	);
};

export default SearchBar;
