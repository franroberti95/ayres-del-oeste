import React from "react"
import styled from "styled-components"
import MenuIcon from "./menu.svg"
import Logo from "./logo.svg"
import colors from "@/constants/colors";
import Link from "next/link";
//import Text from "../Text"
//         <Text color="white" fontSize={24} noMargin>Ayres del Oeste</Text>
const Nav = () =>
    <NavContainer>
        <Link href={`/`}>
            <Logo width={150} height={40}/>
        </Link>
        {
            /*<MenuIcon fill="white" height={24} width={24}/>*/
        }
    </NavContainer>

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
