import React from 'react';
import Headline from '../../components/Headline/Headline';

/**
 * APP
 *
 * @returns {XML} -
 */
const App = () => {
    return (
        <div>
            <Headline weight={1}>Headline H1</Headline>
            <Headline weight={2}>Headline H2</Headline>
            <Headline weight={3}>Headline H3</Headline>
            <Headline weight={4}>Headline H4</Headline>
            <Headline weight={5}>Headline H5</Headline>
            <Headline weight={6}>Headline H6</Headline>

            <div>
                <ul>
                    <li>How to do reset/global styles?</li>
                    <li>How to do element styles?</li>
                    <li>Keyframes?!</li>
                </ul>
            </div>
        </div>
    );
};

export default App;
