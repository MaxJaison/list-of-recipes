import styled from 'styled-components'
import React from "react";

const Wrapper = styled.div`
      width: 80%;
      margin: 0 auto;
      max-width: 800px;
    `
const ListItem = styled.div`
      display: flex;
      justify-content: space-around;
    `

export default function Recipes() {
    return (
        <Wrapper>
            <ListItem>
                <img src="" alt=""/>
                <h3>Title</h3>
            </ListItem>
        </Wrapper>
    )
}
