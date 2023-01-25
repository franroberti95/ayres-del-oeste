import Head from 'next/head'
import Text from '../components/Text'
import BuildingsBackground from "@/components/BuildingsBackground";
import React, {useEffect, useState} from "react";
import Logo from "../components/Nav/logo-small.svg"
import styled from "styled-components";
import colors from "@/constants/colors";
import {buildings} from "@/data/buildings";
import Image from "next/image";
import MarkerIcon from "@/icons/Marker";
import Link from "next/link";
import { FaArrowDown } from 'react-icons/fa';
import Inmobiliarias from "@/components/Inmobiliarias";
import {unoptimizedImages} from "../constants/unoptimizedImages";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayres del oeste</title>
        <meta name="description" content="Ayres del oeste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Nav title=""/>
        <BuildingsBackground>
          <CenterContainer>
              <Logo fill={colors.secondary} width={250} height={180}/>
              <Text noMargin color="white" align="center" element="h3" fontSize={32}>Diseño y Calidad</Text>
              <Text noMargin color="white" align="center" element="h4" fontSize={16}>Tu nuevo hogar te espera!</Text>
              <SeeMoreButton>
                  <Text color="white" noMargin align="center" element="p" fontSize={16}>Ver desarrollos inmobiliarios</Text>
              </SeeMoreButton>
              <FaArrowDown fill={colors.secondary} size={24}/>
          </CenterContainer>
      </BuildingsBackground>
        <Buildings/>
        <AboutUsContainer>
            <Text color="white" align="center">Somos una empresa que hace mas de 15 años diseña, dirige y desarrolla edificios residenciales en altura, agregando valor a la ciudad, mejorando la seguridad y calidad de vida a nuestros clientes. Te invitamos a conocer nuestras opciones.</Text>
            <Inmobiliarias/>
        </AboutUsContainer>
    </>
  )
}

const AboutUsContainer = styled.div`
  background-color: black;
  padding: 16px;
`;

const Buildings = () => {
    return <BuildingsContainer>
        <BuildingTitleContainer>
            <Text align="center" color="white" fontSize={24} element="h3" noMargin>Desarrollos</Text>
        </BuildingTitleContainer>
        <BuildingsInnerContainer>
            {
                buildings.map( b =>
                    <div>
                        <Building key={b.title} data={b}/>
                        <BuildingSpacer/>
                    </div>
                )
            }
        </BuildingsInnerContainer>
    </BuildingsContainer>
}

const Building = ({data}) => {
    const firstImage = data.images.find( b => b.value === 0 || b.value === 1 );
    return <Link href={`/desarrollo/${data.title}`}><BuildingContainer>
        <Image unoptimized={unoptimizedImages} alt={data.title} src={firstImage.photo} fill style={{borderRadius: 8}}/>
        <BuildingFadeOverlay>
            <TitleContainer>
                <MarkerIcon/>
                <TitleDivider/>
                <Text color="white" noMargin>{data.title}</Text>
            </TitleContainer>
        </BuildingFadeOverlay>
    </BuildingContainer></Link>
}

const BuildingsInnerContainer = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
  }

`;

const TitleDivider = styled.div`
  width: 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const BuildingSpacer = styled.div`
  height: 24px;
`;

const BuildingTitleContainer = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`;

const BuildingContainer = styled.div`
  height: 250px;
  width: calc(100vw - 32px);
  position: relative;
  margin: auto;
  border-radius: 8px;

  @media screen and (min-width: 800px) {
    width: calc(30vw - 32px);
  }
`;

const BuildingFadeOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,rgba(0,0,0,0.2) 80%,${colors.primary} 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
`;

const SeeMoreButton = styled.div`
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.quaternary};
  width: fit-content;
  margin: auto;
  padding: 16px;
  margin-top: 40px;
  margin-bottom: 8px;
`;

const CenterContainer = styled.div`
  text-align: center;
`;

const BuildingsContainer = styled.div`
    text-align: center;
  background-color: ${colors.secondary};
  margin-top: 0;
  padding-top: 0;
`;
