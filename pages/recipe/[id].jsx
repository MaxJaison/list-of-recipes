import React from "react";
import styled from 'styled-components';
import {useQuery} from "@apollo/client";
import QUERY_RECIPE from "./queryRecipe.graphql";
import {useRouter} from "next/router";

const Wrapper = styled.div`
  width: 80%;
  margin: 200px auto;
  max-width: 1000px;
  display: flex;
`;

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

    console.log(data)

    return <Wrapper>
        <img src={data.recipe.photo.url} alt={data.recipe.photo.title}/>
        <div>
            <h2>{data.recipe.title}</h2>
            <p>{data.recipe.description}</p>
            <p>by <strong>{data.recipe.chef.name}</strong></p>
            <p>tags: {data.recipe.tagsCollection.items.length ?
                data.recipe.tagsCollection.items.map(tag => <span>{tag.name}</span>) :
                'No Tags'
            }</p>
        </div>
    </Wrapper>
}
