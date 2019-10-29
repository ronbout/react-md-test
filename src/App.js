import React from "react";
import "./styles/css/App.css";

import Highlights from "components/Highlights/Highlights";

const App = () => {
	return (
		<div className="App">
			<Highlights />
		</div>
	);
};

// import WithMenus from "components/DataTables2/WithMenus";

// const App = () => {
// 	return (
// 		<div className="App">
// 			<WithMenus />
// 		</div>
// 	);
// };

//import TestPage from "components/TestPage/TestPage";
// import DynamicContentTable from "components/TestDataTables/TestDataTables";

// const App = () => {
// 	return (
// 		<div className="App">
// 			<DynamicContentTable />
// 		</div>
// 	);
// };

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
