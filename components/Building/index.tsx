import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {Grid, Typography} from "@mui/material";
import { gsap } from "gsap";

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
        <Typography variant="h4" gutterBottom align={'center'}>
            Desarrollos inmobiliarios
        </Typography>
        <BuildingsContainer>
            <Grid container spacing={2}>
                {
                    buildings.map ( (b, i) =>
                        <Building
                            building={b}
                            index={i}
                        />
                    )
                }
            </Grid>
        </BuildingsContainer>
    </BuildingsMainContainer>
}

const Building = ({building, index}) => {
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

    return <Grid ref={gridRef} item xs={ index % 3 === 0 ? 4:8}>
        <BuildingContainer
            image={building.images[0]}>
            <Typography variant="h5" color={'white'}>
                {building.title}
            </Typography>
        </BuildingContainer>
    </Grid>;
};

const BuildingsContainer = styled.div`
    padding: 16px;
`;
const BuildingContainer = styled.div`
  padding: 40px;
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
  background-image: url('${props => props.image}');
  
  &:hover{
    cursor: pointer;
    
  }
`;

const BuildingTitle = styled.h1`
  text-align: center;
`;

const BuildingsMainContainer = styled.div`
`;
const BuildingImageTitle = styled.p`
  color: white;
  margin: 0;
  font-weight: bold;
    font-size: 24px;
`;
export default Buildings;