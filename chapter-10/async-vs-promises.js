
const logAsyc = async () => {
    return 'Logging test';
};

logAsyc().then(r => console.log(r));

const logPromise = () => {
    return Promise.resolve('Logging test 2');
};

logPromise().then(r => console.log(r));

const logNewPromise = () => {
    return new Promise((resolve) => {
        resolve('logging');
    });
};

logNewPromise().then(r => console.log(r));
