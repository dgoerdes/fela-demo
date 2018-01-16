import React from 'react';
import { createComponent } from 'react-fela';
import Headline from '../../components/Headline/Headline';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

const testStyles = () => css`
    > h1 {
        color: red;
    }
    
    @media screen and (max-width: 640px) {
        background: lawngreen;
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

            <LoadingIndicator note="loading ..." />

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
                            pseudo classes and also element and class child selectors.<br />
                            <strong>Use them with caution!</strong>
                        </p>
                    </li>
                    <li>
                        <strong>Keyframes</strong>
                        <p>
                            Keyframes can not be written in CSS syntax as it needs the fela-embedded plugin within a react environment.
                        </p>
                    </li>
                    <li>
                        <strong>What about debugging and reverse engineering style issues?</strong>
                        <p>
                            At a first glance it seems to be impossible to find the style definition of an html element based on the renderd DOM.
                            The atomic classes allow no reverse lookup
                        </p>
                        <p>
                            Once you tracked down the style rules that cause an issue and you know to which DOM Element it is applied,<br />
                            you can search for the related fela component with help of the React Dev Tools.
                        </p>
                        <p>
                            Time consuming and hard process to maintain style issues.
                        </p>
                    </li>
                </ul>
            </div>
        </TestStyles>
    );
};

export default App;
