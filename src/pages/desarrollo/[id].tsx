import {useRouter} from "next/router";
import Head from "next/head";
import React from "react";
import {buildings} from "@/data/buildings";
import BuildingSlider from "@/components/BuildingSlider";
import Text from "@/components/Text";
import HeaderSpacer from "@/components/HeaderSpacer";
import styled from "styled-components";
import Characteristics from "@/components/Characteristics";
import BuildingMap from "@/components/BuildingMap";
import BuildingPlane from "@/components/BuildingPlane";
import Script from "next/script";
import Nav from "../../components/Nav";

const API_KEY = "AIzaSyC_78TT-bbs_yk_AnpgEjyCRv7TX_IVxHk";

const Building = () => {
    const router = useRouter()
    const { id } = router.query
    const buildingData = buildings.find( b => b.title.toLowerCase() === id?.toLowerCase());

    return <>
        <Head>
            <title>{buildingData?.title}</title>
            <meta name="description" content="Ayres del oeste" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script src={"https://maps.googleapis.com/maps/api/js?key=" + API_KEY}></Script>
        <Nav title={buildingData?.title}/>
        <HeaderSpacer/>
        <BuildingSlider data={buildingData}/>
        <Characteristics data={buildingData}/>
        <BuildingMap data={buildingData}/>
        <TextContainer>
            <Text noMargin color="white" align="center" element="h3" fontSize={32}>Planos</Text>
        </TextContainer>
        <BuildingPlane data={buildingData}/>
    </>
}

const TextContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
`;

export default Building
