import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

const Wrapper = createComponent(() => css`
    text-align: center;
`, 'div');

const Note = createComponent(() => css`
    color: darkgrey;
`, 'div');

const FoldingCube = createComponent(() => css`
    margin: 20px auto;
    width: 40px;
    height: 40px;
    position: relative;
    transform: rotateZ(45deg);
`, 'div');

const cube = () => css`
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    transform: scale(1.1);
    
    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backgroundColor: darkgrey;
        transformOrigin: 100% 100%;
        animation: 2.4s infinite linear both;
    }
`;

const cube2 = () => css`
    transform: scale(1.1) rotateZ(90deg);

    :before {
        animation-delay: 0.3s;
    }
`;

const cube3 = () => css`
    transform: scale(1.1) rotateZ(270deg);

    :before {
        animation-delay: 0.9s;
    }
`;

const cube4 = () => css`
    transform: scale(1.1) rotateZ(180deg);

    :before {
        animation-delay: 0.6s;
    }
`;

const cubeAnimation = () => ({
    ':before': {
        animationName: {
            '0%, 10%': {
                transform: 'perspective(140px) rotateX(-180deg)',
                opacity: '0',
            },
            '25%, 75%': {
                transform: 'perspective(140px) rotateX(0deg)',
                opacity: '1',
            },
            '90%, 100%': {
                transform: 'perspective(140px) rotateY(180deg)',
                opacity: '0',
            },
        }
    }
});

const Cube = createComponent(cube, 'div');
const AnimatedCube = createComponent(cubeAnimation, Cube);
const AnimatedCube2 = createComponent(cube2, AnimatedCube);
const AnimatedCube3 = createComponent(cube3, AnimatedCube);
const AnimatedCube4 = createComponent(cube4, AnimatedCube);

/**
 * LOADING INDICATOR
 *
 * @returns {XML} -
 */
const LoadingIndicator = ({ note, hideNote }) => {
    return (
        <Wrapper>
            <FoldingCube>
                <AnimatedCube />
                <AnimatedCube2 />
                <AnimatedCube3 />
                <AnimatedCube4 />
            </FoldingCube>

            {note && !hideNote && (
                <Note>{note}</Note>
            )}
        </Wrapper>
    );
};

LoadingIndicator.propTypes = {
    note: PropTypes.string,
    hideNote: PropTypes.bool,
};

export default LoadingIndicator;
