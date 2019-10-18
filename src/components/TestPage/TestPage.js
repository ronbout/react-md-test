import React from "react";
import RegisterFormContainer from "components/forms/RegisterFormContainer";
import PersonalInfo from "components/PersonalInfo/PersonalInfo";
import {
	TabbedUI,
	TabList,
	Tab,
	TabPanels,
	TabPanel
} from "components/TabbedUI/TabbedUI";

const TestPage = props => {
	return (
		<div className="test-page" style={{ padding: "1rem 2rem" }}>
			<h2>Amazing Test Page</h2>
			<TabbedUI>
				<TabList>
					<Tab>Wonderful Form</Tab>
					<Tab>Incredible Personal Info</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						{" "}
						<RegisterFormContainer />
					</TabPanel>
					<TabPanel>
						<PersonalInfo />
					</TabPanel>
				</TabPanels>
			</TabbedUI>
		</div>
	);
};

export default TestPage;
