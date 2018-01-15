const molecule = (atoms) => {
    const atomStyles = atoms.map((atom) => atom());
    return () => Object.assign({}, ...atomStyles);
};

export default molecule;
