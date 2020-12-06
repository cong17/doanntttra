import React from 'react';

import { PageNewItemContainer } from './styled';

interface InewsItemProps {
    Title: string;
    time: string;
    content: string;
    urlimg: string;
    href: string;

}
const NewsItem: React.FC<InewsItemProps> = (props) => {
    return (
        <PageNewItemContainer>
            <h6 className="Title">{props.Title}</h6>
            <div className="Time">{props.time}</div>
            <div className="content">{props.content}</div>
            <a target="_blank" rel="noopener noreferrer" href={props.href} ><img src={props.urlimg} alt="news"></img></a>

        </PageNewItemContainer>
    );
};

export default NewsItem;
