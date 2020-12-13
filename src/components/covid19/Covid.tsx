import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/appStore';
import Covid19Item from './CovidItem';
import { Covid19Container, Covid19Items, SectionTitle, SectionTimeUpdate } from './styled';

const Covid19: React.FC = () => {
    const { Covid19, isInitial } = useSelector((state: AppStore) => ({
        loading: state.app.isLoading,
        isInitial: state.app.isInitial,
        Covid19: state.weather.covidData,
    }));



    if (isInitial) return <></>;

    return (
        <Covid19Container>
            <SectionTitle>Thống kê tình hình covid</SectionTitle>
            <Covid19Items>
                <div style={{}}>

                    <Covid19Item
                        key={1}
                        location={Covid19.VN.TitleVN}
                        newc={Covid19.VN.SoCaNhiemVN}
                        pedding={Covid19.VN.DangDieuTriVN}
                        ok={Covid19.VN.KhoiVN}
                        die={Covid19.VN.TuVongVN}
                    />
                    <Covid19Item
                        key={2}
                        location={Covid19.World.TitleWorld}
                        newc={Covid19.World.SoCaNhiemWorld}
                        pedding={Covid19.World.DangDieuTriWorld}
                        ok={Covid19.World.KhoiWorld}
                        die={Covid19.World.TuVongWorld}
                    />
                </div>
            </Covid19Items>
            <SectionTimeUpdate>Cập nhật lúc : {Covid19.TimeUpdate}</SectionTimeUpdate>
        </Covid19Container>
    );
};

export default Covid19;
