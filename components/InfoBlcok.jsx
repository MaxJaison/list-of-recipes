import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
    margin-left: 40px;
`;

const Tag = styled.span`
    border: 2px solid dodgerblue;
    border-radius: 5px;
    padding: 2px 4px;
    margin-right: 5px;
`;

export default function InfoBlock({ recipe }) {
    return (
        <Info>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p>
                by <strong>{recipe.chef.name}</strong>
            </p>
            <p>
                tags:{' '}
                {recipe.tagsCollection.items.length
                    ? recipe.tagsCollection.items.map((tag) => <Tag key={tag.name}>{tag.name}</Tag>)
                    : 'No Tags'}
            </p>
        </Info>
    );
}
