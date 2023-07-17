import React from "react";
import LandingPage from "./pages/landingPage";
import GlobalStyles from "./styles";
import websiteData from "./fakeCMS/websiteData";
import { SiteLayout } from "./modules";
import { Provider } from "react-redux";
import { store } from "./reduxStore/store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <SiteLayout {...websiteData.navigation}>
        <LandingPage {...websiteData.content} />
      </SiteLayout>
    </Provider>
  );
}

export default App;
