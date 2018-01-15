import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import molecule from '../../utils/css/molecule';

const headline = () => css`
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-style: normal;
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
`;

const h4 = () => css`
    font-size: 24px;
`;

const h5 = () => css`
    font-size: 16px;
    font-weight: bold;
`;

const h6 = () => css`
    font-size: 16px;
    font-weight: bold;
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
const Headline = ({ weight, children }) => {
    const HeadlineTag = createComponent(
        molecule([
            headline,
            getWeightedStyle(weight)
        ]),
        `h${weight}`
    );

    return <HeadlineTag>{children}</HeadlineTag>
};

Headline.propTypes = {
    weight: PropTypes.number
};

export default Headline;
