import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/appStore';
import NewsItem from './newsItem';
import { PageContainer, SectionTitle, SectionTimeUpdate } from './styled';

const PageNews: React.FC = () => {
    const { news, isInitial } = useSelector((state: AppStore) => ({
        loading: state.app.isLoading,
        isInitial: state.app.isInitial,
        news: state.weather.NewsBaomoiData.cacbaibao,
    }));

    if (isInitial) return <></>;
    let dateTime = new Date()
    return (
        <div>
            <SectionTitle>Các bài báo Tổng hợp</SectionTitle>

            <PageContainer>
                {news.map((item, i) => {
                    console.log(item)
                    return (
                        <NewsItem
                            key={i}
                            Title={item.contentbaiviet}
                            time={item.timebaiviet}
                            content={item.contentbaiviet}
                            urlimg={item.imgbaiviet}
                            href={item.linkbaiviet}
                        />
                    );
                })}




                <SectionTimeUpdate>Cập nhật lúc : {dateTime.toLocaleString()}</SectionTimeUpdate>
            </PageContainer>

        </div>

    );
};

export default PageNews;
