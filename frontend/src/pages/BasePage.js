import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/Themes";
import {
  FixedContent,
  PageContainer,
  ShadowBox,
} from "../styles/basePage_style.js";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import RouteFinder from "./RouteFinder";
import HomePage from "./HomePage";
import Sentiment from "./Sentiment";
import Selenium from "./Selenium";
import Liquid from "./Liquid";

const pageComponents = {
  HomePage: HomePage,
  RouteFinder: RouteFinder,
  Sentiment: Sentiment,
  Selenium: Selenium,
  Liquid: Liquid,
};

const MainPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const themeToggle = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const [currentPage, setCurrentPage] = useState("HomePage");
  const CurrentPage = pageComponents[currentPage];

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <FixedContent>
        <GlobalStyles />
        <Header />
        <NavBar
          isDarkTheme={isDarkTheme}
          themeToggle={themeToggle}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          // style={{ "z-index": "-999", "background-color": "orange" }}
        />
      </FixedContent>
        <ShadowBox />
        <PageContainer>
          <CurrentPage />
        </PageContainer>
    </ThemeProvider>
  );
};

export default MainPage;
