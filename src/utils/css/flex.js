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
