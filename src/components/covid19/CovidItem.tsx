import React from 'react';
import { Covid19ItemContainer } from './styled';

interface ICovid19ItemProps {
    location: string;
    newc: number;
    pedding: number;
    ok: number;
    die: number;

}
const Covid19Item: React.FC<ICovid19ItemProps> = (props) => {
    return (
        <Covid19ItemContainer>
            <h6>{props.location}</h6>
            <span> Nhiễm mới :{props.newc}</span>
            <span> Điều trị : {props.pedding}</span>
            <span> Khỏi : {props.ok}</span>
            <span> Tử vong : {props.die}</span>
        </Covid19ItemContainer>
    );
};

export default Covid19Item;
