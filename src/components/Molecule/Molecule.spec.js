import React from 'react';
import ReactDOM from 'react-dom';
import Molecule from './Molecule';

describe('Molecule', () => {

    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Molecule />, div);
    });
});
