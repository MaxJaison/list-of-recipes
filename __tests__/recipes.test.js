import React from 'react';
import Index from '../pages/recipes/index';
import { MockedProvider } from '@apollo/client/testing';
import { gql } from '@apollo/client';
import TestRenderer from 'react-test-renderer';

const QUERY_RECIPES = gql`
    query {
        recipeCollection(where: { chef: { name_exists: true } }) {
            items {
                sys {
                    id
                }
                title
                photo {
                    title
                    url(transform: { width: 150 })
                }
                chef {
                    name
                }
                tagsCollection {
                    items {
                        name
                    }
                }
            }
        }
    }
`;

const mocks = [
    {
        request: {
            query: QUERY_RECIPES
        },
        result: {
            data: {
                recipeCollection: {
                    items: [
                        {
                            sys: { id: '2E8bc3VcJmA8OgmQsageas', __typename: 'Sys' },
                            title: 'Grilled Steak & Vegetables with Cilantro-Jalapeño Dressing',
                            photo: {
                                title: 'SKU1503 Hero 102 1 -6add52eb4eec83f785974ddeac3316b7',
                                url:
                                    'https://images.ctfassets.net/kk2bw5ojx476/3TJp6aDAcMw6yMiE82Oy0K/2a4cde3c1c7e374166dcce1e900cb3c1/SKU1503_Hero_102__1_-6add52eb4eec83f785974ddeac3316b7.jpg?w=150',
                                __typename: 'Asset'
                            },
                            chef: { name: 'Mark Zucchiniberg ', __typename: 'Chef' },
                            tagsCollection: { items: [], __typename: 'RecipeTagsCollection' },
                            __typename: 'Recipe'
                        },
                        {
                            sys: { id: '437eO3ORCME46i02SeCW46', __typename: 'Sys' },
                            title: 'Crispy Chicken and Rice\twith Peas & Arugula Salad',
                            photo: {
                                title: 'SKU1479 Hero 077-71d8a07ff8e79abcb0e6c0ebf0f3b69c',
                                url:
                                    'https://images.ctfassets.net/kk2bw5ojx476/5mFyTozvSoyE0Mqseoos86/fb88f4302cfd184492e548cde11a2555/SKU1479_Hero_077-71d8a07ff8e79abcb0e6c0ebf0f3b69c.jpg?w=150',
                                __typename: 'Asset'
                            },
                            chef: { name: 'Jony Chives', __typename: 'Chef' },
                            tagsCollection: {
                                items: [
                                    { name: 'gluten free', __typename: 'Tag' },
                                    { name: 'healthy', __typename: 'Tag' }
                                ],
                                __typename: 'RecipeTagsCollection'
                            },
                            __typename: 'Recipe'
                        }
                    ],
                    __typename: 'RecipeCollection'
                }
            }
        }
    }
];

it('renders recipes without error', () => {
    TestRenderer.create(
        <MockedProvider mocks={mocks}>
            <Index />
        </MockedProvider>
    );
});

it('should render recipes loading state initially', () => {
    const component = TestRenderer.create(
        <MockedProvider mocks={[]}>
            <Index />
        </MockedProvider>
    );

    const tree = component.toJSON();
    expect(tree.children).toContainEqual('loading...');
});
