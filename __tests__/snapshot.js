import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../pages/index';
import RecipeIndex from '../pages/recipe/index';
import InfoBlock from '../components/InfoBlcok';

it('renders homepage unchanged', () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders recipe unchanged', () => {
    const tree = renderer.create(<RecipeIndex />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders InfoBlock unchanged', () => {
    const recipe = {
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
    };

    const tree = renderer.create(<InfoBlock recipe={recipe} />).toJSON();
    expect(tree).toMatchSnapshot();
});
