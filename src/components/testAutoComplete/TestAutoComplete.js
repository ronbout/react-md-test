/* TestAutoComplete.js */
import React from "react";
import MenuAutocomplete from "./MenuAutoComplete";
import AutocompleteCompany from "./AutocompleteCompany";

const TestAutoComplete = props => {
	return (
		<div>
			<h1>test auto complete</h1>
			<h2>Menu Auto Complete</h2>
			<MenuAutocomplete />
			<h2>Autocomplete of company name</h2>
			<AutocompleteCompany />
		</div>
	);
};

export default TestAutoComplete;
