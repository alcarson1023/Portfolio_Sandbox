import React from "react";

import HomePageRight from './right-descriptive/HomePageRight'
import {BothPanels, LeftPanel, RightPanel, Header} from "../styles/basePage_style.js";

const HomePage = () => {
  return (
    <>
    <Header><h1>Welcome To My Site!</h1></Header>
    {/* <h1 className="header">Welcome To My Site!</h1> */}
    <BothPanels>
    <LeftPanel>
    Thanks for stopping by! I hope you like what you see, and I'm always looking to improve. Feel free to use the "Contact Me" button if you have any feedback or if you'd like to discuss a project.
    </LeftPanel>
    <RightPanel>
    <HomePageRight />
    </RightPanel>
    </BothPanels>
    </>
  );
};

export default HomePage;
