import React from 'react';
import { createComponent } from 'react-fela';
import Headline from '../../components/Headline/Headline';

const testStyles = () => css`
    > h1 {
        color: red;
    }
`;

const TestStyles = createComponent(testStyles, 'main');

/**
 * APP
 *
 * @returns {XML} -
 */
const App = () => {
    return (
        <TestStyles>
            <Headline weight={1}>Headline H1</Headline>
            <Headline weight={2}>Headline H2</Headline>
            <Headline weight={3}>Headline H3</Headline>
            <Headline weight={4}>Headline H4</Headline>
            <Headline weight={5}>Headline H5</Headline>
            <Headline weight={6}>Headline H6</Headline>

            <div>
                <ul>
                    <li>
                        <strong>Variables and Settings?</strong>
                    </li>
                    <li>
                        <strong>How to do reset/global styles?</strong>
                        <p>
                            Tried with Shell component by using fela & operator.<br />
                            As this does not work for styles that need to be applied to html and body etc.
                            normalize.css was imported to the index.js in the way create-react-app mentions it.
                        </p>
                        <p>
                            Also using fela & with a lot of subselector bloats the styles and works agains the atomic principles.
                        </p>
                    </li>
                    <li>
                        <strong>How to do element styles?</strong>
                        <p>
                            As <a href="http://fela.js.org/docs/basics/Rules.html">documented here</a> you can use
                            pseudo classes and also element and class child selectors.
                        </p>
                        <p>
                            Use them with caution! And best always try to use > instead of &.
                        </p>
                    </li>
                    <li>
                        <strong>Keyframes</strong>
                    </li>
                </ul>
            </div>
        </TestStyles>
    );
};

export default App;
