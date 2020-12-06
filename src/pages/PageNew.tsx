import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Spinner from '../components/ui/Spinner/Spinner';
import PageNews from '../components/news/news';
import { AppStore } from '../store/appStore';

const PageNew = () => {
    const { loading } = useSelector((state: AppStore) => ({
        loading: state.app.isLoading,
    }));

    return (
        <>
            {loading && <Spinner />}
            <Header />
            <PageNews />
            <Footer />
        </>
    );
};

export default PageNew;
