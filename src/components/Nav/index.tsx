import React, {useEffect} from "react"
import styled from "styled-components"
import Logo from "./logo.svg"
import colors from "@/constants/colors";
import Link from "next/link";
import Text from "../Text"
import sizes from "../../constants/sizes";

const Nav = ({title}) => {
    useEffect( () => {
        window.addEventListener("scroll", resizeHeaderOnScroll);
    }, [] );

    const resizeHeaderOnScroll = () => {
        if (document.body.scrollTop > sizes.navPxHeight || document.documentElement.scrollTop > sizes.navPxHeight) {
            document.getElementById("navbar").style.backgroundColor = colors.secondary;
            document.getElementById("navbar").style.borderBottom = `1px solid ${colors.primary}`;
        } else {
            document.getElementById("navbar").style.backgroundColor = "black";
            document.getElementById("navbar").style.borderBottom = `none`;
        }
    }

    return <NavContainer id="navbar">
        <Link href={`/`}>
            <Logo width={150} height={40}/>
        </Link>
        <Text color="white" fontSize={16} noMargin>{title}</Text>
        <DummyDiv></DummyDiv>
        {
            /*<MenuIcon fill="white" height={24} width={24}/>*/
        }
    </NavContainer>
}

const DummyDiv = styled.div`
  display: none;
  @media screen and (min-width: 800px) {
    display: block;
    width: 150px;
  }
`;

const NavContainer = styled.div`
  padding: 16px;
  padding-bottom: 15px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  background-color: black;
  align-items: center;
  position: fixed;
  width: calc(100% - 32px);
  top: 0;
  z-index: 10;
  transition: background-color 1s;
`;

export default Nav
