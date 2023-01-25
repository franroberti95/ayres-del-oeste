import React from "react"
import styled from "styled-components";
import Text from "@/components/Text";
import WhatsAppIcon from "../../icons/Whatsapp"
import PhoneIcon from "../../icons/Phone"
import colors from "@/constants/colors";
import Link from "next/link";

const Footer = () =>
    <FooterContainer>
        <Text noMargin color="white" align="center" element="h3" fontSize={32}>Contactanos</Text>
        <ContactInfoSpacer/>
            <Link href={"tel:+5491144277073"}>
                    <ContactInfo
                    icon={<PhoneIcon/>}
                    text={'11-44277073'}
                    />
            </Link>
        <ContactInfoSpacer/>
            <Link href={"https://wa.link/u1427t"}>

                    <ContactInfo
                        icon={<WhatsAppIcon/>}
                        text={'11-24577070'}
                    />
            </Link>
        <ContactInfoSpacer/>
    </FooterContainer>;

const ContactInfo = ({icon, text}) =>
    <ContactInfoContainer>
        {icon}
        <ContactInfoInnerSpace/>
        <Text color="white" fontSize={14} noMargin>{text}</Text>
    </ContactInfoContainer>;

const ContactInfoInnerSpace = styled.div`
  width: 16px;
`;

const ContactInfoSpacer = styled.div`
  height: 32px;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FooterContainer = styled.div`
  padding: 16px;
  background-color: ${colors.secondary};
        a {
                text-decoration: none;
        }
`;

export default Footer
