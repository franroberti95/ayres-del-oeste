import type { NextPage } from 'next'
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import Slideshow from '../../components/BuildingPage';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {useEffect, useState} from "react";
import { BuildingI } from '../../components/Building';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Characteristics from '../../components/Characteristics';
import BuildingMap from '../../components/BuildingMap';
import Plane from '../../components/Plane';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIgaK9z7WOw42DTuqgHPS-dU4__eSp3Yw",
  authDomain: "constructora-preview.firebaseapp.com",
  projectId: "constructora-preview",
  storageBucket: "constructora-preview.appspot.com",
  messagingSenderId: "721490673486",
  appId: "1:721490673486:web:8f76127fc0e290b97d281f"
};

/**
 *  interface PropertyI {
 *      images: string[];
 *      characteristics: {type: string, value: string}[];
 *      title: string;
 *      description: string;
 *      location: {latitude: string, longitude: string};
 *  }
 *
 *
 * **/


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export async function getBuilding(db: any) {
  const citiesCol = collection(db, 'building');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => ({id: doc.id,...doc.data()}));
  return cityList;
}

// This gets called on every request
export async function getServerSideProps({query}) {
    // Fetch data from external API
    const res = await getBuilding(db);
    // Pass data to the page via props
    console.log(res)

    return { props: { building: JSON.parse(JSON.stringify(res.find(i => i.id === query.id))), buildings: JSON.parse(JSON.stringify(res)) } } 
}

interface BuildingPageI {
  building: BuildingI
  buildings: BuildingI[]
}

const Home: NextPage = ({building, buildings}: BuildingPageI) => {
    return (
        <div>
            <Header buildings={buildings}/>
            <TitleContainer>
              <TitleContainerTest>
                {building.title}
              </TitleContainerTest>
            </TitleContainer>

            <Slideshow building={building}/> 
            <Spacer></Spacer>
            <Grid container>
              <Grid item xs={12} md={4}>
                <Characteristics building={building}/>
              </Grid>
              <Grid item xs={12} md={4}>
                <BuildingMap b={building}/>
              </Grid>
              <Grid item xs={12} md={4}>
                <Plane b={building}/>
              </Grid>
            </Grid>
          
            <Footer />
        </div>
    )
}

const Spacer = styled.div`height: 2vh`;

const TitleContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const TitleContainerTest = styled.h2`
    color: white;
    text-align: center;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-size: 60px;
    letter-spacing: 4.4px;
    word-spacing: 1.2px;
    font-weight: 500;
    text-decoration: none;
    font-style: normal;
    font-variant: small-caps;
    text-transform: capitalize;
    text-shadow: 1px 1px 2px black;
`;

export default Home
