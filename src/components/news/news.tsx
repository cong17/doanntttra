import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/appStore';
import NewsItem from './newsItem';
import { PageContainer, SectionTitle, SectionTimeUpdate } from './styled';

const PageNews: React.FC = () => {
    const { news, isInitial } = useSelector((state: AppStore) => ({
        loading: state.app.isLoading,
        isInitial: state.app.isInitial,
        news: state.weather.extendedWeatherData,
    }));

    if (isInitial) return <></>;
    let dateTime = new Date()
    return (
        <div>
            <SectionTitle>Các bài báo Tổng hợp</SectionTitle>

            <PageContainer>
                <NewsItem
                    Title="Dự báo thời tiết 3/12, miền Bắc có nơi rét đậm, rét hại"
                    time="THỜI SỰ 03/12/2020 "
                    content="Dự báo thời tiết 3/12, ảnh hưởng của không khí lạnh tăng cường mạnh, ở Bắc Bộ và Bắc Trung Bộ trời tiếp tục rét, vùng núi có nơi rét đậm, rét hại."
                    urlimg="https://vnn-imgs-f.vgcloud.vn/2020/12/02/20/du-bao-thoi-tiet-3-12-mien-bac-co-noi-ret-dam-ret-hai.jpg"
                    href="https://vietnamnet.vn/vn/thoi-su/du-bao-thoi-tiet-hom-nay-3-12-mien-bac-co-noi-ret-dam-ret-hai-694353.html"
                />
                <NewsItem
                    Title="Dự báo thời tiết 3/12, miền Bắc có nơi rét đậm, rét hại"
                    time="THỜI SỰ 03/12/2020 "
                    content="Dự báo thời tiết 3/12, ảnh hưởng của không khí lạnh tăng cường mạnh, ở Bắc Bộ và Bắc Trung Bộ trời tiếp tục rét, vùng núi có nơi rét đậm, rét hại."
                    urlimg="https://vnn-imgs-f.vgcloud.vn/2020/12/02/20/du-bao-thoi-tiet-3-12-mien-bac-co-noi-ret-dam-ret-hai.jpg"
                    href="https://vietnamnet.vn/vn/thoi-su/du-bao-thoi-tiet-hom-nay-3-12-mien-bac-co-noi-ret-dam-ret-hai-694353.html"
                />
                <NewsItem
                    Title="Dự báo thời tiết 3/12, miền Bắc có nơi rét đậm, rét hại"
                    time="THỜI SỰ 03/12/2020 "
                    content="Dự báo thời tiết 3/12, ảnh hưởng của không khí lạnh tăng cường mạnh, ở Bắc Bộ và Bắc Trung Bộ trời tiếp tục rét, vùng núi có nơi rét đậm, rét hại."
                    urlimg="https://vnn-imgs-f.vgcloud.vn/2020/12/02/20/du-bao-thoi-tiet-3-12-mien-bac-co-noi-ret-dam-ret-hai.jpg"
                    href="https://vietnamnet.vn/vn/thoi-su/du-bao-thoi-tiet-hom-nay-3-12-mien-bac-co-noi-ret-dam-ret-hai-694353.html"
                />
                <NewsItem
                    Title="Dự báo thời tiết 3/12, miền Bắc có nơi rét đậm, rét hại"
                    time="THỜI SỰ 03/12/2020 "
                    content="Dự báo thời tiết 3/12, ảnh hưởng của không khí lạnh tăng cường mạnh, ở Bắc Bộ và Bắc Trung Bộ trời tiếp tục rét, vùng núi có nơi rét đậm, rét hại."
                    urlimg="https://vnn-imgs-f.vgcloud.vn/2020/12/02/20/du-bao-thoi-tiet-3-12-mien-bac-co-noi-ret-dam-ret-hai.jpg"
                    href="https://vietnamnet.vn/vn/thoi-su/du-bao-thoi-tiet-hom-nay-3-12-mien-bac-co-noi-ret-dam-ret-hai-694353.html"
                />

                <SectionTimeUpdate>Cập nhật lúc : {dateTime.toLocaleString()}</SectionTimeUpdate>
            </PageContainer>

        </div>

    );
};

export default PageNews;
