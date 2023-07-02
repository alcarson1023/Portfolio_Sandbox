import React, { useState } from "react";

import { Button, Container, Title} from '../styles/navBar_style.js'

const NavBar = ({ themeToggle, isDarkTheme, currentPage, setCurrentPage }) => {

  const handleNavClick = (page) => {
    setCurrentPage(page)
  }

  return (
    <Container>
    <Button value="HomePage" onClick={() => handleNavClick('HomePage')}>Home</Button>
    <Button value="RouteFinder" onClick={() => handleNavClick('RouteFinder')}>Route Finder</Button>
    <Button value="Sentiment" onClick={() => handleNavClick('Sentiment')}>Sentiment Analysis</Button>
    <Button value="Selenium" onClick={() => handleNavClick('Selenium')}>Selenium</Button>
    {/* <Button $primary>Route Finder</Button> */}
    <Button onClick={themeToggle}>
      {isDarkTheme ? "Enable Light Theme" : "Enable Dark Theme"}
    </Button>
    </Container>
  );
};

export default NavBar;
