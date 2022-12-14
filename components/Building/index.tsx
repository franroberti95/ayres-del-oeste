import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {Grid, Typography} from "@mui/material";
import { gsap } from "gsap";
import MapIcon from '@mui/icons-material/Place';
import Link from 'next/link'

export interface CharacteristicI {
    type: string;
    value: string;
}

export interface BuildingI {
    images: {photo: string, value: number}[];
    characteristics: CharacteristicI[];
    title: string;
    description: string;
    location: {latitude: string, longitude: string};
    floorPlan: string[];
    locationName: string;
    order: number;
    id: number | string;
}



const Buildings = ({buildings}: {buildings: BuildingI[]}) => {
    const orderedBuildings = buildings.sort( (b1,b2) => b1.order > b2.order ? 1:-1);
    return <BuildingsMainContainer>

        <TitleContainer>
            <Title>
                Desarrollos inmobiliarios 
            </Title>
        </TitleContainer>
        <BuildingsContainer>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                        <Building
                                            building={orderedBuildings[0]}
                                        />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Building
                                        building={orderedBuildings[1]}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Building
                                building={orderedBuildings[2]}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Building
                        building={orderedBuildings[3]}
                    />
                </Grid>
            </Grid>
        </BuildingsContainer>
    </BuildingsMainContainer>
}

const Building = ({building}: {building: BuildingI}) => {
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            /*
                gsap.registerPlugin(ScrollTrigger);
                ScrollTrigger.addEventListener('scrollStart', () => {
                gsap.fromTo(
                    gridRef.current,
                    {
                        y: index % 3 === 0 ? 5:-5
                    },
                    {
                        y:  index % 3 === 0 ? -5:5
                    }
                );
            })*/
        });
        return () => ctx.revert();
    },[])

    if(!building) return null;
    
    const firstImage = building.images.reduce( (prevValue, currentValue) => {
        if(prevValue.value < currentValue.value)
            return prevValue
        return currentValue
    }, building.images[0]);

    console.log('firstImage', firstImage, building)
    return <a href={`/building/${building.id}`}>
        <BuildingContainer
            ref={gridRef}
            image={firstImage.photo}>
            <Typography variant="h5" color={'white'}>
                {building.title}
            </Typography>
            <BuildingIconContainer>
                <MapIcon style={{color: 'lightgrey', height: 16}}/>
                <Typography variant="caption" color={'lightgrey'}>
                    {building.locationName}
                </Typography>
            </BuildingIconContainer>
        </BuildingContainer>
    </a>;
};

const BuildingIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BuildingsContainer = styled.div`
    padding: 16px;
  
`;
const BuildingContainer = styled.div`
  padding: 40px;
  height: 100%;
  min-height: 300px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  background-image: url('${props => props.image}');
  transition: .5s all;
  &:hover{
    cursor: pointer;
    transform: translateY(-15px);
    box-shadow: 0 10px 16px 0 rgb(255 255 255 / 20%), 0 6px 20px 0 rgb(255 255 255 / 19%) !important;
  }
`;

const BuildingTitle = styled.h1`
  text-align: center;
`;

const BuildingsMainContainer = styled.div`
background-color: #23b3a7;

`;
const BuildingImageTitle = styled.p`
  color: white;
  margin: 0;
  font-weight: bold;
    font-size: 24px;
`;

const TitleContainer = styled.div`
  height: 64px;
  align-items: center;
  justify-content: center;
  display: flex;
  background: #23b3a7;
`;
const Title = styled.h1`
  color: white;
  text-shadow: 1px 1px 2px black;
  
`;


export default Buildings;
