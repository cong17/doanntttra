import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './app.styled';
import Home from './pages/Home';
import PageNew from './pages/PageNew';
import { AppStore } from './store/appStore';
import { darkTheme, lightTheme } from './theme';
import SwipeableViews from 'react-swipeable-views';
import { Offline, Online } from "react-detect-offline";

const App: React.FC = () => {
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Online>
        <SwipeableViews>
          <Home />
          <PageNew />
        </SwipeableViews></Online>
      <Offline>Vui lòng kết nối với internet để sử dụng ứng dụng này</Offline>


    </ThemeProvider>
  );
};

export default App;
