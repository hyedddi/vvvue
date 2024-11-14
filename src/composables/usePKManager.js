const createPKManager = () => {
    let pk = 1;

    return {
        incrementPK: () => {
            pk += 1;
        },
        getPKValue: () => {
            return pk;
        }
    }
}

export const usePKManager = () => {
    return createPKManager();
}