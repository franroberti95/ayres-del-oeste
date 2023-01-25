import React from "react"
import styled from "styled-components";
import Text from "@/components/Text";
import colors from "@/constants/colors";
import { MdApartment } from 'react-icons/md';
import { MdPool } from 'react-icons/md';
import { MdFitnessCenter } from 'react-icons/md';
import { MdOutdoorGrill } from 'react-icons/md';
import { MdDirectionsCar } from 'react-icons/md';
import { MdSwapVert } from 'react-icons/md';

const type = {
    'floor': <MdApartment/>,
    'pool': <MdPool/>,
    'gym': <MdFitnessCenter/>,
    'grill': <MdOutdoorGrill/>,
    'parking': <MdDirectionsCar/>,
    'lift': <MdSwapVert/>,
};

const Characteristics = ({data}) =>
    <CharacteristicsContainer>
        <Text align="center" color="white" fontSize={24} element="h4">Características</Text>
        <Text color="white" fontSize={14} element="p">{data?.description}</Text>
        {
            data?.characteristics?.map( (c, i) =>
                <Characteristic key={i} text={c.value} icon={type[c.type]} />
            )
        }
    </CharacteristicsContainer>

const Characteristic = ({text, icon}) =>
    <CharacteristicContainer>
        {React.cloneElement(icon, {fill: "white", size: 24})}
        <CharacteristicSpacer/>
        <Text color="white" fontSize={14} element="p" additionalStyles={'max-width:80%;'}>{text}</Text>
    </CharacteristicContainer>

const CharacteristicSpacer = styled.div`
  width: 24px;
`;

const CharacteristicContainer = styled.div`
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const CharacteristicsContainer = styled.div`
  padding: 16px;
  background-color: ${colors.secondary};
  padding-bottom: 48px;
`;

export default Characteristics
