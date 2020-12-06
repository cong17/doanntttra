import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Forecast from '../components/Forecast/Forecast';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Spinner from '../components/ui/Spinner/Spinner';
import Weather from '../components/Weather/Weather';
import Covid19 from '../components/covid19/Covid';
import { AppStore } from '../store/appStore';

const Home = () => {
  const { loading } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
  }));

  return (
    <>
      {loading && <Spinner />}
      <Header />
      <Search />
      <Weather />
      <Forecast />
      <Covid19 />
      <Footer />
    </>
  );
};

export default Home;
