import React, { useState } from "react";
// import Fuse from "fuse.js";
import { Autocomplete, SelectField } from "react-md";
import sampleData from "./sampleData";

const SelectWithAutoComplete = () => {
	const [lang, setLang] = useState("");

	const handleChange = (val, e) => {
		setLang(val);
	};

	const handleSelect = (val, valNdx, matches) => {
		setLang(val);
	};

	const haystack = ["Apple", "Banana", "Orange"];
	const list = Autocomplete.fuzzyFilter(haystack, "An"); // ['Banana', 'Orange'];
	console.log(list);
	/**
	 *
	 *
	 *
	 * Use Select with Autocomplete filter to help with select
	 * filter sampleData by hand in select list
	 * NO AUTOCOMPLETE!!!
	 *
	 *
	 */

	return (
		<div>
			<Autocomplete
				id="programming-languages"
				label="Programming languages"
				placeholder="Javascript"
				data={sampleData}
				value={lang}
				onChange={handleChange}
				onAutocomplete={handleSelect}
				filter={Autocomplete.fuzzyFilter}
			/>
			<SelectField id="test" />
		</div>
	);
};
export default SelectWithAutoComplete;
