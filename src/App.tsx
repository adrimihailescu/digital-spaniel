import React from "react";
import LandingPage from "./pages/landingPage";
import GlobalStyles from "./styles";
import websiteData from "./fakeCMS/websiteData";
import { SiteLayout } from "./modules";

function App() {
  return (
    <>
      <GlobalStyles />
      <SiteLayout {...websiteData.navigation}>
        <LandingPage {...websiteData.content} />
      </SiteLayout>
    </>
  );
}

export default App;
