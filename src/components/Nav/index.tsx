import React from "react"
import styled from "styled-components"
import Logo from "./logo.svg"
import colors from "@/constants/colors";
import Link from "next/link";
import Text from "../Text"

const Nav = ({title}) =>
    <NavContainer>
        <Link href={`/`}>
            <Logo width={150} height={40}/>
        </Link>
        <Text color="white" fontSize={16} noMargin>{title}</Text>
        <DummyDiv></DummyDiv>
        {
            /*<MenuIcon fill="white" height={24} width={24}/>*/
        }
    </NavContainer>

const DummyDiv = styled.div`
  @media screen and (min-width: 800px) {
    width: 150px;
  }
`;

const NavContainer = styled.div`
  padding: 16px;
  padding-bottom: 15px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  background-color: ${colors.secondary};
  align-items: center;
  position: fixed;
  width: calc(100% - 32px);
  top: 0;
  z-index: 10;
  border-bottom: 1px solid ${colors.primary};
`;

export default Nav
