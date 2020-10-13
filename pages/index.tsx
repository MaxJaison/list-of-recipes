import styled from 'styled-components'
import React from "react";

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Title>Marley Spoon App</Title>
  )
}
