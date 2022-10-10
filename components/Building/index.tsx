import React from 'react';
import styled from "styled-components";

interface BuildingI {
    images: string[];
    characteristics: {type: string, value: string}[];
    title: string;
    description: string;
    location: {latitude: string, longitude: string};
    floorPlan: string[];
}

const Buildings = ({buildings}: {buildings: BuildingI[]}) => {
    return <BuildingsMainContainer>
        <BuildingTitle>Desarrollos inmobiliarios</BuildingTitle>
        <BuildingsContainer>
            {
                buildings.map ( p =>
                    <BuildingContainer image={p.images[0]}>
                        <BuildingImageTitle>
                            {p.title}
                        </BuildingImageTitle>
                    </BuildingContainer>
                )
            }
        </BuildingsContainer>
    </BuildingsMainContainer>
}

const BuildingsContainer = styled.div`
    display: flex;
  flex-direction: row;
`;
const BuildingContainer = styled.div`
  padding: 40px;
  margin: 30px;
  border-radius: 8px;
  height: 300px;
  width: 450px;
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  background-color: lightgray;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const BuildingTitle = styled.h1`
  text-align: center;
`;

const BuildingsMainContainer = styled.div``;
const BuildingImageTitle = styled.p`
  color: white;
  margin: 0;
  font-weight: bold;
    font-size: 24px;
`;
export default Buildings;