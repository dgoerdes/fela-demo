import React from 'react';
import PropTypes from 'prop-types';
import { combineRules } from 'fela';
import { createComponent } from 'react-fela';

const headline = () => css`
    margin: 0;
    font-style: normal;
    font-weight: 300;
`;

const h1 = () => css`
    font-size: 72px;
    
    @media screen and (max-width: 600px) {
        font-size: 10px;
    }
`;

const h2 = () => css`
    font-size: 64px;
`;

const h3 = () => css`
    font-size: 36px;
    font-weight: 400;
`;

const h4 = () => css`
    font-size: 28px;
    font-weight: 400;
`;

const h5 = () => css`
    font-size: 20px;
    font-weight: 400;
`;

const h6 = () => css`
    font-size: 20px;
    font-weight: 400;
`;

const getWeightedStyle = (weight) => {
    const weightedStyles = [];
    weightedStyles.push(h1);
    weightedStyles.push(h2);
    weightedStyles.push(h3);
    weightedStyles.push(h4);
    weightedStyles.push(h5);
    weightedStyles.push(h6);

    return weightedStyles[weight - 1] || null;
};

/**
 * HEADLINE
 *
 * @returns {XML} -
 */
const Headline = ({ weight, atoms, children }) => {
    atoms = atoms || [];

    const HeadlineTag = createComponent(
        combineRules (
            headline,
            getWeightedStyle(weight),
            ...atoms
        ),
        `h${weight}`
    );

    return <HeadlineTag>{children}</HeadlineTag>
};

Headline.propTypes = {
    weight: PropTypes.number,
    atoms: PropTypes.arrayOf(PropTypes.func),
};

export default Headline;
