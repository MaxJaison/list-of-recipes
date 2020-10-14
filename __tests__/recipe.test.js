import React from 'react';
import Index from '../pages/recipe/[id]';
import { MockedProvider } from '@apollo/client/testing';
import { gql } from '@apollo/client';
import TestRenderer from 'react-test-renderer';
import * as nextRouter from 'next/router';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({
    route: '/recipe/2E8bc3VcJmA8OgmQsageas',
    query: '2E8bc3VcJmA8OgmQsageas',
    asPath: ''
}));

const QUERY_RECIPE = gql`
    query GetRecipe($id: String!) {
        recipe(id: $id) {
            title
            photo {
                title
                url(transform: { width: 300 })
            }
            description
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
`;

const mocks = [
    {
        request: {
            query: QUERY_RECIPE,
            variables: {
                id: '2E8bc3VcJmA8OgmQsageas'
            }
        },
        result: {
            data: {
                recipe: {
                    title: 'Grilled Steak & Vegetables with Cilantro-Jalapeño Dressing',
                    photo: {
                        title: 'SKU1503 Hero 102 1 -6add52eb4eec83f785974ddeac3316b7',
                        url:
                            'https://images.ctfassets.net/kk2bw5ojx476/3TJp6aDAcMw6yMiE82Oy0K/2a4cde3c1c7e374166dcce1e900cb3c1/SKU1503_Hero_102__1_-6add52eb4eec83f785974ddeac3316b7.jpg?w=150'
                    },
                    description:
                        'Warmer weather means the ushering in of grill season and this recipe completely celebrates the grill (or grill pan)! Squash and green beans are nicely charred then take a bath in a zesty cilantro-jalapeño dressing. After the steaks are perfectly seared, the same dressing does double duty as a tasty finishing sauce. A fresh radish salad tops it all off for crunch and a burst of color. Cook, relax, and enjoy!',
                    chef: {
                        name: 'Mark Zucchiniberg '
                    },
                    tagsCollection: {
                        items: []
                    }
                }
            }
        }
    }
];

it('renders recipe without error', () => {
    TestRenderer.create(
        <MockedProvider mocks={mocks}>
            <Index />
        </MockedProvider>
    );
});

it('should render recipe loading state initially', () => {
    const component = TestRenderer.create(
        <MockedProvider mocks={[]}>
            <Index />
        </MockedProvider>
    );

    const tree = component.toJSON();
    expect(tree.children).toContainEqual('loading...');
});
