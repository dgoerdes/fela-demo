import React from 'react';
import { createComponent } from 'react-fela';
import Headline from '../../components/Headline/Headline';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import Container from '../../components/Container/Container';
import Molecule from '../../components/Molecule/Molecule';
import { marginBottom, marginTop } from '../../utils/css/spacings';
import { textCenter } from '../../utils/css/alignment';
import { flex } from '../../utils/css/flex';

const myStyle = () => ({
    color: 'red',
    fontSize: '48px',
    fontWeight: '300',
    textAlign: 'center',
});
const MyStyle = createComponent(myStyle, 'div');

/**
 * APP
 *
 * @returns {XML} -
 */
const App = () => {
    return (
        <main>
            <MyStyle>
                THIS IS FELA!
            </MyStyle>

            <Container>
                <Molecule atoms={[
                    marginTop('60px'),
                    marginBottom('30px'),
                    textCenter(),
                ]}>
                    <a href="http://fela.js.org">
                        <img src="http://fela.js.org/docs/res/logo.png" alt="fela"/>
                    </a>
                </Molecule>

                <Headline atoms={[textCenter()]} weight={1}>
                    Let`s get into some CSS in JS!
                </Headline>
            </Container>

            <Container>
                <Headline weight={2}>Introduction</Headline>
                <p>
                    This is a demo project to have a closer look on fela and CSS in JS as a whole.<br />
                    Everything was built from scratch to check out the following topics and see how the workflow will look like.
                </p>

                <Headline weight={3} atoms={[marginTop('30px')]}>Table of Contents</Headline>
                <ul>
                    <li>Setup and getting started</li>
                    <li>CSS Variables and Settings</li>
                    <li>Reset/Global Styles</li>
                    <li>Keyframes, MQ and Fonts</li>
                    <li>Debugging and Maintenance</li>
                    <li>Conclusion</li>
                </ul>
            </Container>

            <Container>
                <Headline weight={2}>Setup and Getting Started</Headline>
                <p>
                    The initial setup was quite simple and easy to manage.<br />
                    Everything needed was easy to find in the <a href="http://fela.js.org/docs/guides/UsageWithReact.html">documentation</a>,
                    and the whole setup took about 40 minutes to see the first styles applied by fela on the page.
                </p>
                <p>
                    <strong>But</strong>, within those 40 minutes the first “what the fu**“ moment happend.
                </p>

                <Headline weight={4}>The Problem</Headline>
                <p>
                    When I started typing the first fela style rule like <code>ff [TAB] Arial [TAB]</code> I quickly realized all the cool IDE
                    magic was gone.
                </p>
                <ul>
                    <li>fela is based on JS objects</li>
                    <li>CSS properties need to be in camelcase</li>
                    <li>No CSS code highlighting</li>
                    <li>No Emmet autocompletion</li>
                    <li>etc.</li>
                </ul>

                <Headline weight={4}>The Solution</Headline>
                <p>
                    <strong><a href="https://www.npmjs.com/package/babel-plugin-css-to-js">Babel`s CSS to JS PLugin!</a></strong><br />
                    Now we can simply write CSS within a template literal and babel takes care it is transpiled to a JS object.
                </p>
            </Container>

            <Container>
                <Headline weight={2}>Variables and Settings</Headline>
                <p>Well ... as expected, welcome to JavaScript!</p>
            </Container>

            <Container>
                <Headline weight={2}>Reset/Global Styles</Headline>
                <p>
                    As <a href="http://fela.js.org/docs/basics/Rules.html">documented here</a> you can use
                    pseudo classes and also element and class child selectors.<br />
                    <strong>Use them with caution!</strong>
                </p>
                <p>
                    So at first I tried to add some kind of shell component which contains all those global styles like normalize.css<br />
                    I quickly realized it won`t work like this.<br />
                </p>

                <Headline weight={4}>The Problem</Headline>
                <p>
                    On one side there is way to style the <code>html</code> or <code>body</code> tags. On the other side it bloats the
                    styles generated by fela and works against the atomic design pattern in some way.
                </p>

                <Headline weight={4}>The Solution</Headline>
                <p>
                    Adding a good old fashioned stylesheet to the index.<br />
                    In case of this React setup the stylesheet is imported to the index.js and looped through webpack etc.
                </p>
                <p>
                    <strong>Any ideas?!</strong>
                </p>
            </Container>

            <Container>
                <Headline weight={2}>Keyframes, MQ`s and Fonts</Headline>
                <p>
                    Keyframes can not be written in CSS syntax as it needs the <a href="https://github.com/rofrischmann/fela/tree/master/packages/fela-plugin-embedded">fela-embedded plugin</a> to somehow work.<br />
                    It also took me quite some time (~2 hours) to get a keyframe animation running.<br />
                    But once you know how it works, it is not that complicated to use.
                </p>
            </Container>

            <Container>
                <Headline weight={2}>Debugging and Maintenance</Headline>
                <strong>What about debugging and reverse engineering style issues?</strong>
                <p>
                    At a first glance it seems to be impossible to find the style definition of a HTML element based on the rendered DOM.
                    The atomic classes allow no reverse lookup.
                </p>
                <p>
                    Once you tracked down the style rules that cause an issue and you know to which DOM element it is applied,
                    you can search for the related fela component with help of the React Dev Tools.
                </p>
                <p>
                    It feels time consuming and hard to maintain style issues.
                </p>
            </Container>

            <Container>
                <Headline weight={2}>Conclusion</Headline>
                <p>
                    Once you know how everything works, it seems to be a nice new way of writing CSS.<br />
                    Beside some edge cases, that might come along the way when thinking of old browsers and ugly CSS workarounds,
                    I assume there won`t be any trouble while using fela and it is very much straight forward.
                </p>
                <p>
                    The only thing which I really don`t like are those meaningless classes on the HTML.<br />
                    It just feels like, <strong>meh!</strong>
                </p>
            </Container>

            <Container>
                <Headline weight={2}>Further Research</Headline>
                <ul>
                    <li>Where is my Stylesheet?</li>
                    <li>Performance during run time</li>
                    <li>Server-side rendering</li>
                    <li>Better debugging tools</li>
                </ul>
            </Container>

            <Container atoms={[flex({ align: 'center', evenSplit: 2 })]}>
                <div>
                    <Headline weight={1}>Headline H1</Headline>
                    <Headline weight={2}>Headline H2</Headline>
                    <Headline weight={3}>Headline H3</Headline>
                    <Headline weight={4}>Headline H4</Headline>
                    <Headline weight={5}>Headline H5</Headline>
                    <Headline weight={6}>Headline H6</Headline>
                </div>

                <LoadingIndicator note="loading ..." />
            </Container>
        </main>
    );
};

export default App;
