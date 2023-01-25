import React from 'react'
import styled from "styled-components"
import BuildingImg from "./buildings.svg"
import colors from "@/constants/colors";
import sizes from "@/constants/sizes";

interface BuildingsBackgroundI {
    children: JSX.Element
}

const BuildingsBackground = ({children}: BuildingsBackgroundI) =>
    <MainContainer>
        <div/>
        {children}
        <BuildingImg fill={colors.secondary}/>
    </MainContainer>;

const MainContainer = styled.main`
  //height of navbar
  margin-top: ${sizes.navPxHeight}px;
  height: calc(100vh - ${sizes.navPxHeight}px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

export default BuildingsBackground
