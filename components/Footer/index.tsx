import React from 'react';
import styled from "styled-components";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Typography from '@mui/material/Typography';
import Link from 'next/link'

const Footer = () =>
    <FooterContainer container spacing={2}>
        <ContactContainer item xs={12} md={3}>
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
                text={'aaaaaaaa@gmail.com'}
            />
        </ContactContainer>
        <ImageContainer item xs={12} md={5}>
                       <Text>
                Somos una empresa que hace mas de 15 años diseña, dirige y desarrolla edificios residenciales en altura, agregando valor a la ciudad, mejorando la seguridad y calidad de vida a nuestros clientes. Te invitamos a conocer nuestras opciones
            
            </Text>
            <FooterImageLogo
                src={'http://drive.google.com/uc?export=view&id=1-jOZ6xL-eerhg-iDGLm5XJyYJO5NpmrT'}
            />
        </ImageContainer>
         <InmobiliariaConteiner item xs={12} md={4}>
            <Title>
                Inmobiliarias asociadas
            </Title>
             
            <Link href={`https://www.scarabelpropiedades.com`}>
            <FooterImage
                src={'https://www.scarabelpropiedades.com/_next/image?url=https%3A%2F%2Fstatic1.adinco.net%2F7777_r%2Flogo_u_5f0dcabe9ddb2.jpg&w=1920&q=75'}
            />
            </Link>

            <Link href={`https://www.beltraminopropiedades.com.ar`}>
            <FooterImage
                src={'https://www.beltraminopropiedades.com.ar/_next/image?url=https%3A%2F%2Fstatic1.adinco.net%2F8868_r%2Flogo_5ec814d6453c3.jpg&w=1920&q=75'}
            />
            </Link>            
         
        </InmobiliariaConteiner>

    </FooterContainer>;

const ContactInfo = ({icon, text}) =>
    <ContactInfoContainer>
        {React.createElement(icon, {style: {fill: 'white'}})}
        <TitleDetail>{text}</TitleDetail>
    </ContactInfoContainer>;


const ContactContainer = styled(Grid)`
@media only screen and (max-width: 768px) {

    display: flex;
    flex-direction: column;
    align-items: center;
  }  
`;

const ImageContainer = styled(Grid)`
  text-align: center;
  margin-top: 20px;
 `;

const InmobiliariaConteiner = styled(Grid)`
  text-align: right;
  @media only screen and (max-width: 768px) {
  text-align: center;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
`;

const FooterContainer = styled(Grid)`
  background-color: #23b3a7;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
   
`;

const FooterImage = styled.img`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px;
  cursor: pointer;  
 `;

const FooterImageLogo = styled.img`
  padding: 0 px;
  height: 85 %;
  width: 85%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin: auto;
`;

const Text = styled.p`
    color: white;    
    text-shadow: 1px 1px 2px black;
    font-size: 17px;
`;

const Title = styled.h2`
  color: #defffa;
  text-shadow: 1px 1px 2px black;  
`;

const TitleDetail = styled.h4`
  color: #defffa;   
  margin: 0;
  margin-left: 10px;
  text-shadow: 1px 1px 2px black;
`;


export default Footer