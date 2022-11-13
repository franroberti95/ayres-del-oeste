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

export default ({building}: {building: BuildingI}) => {
  return <CharacteristicsContainer>
      <Typography variant='h4' align='center'>Características</Typography>
      <Typography variant='h6' align='center'>{building.description}</Typography>
      {
        building.characteristics.map( c => 
            <CharacteristicContainer>
              {
                type[c.type]
              }
              <Typography variant='subtitle1' align='center'>{c.value}</Typography>
            </CharacteristicContainer>
          )
      }
  </CharacteristicsContainer>
}

const CharacteristicsContainer = styled.div`
  padding 20px;
`;

const CharacteristicContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom:15px;
  border-bottom: 1px solid grey;
`;