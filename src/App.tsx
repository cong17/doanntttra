import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './app.styled';
import Home from './pages/Home';
import PageNew from './pages/PageNew';
import { AppStore } from './store/appStore';
import { darkTheme, lightTheme } from './theme';
import SwipeableViews from 'react-swipeable-views';
const App: React.FC = () => {
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <SwipeableViews>
        <Home />
        <PageNew />
      </SwipeableViews>

    </ThemeProvider>
  );
};

export default App;
