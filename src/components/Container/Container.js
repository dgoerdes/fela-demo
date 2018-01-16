import React from 'react';
import PropTypes from 'prop-types';
import { combineRules } from 'fela';
import { createComponent } from 'react-fela';

/**
 * CONTAINER
 *
 * @returns {XML} -
 */
const Container = ({ nodeName, atoms, children }) => {
    nodeName = nodeName || 'div';
    atoms = atoms || [];

    const ContainerElement = createComponent(combineRules(...atoms, () => css`
        width: 94%;
        max-width: 1200px;
        margin: 0 auto 100px;
    `), nodeName);

    return <ContainerElement>{children}</ContainerElement>;
};

Container.propTypes = {
    nodeName: PropTypes.string,
    atoms: PropTypes.arrayOf(PropTypes.func),
};

export default Container;
