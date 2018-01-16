import React from 'react';
import PropTypes from 'prop-types';
import { combineRules } from 'fela';
import { createComponent } from 'react-fela';

/**
 * MOLECULE
 *
 * @returns {XML} -
 */
const Molecule = ({ nodeName, atoms, children }) => {
    nodeName = nodeName || 'div';
    atoms = atoms || [];

    const MoleculeElement = createComponent(combineRules(...atoms), nodeName);

    return (
        <MoleculeElement>{children}</MoleculeElement>
    );
};

Molecule.propTypes = {
    nodeName: PropTypes.string,
    atoms: PropTypes.arrayOf(PropTypes.func),
};

export default Molecule;
