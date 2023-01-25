import React from "react"
import styled from "styled-components"
import { Montserrat } from '@next/font/google'

const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
})

interface TextI {
    fontSize?: number
    element?: "p" | "h1" | "h2" | "h3" | "h4"
    align?: "left" | "center" | "right"
    children: string
    color?: string
    noMargin?: boolean
    additionalStyles?: string
}

const Text = ({
    fontSize = 16,
    element = "p",
    align = "left",
    color = "black",
    noMargin = false,
    additionalStyles = "",
    children
}: TextI) => {
    return <TextEl as={element} noMargin={noMargin} additionalStyles={additionalStyles} align={align} color={color} fontSize={fontSize}>{children}</TextEl>
};

const TextEl = styled.p`
  font-family: ${roboto.style.fontFamily};
  font-size: ${props => props.fontSize}px;
  text-align: ${props => props.align};
  color: ${ props => props.color};
  ${props => props.noMargin ? "margin: 0;":""};
  ${props => props.additionalStyles || ""}
`;


export default Text
