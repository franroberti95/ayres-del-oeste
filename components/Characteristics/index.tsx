// import Swiper core and required modules
import React from 'react';
import { BuildingI, CharacteristicI } from '../Building';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SwapVertIcon from '@mui/icons-material/SwapVert';

const type = {
  'floor': <ApartmentIcon/>,
  'pool': <PoolIcon/>,
  'gym': <FitnessCenterIcon/>,
  'grill': <OutdoorGrillIcon/>,
  'parking': <DirectionsCarIcon/>,
  'lift': <SwapVertIcon/>,
};



const Building = ({building}: {building: BuildingI}) => {
  return <CharacteristicsContainer>
      <CustomTypographys>Características</CustomTypographys>
      <CustomDescription>{building.description}</CustomDescription>
      {
        building?.characteristics?.map( (c, i) =>
            <CharacteristicContainer key={i}>
              {
                type[c.type]
              }
              <CustomTypography variant='subtitle1' align='center'>{c.value}</CustomTypography>
            </CharacteristicContainer>
          )
      }
  </CharacteristicsContainer>
}

const CharacteristicsContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  height: 100%;
  background-color: #23b3a7;
  
`;

const CharacteristicContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom:15px;
  padding-top: 15px;

  border-bottom: 1px solid white;
`;
const CustomTypography = styled.div`
color: #defffa;
font-family: "Monaco", monospace;
text-indent: 15px;
font-size: 16px;
padding-bottom: 0px;
padding-top: 2px;
text-shadow: 1px 1px 2px black;
`;
const CustomDescription = styled.div`
color: #defffa;
font-family: "Monaco", monospace;
border-bottom: 1px solid white;
font-size: 16px;
padding-bottom: 25px;
padding-top: 2px;
text-indent: 25px;
text-shadow: 1px 1px 2px black;
`;

const building = styled.div`
  background-color: #23b3a7;

`
const CustomTypographys = styled.div`
color: white;
font-family: "Monaco", monospace;
font-size: 24px;
padding-bottom: 20px;
margin-bottom: 10px;
padding-top: 2px;
text-shadow: 1px 1px 2px black;


`
export default Building