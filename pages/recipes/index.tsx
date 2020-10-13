import styled from 'styled-components';
import React from "react";
import {useQuery} from "@apollo/client";
import QUERY_RECIPES from "./queryRecipes.graphql"
import Link from "next/link";

const Wrapper = styled.div`
  width: 80%;
  margin: 200px auto;
  max-width: 800px;
`;

const ListItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  border: 2px solid cadetblue;
  cursor: pointer;
`;

const Title = styled.h3`
  margin-left: 50px;
`


export default function Recipes() {
    const {data, loading, error} = useQuery(QUERY_RECIPES);

    // make sure all data is loaded
    if (loading) {
        return <div><p>loading...</p></div>
    }

    // check for errors
    if (error) {
        return <div><p>:( an error happened</p></div>
    }

    return (
        <Wrapper>
            {
                data.recipeCollection.items.map((recipe => (
                    <Link href={`/recipe/${recipe.sys.id}`} key={recipe.sys.id}>
                        <ListItem>
                            <img src={recipe.photo.url} alt={recipe.photo.title}/>
                            <Title>{recipe.title}</Title>
                        </ListItem>
                    </Link>

                )))
            }
        </Wrapper>
    )
}
