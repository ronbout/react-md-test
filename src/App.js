import React from "react";
import "./styles/css/App.css";

import TestPage from "components/TestPage/TestPage";
//import DynamicContentTable from "components/TestDataTables/TestDataTables";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowsAltV, faCogs } from "@fortawesome/free-solid-svg-icons";

// import Highlights from "components/Highlights/Highlights";
library.add(faArrowsAltV, faCogs);

// const App = () => {
// 	return (
// 		<div className="App">
// 			<Highlights />
// 		</div>
// 	);
// };

// import WithMenus from "components/DataTables2/WithMenus";

// const App = () => {
// 	return (
// 		<div className="App">
// 			<WithMenus />
// 		</div>
// 	);
// };

const App = () => {
	return (
		<div className="App">
			<TestPage />
		</div>
	);
};

// test all-purpose setForm hooks for setting up standard forms
// const App = () => {
// 	/**
// 	 *
// 	 * set this up as a 2 tabbed page.
// 	 * Steal from the Personal Info display section
// 	 * Originally, create with tabbed ui
// 	 *
// 	 *
// 	 */
// return (
// 	<div className="App">
// 		<TestPage />
// 	</div>
// );
//};

export default App;
