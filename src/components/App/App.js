import React from 'react';
import { createComponent } from 'react-fela';

const title = () => ({
    fontSize: '64px',
    color: '#6699ff'
});

const Title = createComponent(title, 'h1');

/**
 * APP
 *
 * @returns {XML} -
 */
const App = () => {
    return (
        <div>
            <Title>fela Styles \o/</Title>
        </div>
    );
};

export default App;
