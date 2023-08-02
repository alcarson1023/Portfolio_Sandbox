import React from "react";

import HomePageRight from './right-descriptive/HomePageRight'
import {BothPanels, LeftPanel, RightPanel} from "../styles/basePage_style.js";

const HomePage = () => {
  return (
    <BothPanels>
    <h1 className="header">Welcome To My Site!</h1>
    <LeftPanel>
    This is Home Page Left!
    </LeftPanel>
    <RightPanel>
    <HomePageRight />
    </RightPanel>
    </BothPanels>
  );
};

export default HomePage;
