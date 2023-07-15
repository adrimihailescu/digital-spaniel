import React from "react";
import LandingPage from "./pages/landingPage";
import GlobalStyles from "./styles";
import websiteData from "./fakeCMS/websiteData";

function App() {
  return (
    <>
      <GlobalStyles />
      <LandingPage {...websiteData.content} />
    </>
  );
}

export default App;
