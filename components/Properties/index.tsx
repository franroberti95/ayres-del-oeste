import React from 'react';
import styled from "styled-components";

interface PropertyI {
    images: string[];
    characteristics: {type: string, value: string}[];
    title: string;
    description: string;
    location: {latitude: string, longitude: string};
    status: 'A ESTRENAR' | 'USADO'  | 'POZO' | 'ALQUILER' | 'VENTA'
}

const Properties = ({properties}: {properties: PropertyI[]}) => {
    return <PropertiesContainer>
        {
            properties.map ( p =>

            )
        }
    </PropertiesContainer>
}

const PropertiesContainer = styled.div`
`;

export default Properties;