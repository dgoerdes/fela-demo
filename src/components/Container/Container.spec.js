import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';

describe('Container', () => {

    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Container />, div);
    });
});
