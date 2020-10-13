import React from "react";
import styled from 'styled-components';
import {useQuery} from "@apollo/client";
import QUERY_RECIPE from "./queryRecipe.graphql";
import {useRouter} from "next/router";
import Link from "next/link";
import InfoBlcok from "../../components/InfoBlcok";

const Wrapper = styled.div`
  width: 80%;
  margin: 200px auto;
  max-width: 1000px;
  ;
`;

const Anchor = styled.a`
  padding: 5px 10px;
  background: green;
  color: white;
  cursor: pointer;
`


const RecipeDiv = styled.div`
  display: flex;
  margin-top: 40px;
`

export default function Recipe() {
    const router = useRouter()
    const {id} = router.query

    const {data, loading, error} = useQuery(QUERY_RECIPE, {variables: {id: id}});

    // make sure all data is loaded
    if (loading) {
        return <div><p>loading...</p></div>
    }

    // check for errors
    if (error) {
        return <div><p>:( an error happened</p></div>
    }

    return <Wrapper>
        <Link href="/recipes"><Anchor>Back to recipes</Anchor></Link>
        <RecipeDiv>
            <img src={data.recipe.photo.url} alt={data.recipe.photo.title}/>
            <InfoBlcok recipe={data.recipe}/>
        </RecipeDiv>
    </Wrapper>
}
