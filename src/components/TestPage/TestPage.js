import React from "react";
// import RegisterFormContainer from "components/forms/RegisterFormContainer";
// import PersonalInfo from "components/PersonalInfo/PersonalInfo";
import TestAutoComplete from "components/testAutoComplete/TestAutoComplete";
// import DynamicContentTable from "components/TestDataTables/DynamicContentTable";
// import { TabsContainer, Tabs, Tab } from "react-md";
// import {
// 	TabbedUI,
// 	TabList,
// 	Tab,
// 	TabPanels,
// 	TabPanel
// } from "components/TabbedUI/TabbedUI";

// const TestPage = props => {
// 	return (
// 		<div className="test-page" style={{ padding: "1rem 2rem" }}>
// 			<h2>Amazing Test Page</h2>
// 			<TabbedUI>
// 				<TabList>
// 					<Tab>Wonderful Form</Tab>
// 					<Tab>Incredible Personal Info</Tab>
// 				</TabList>
// 				<TabPanels>
// 					<TabPanel>
// 						{" "}
// 						<RegisterFormContainer />
// 					</TabPanel>
// 					<TabPanel>
// 						<PersonalInfo />
// 					</TabPanel>
// 				</TabPanels>
// 			</TabbedUI>
// 		</div>
// 	);
// };

const TestPage = props => {
	return (
		<div className="test-page" style={{ padding: "1rem 2rem" }}>
			<h2>Auto Complete Test</h2>
			<TestAutoComplete />
		</div>
	);
	//return (
	// 	<div className="test-page" style={{ padding: "1rem 2rem" }}>
	// 		<h2>Amazing Test Page</h2>
	// 		<TabsContainer panelClassName="md-grid" colored>
	// 			<Tabs tabId="test-page">
	// 				<Tab label="Wonderful Form">
	// 					<RegisterFormContainer />
	// 				</Tab>
	// 				<Tab label="Incredible Personal Info">
	// 					<PersonalInfo />
	// 				</Tab>
	// 			</Tabs>
	// 		</TabsContainer>
	// 	</div>
	// );
};

export default TestPage;
