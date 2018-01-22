/*
 * TEXT ALIGNMENT
 */
export const flex = ({ align, justify, evenSplit }) => {
    const styles = {
        display: 'flex',
    };
    if (align) styles.alignItems = align;
    if (justify) styles.justifyContent = justify;

    if (evenSplit) {
        styles['> *'] = {
            width: `${100/evenSplit}%`
        };
    }

    return () => styles;
};

export const flexWrap = ({ type }) => {
    const styles = css`
        flex-wrap: ${type || 'wrap'};
    `;

    return () => styles;
};
