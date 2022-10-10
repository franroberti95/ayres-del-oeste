import React from 'react';
import styled from "styled-components";

const Header = () =>
    <HeaderContainer>
        <HeaderLogoContainer>
            <HeaderLogo src={'https://www.romaydesarrollos.com.ar/wp-content/themes/romay/images/logo-romay.svg'}></HeaderLogo>
        </HeaderLogoContainer>
        <HeaderItem>
            Desarrollos
        </HeaderItem>
        <HeaderItem>
            Nosotros
        </HeaderItem>
        <HeaderItem>
            Contacto
        </HeaderItem>
    </HeaderContainer>;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 14px 0 14px 0;
`;
const HeaderItem = styled.div`
`;
const HeaderLogoContainer = styled.div`
  max-width: 200px;
`;
const HeaderLogo = styled.img`
  width: 100%;
`;

export default Header;