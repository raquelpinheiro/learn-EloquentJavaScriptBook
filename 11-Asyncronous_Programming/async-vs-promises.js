
const logAsyc = async () => {
    setTimeout(() => console.log('Waiting 1'), 2000)
    return 'Logging test 1';
};

logAsyc().then(r => console.log(r));

const logPromise = () => {
    setTimeout(() => console.log('Waiting 2'), 2500)
    return Promise.resolve('Logging test 2');
};

logPromise().then(r => console.log(r));

const logNewPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => console.log('Waiting 3'), 1000)
        resolve('logging test 3');
    });
};

const waitAll = async () => {
    await logAsyc();
    await logPromise();
    await logNewPromise();
}

logNewPromise().then(r => console.log(r));
