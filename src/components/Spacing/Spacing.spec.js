import React from 'react';
import ReactDOM from 'react-dom';
import Spacing from './Spacing';

describe('Spacing', () => {

    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Spacing />, div);
    });
});
