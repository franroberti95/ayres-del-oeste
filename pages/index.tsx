import type { NextPage } from 'next'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {useEffect, useState} from "react";
import Buildings from "../components/Building";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Coments from '../components/Coments';
import BuildingMap from "../components/BuildingMaps";
import styled from 'styled-components';

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
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await getBuilding(db);
    // Pass data to the page via props
    return { props: { buildings: JSON.parse(JSON.stringify(res)) } }
}

const Home: NextPage = ({buildings}) => {
  return (
    <div>
      <Header/>
      <BuildingMap buildings={buildings}/>
      <DividerContainer/>
      <Buildings
          buildings={buildings}
      />
      <Coments

      />
        <DividerContainer/>
      <Footer

      />
    </div>
  )
}

const DividerContainer = styled.div`
  margin-top: 24px;
  color: red;
`;

export default Home
