/* AutocompleteCompany.js */
import React, { useState } from "react";
import { Autocomplete } from "react-md";
import sampleData from "./sampleData";
import dataFetch from "assets/js/dataFetch";

const API_COMPANY_SEARCH = "companies/search";

const AutocompleteCompany = props => {
	const [company, setCompany] = useState("");
	const [results, setResults] = useState([]);
	const [autoResults, setAutoResults] = useState([]);

	window.apiUrl = "http://localhost/3sixd/api/";

	const handleSearch = async searchVal => {
		const apiQuery = `&name=${searchVal}`;

		let results = await dataFetch(API_COMPANY_SEARCH, apiQuery);
		if (results.error) {
			console.log("Fetch error: ", results);
		} else {
			const data = results.map(r => {
				return r.name;
			});
			setResults(results ? results : []);
			setAutoResults(data ? data : []);
		}
	};
	const handleChange = (val, e) => {
		setCompany(val);
		handleSearch(val);
	};

	const handleSelect = (val, valNdx, matches) => {
		setCompany(val);
		console.log(results[valNdx]);
	};

	return (
		<div>
			<div>
				<Autocomplete
					id="company"
					label="Company Name"
					placeholder="Abc Towing"
					data={autoResults}
					value={company}
					onChange={handleChange}
					onAutocomplete={handleSelect}
					filter={null}
				/>
			</div>
			<div>
				<h3>Company: {company ? company : "None selected"}</h3>
			</div>
		</div>
	);
};

export default AutocompleteCompany;
