import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Inmobiliarias = () => <InmobiliariasContainer>
    <Link href={`https://www.scarabelpropiedades.com`}>
        <Image
            height={60}
            width={150}
            alt={"Scarabel"}
            src={"/images/scarabel-logo.webp"}
        />
    </Link>
    <Link href={`https://www.beltraminopropiedades.com.ar`}>
        <Image
            height={60}
            width={150}
            alt={"Beltramino"}
            src={"/images/beltramino-logo.webp"}                        />
    </Link>
</InmobiliariasContainer>

const InmobiliariasContainer = styled.div`
  background-color: black;
  padding-top: 16px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InmobiliariasSpacer = styled.div`
  height: 16px;
`;
export default Inmobiliarias
