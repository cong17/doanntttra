import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/appStore';
import Covid19Item from './CovidItem';
import { Covid19Container, Covid19Items, SectionTitle, SectionTimeUpdate } from './styled';

const Covid19: React.FC = () => {
    const { Covid19, isInitial } = useSelector((state: AppStore) => ({
        loading: state.app.isLoading,
        isInitial: state.app.isInitial,
        Covid19: state.weather.extendedWeatherData,
    }));

    if (isInitial) return <></>;
    let dateTime = new Date()
    return (
        <Covid19Container>
            <SectionTitle>Thống kê tình hình covid</SectionTitle>
            <Covid19Items>
                <div style={{}}>
                    <Covid19Item
                        key={1}
                        location="Việt Nam"
                        newc={456}
                        pedding={489}
                        ok={10}
                        die={12}
                    />
                    <Covid19Item
                        key={2}
                        location="Thế giới"
                        newc={456}
                        pedding={489}
                        ok={10}
                        die={12}
                    />
                </div>
            </Covid19Items>
            <SectionTimeUpdate>Cập nhật lúc : {dateTime.toLocaleString()}</SectionTimeUpdate>
        </Covid19Container>
    );
};

export default Covid19;
