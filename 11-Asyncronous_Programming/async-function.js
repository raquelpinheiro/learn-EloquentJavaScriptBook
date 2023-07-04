
const doSomethingPromisse = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('Task 1 finished'), 4000);
    });
};

const doSomethingPromiseAsync = async () => {
    console.log(await doSomethingPromisse());
	console.log('After Task 1');
};

const doSomethingAsync = async () => {
	setTimeout(() => console.log('Task 2 finished'), 1000);
	console.log('After Task 2');
};

console.log('---Start---');
doSomethingPromiseAsync();
doSomethingAsync();
console.log('---Final---')