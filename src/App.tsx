import React from "react";
import LandingPage from "./pages/landingPage";
import GlobalStyles from "./styles";
import websiteData from "./fakeCMS/websiteData";
import { SiteLayout } from "./modules";
import { Provider } from "react-redux";
import { store } from "./reduxStore/store";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
