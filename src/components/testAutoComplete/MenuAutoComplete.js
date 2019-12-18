import React, { useState } from "react";
// import Fuse from "fuse.js";
import { Autocomplete } from "react-md";
import sampleData from "./sampleData";

const MenuAutocomplete = () => {
	const [lang, setLang] = useState("");

	const handleChange = (val, e) => {
		setLang(val);
	};

	const handleSelect = (val, valNdx, matches) => {
		setLang(val);
	};

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
		</div>
	);
};
export default MenuAutocomplete;
