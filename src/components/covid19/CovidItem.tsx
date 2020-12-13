import React from 'react';
import { Covid19ItemContainer } from './styled';

interface ICovid19ItemProps {
    location: string;
    newc: string;
    pedding: string;
    ok: string;
    die: string;

}
const Covid19Item: React.FC<ICovid19ItemProps> = (props) => {
    return (
        <Covid19ItemContainer>
            <h6>{props.location}</h6>
            <span>{props.newc}</span>
            <span> {props.pedding}</span>
            <span>{props.ok}</span>
            <span> {props.die}</span>
        </Covid19ItemContainer>
    );
};

export default Covid19Item;
