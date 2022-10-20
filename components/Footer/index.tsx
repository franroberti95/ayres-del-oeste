import React from 'react';
import styled from "styled-components";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () =>
    <FooterContainer container spacing={2}>
        <Grid item xs={3}>
            <Title>
                Contactanos
            </Title>
            <ContactInfo
                icon={CallIcon}
                text={'11-44277073'}
            />
            <ContactInfo
                icon={WhatsAppIcon}
                text={'11-24577070'}
            />
            <ContactInfo
                icon={MailIcon}
                text={'asdfsd@gmail.com'}
            />
        </Grid>
        <ImageContainer item xs={3}>
            <FooterImage
                src={'https://3ddesarrollistas.com/wp-content/uploads/2020/11/3d-logo-blanco.png'}
            />
            <Text>
                Somos una empresa familiar que hace mas de 15 años diseña, dirige y desarrolla edificios en altura, residenciales agregando valor a la ciudad. Te invitamos a conocer nuestras opciones.
            </Text>
        </ImageContainer>
        <Grid item xs={6}>
        </Grid>

    </FooterContainer>;

const ContactInfo = ({icon, text}) =>
    <ContactInfoContainer>
        {React.createElement(icon, {style: {fill: 'white'}})}
        <TitleDetail>{text}</TitleDetail>
    </ContactInfoContainer>;

const ImageContainer = styled(Grid)`
  text-align: center;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  
`;

const FooterContainer = styled(Grid)`
  background-color: #05055b;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const FooterImage = styled.img`
  align-items: center;
  justify-content: center;
 `;
const Text = styled.p`
    color: white;    
`;
const Title = styled.h2`
  color: white;
`;
const TitleDetail = styled.h4`
    color: white;    
  margin: 0;
  margin-left: 10px;
`;



export default Footer