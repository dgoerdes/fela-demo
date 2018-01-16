import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';

/**
 * SPACING
 *
 * @returns {XML} -
 */
const Spacing = ({ type, top, right, bottom, left, unit, children }) => {
    type = type || 'padding';
    unit = unit || 'px';

    const styles = {};
    if (top) styles[`${type}-top`] = `${top}${top !== 0 ? unit : ''}`;
    if (right) styles[`${type}-right`] = `${right}${right !== 0 ? unit : ''}`;
    if (bottom) styles[`${type}-bottom`] = `${bottom}${bottom !== 0 ? unit : ''}`;
    if (left) styles[`${type}-left`] = `${left}${left !== 0 ? unit : ''}`;

    const SpacingWrapper = createComponent(() => styles, 'div');

    return (
        <SpacingWrapper>
            {children}
        </SpacingWrapper>
    );
};

Spacing.propTypes = {
    type: PropTypes.oneOf([
        'margin',
        'padding',
    ]),
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    unit: PropTypes.oneOf([
        'px',
        'em',
        'rem',
        '%',
        'vw',
        'vh',
    ]),
};

export default Spacing;
