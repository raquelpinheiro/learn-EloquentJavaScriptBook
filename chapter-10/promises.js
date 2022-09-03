
let done = true;

const isItDoneYeat = new Promise((resolve, reject) => {

    if (done) {
        const workDone = 'Here is the thing built';
        resolve(workDone);
    } else {
        const why = 'Still working on something else';
        reject(why);
    }

});

const checkIfItsDone = () => {
    setTimeout(() => console.log('1 await'), 5000);
    isItDoneYeat.then(r => {
        setTimeout(() => console.log('1.1 executing...'), 3500);
        console.log(`1.2 ${r}`);
    }
    ).catch(e => { console.error(e) });

    console.log('1.3 Its done')
};

console.log('---start---');
checkIfItsDone();
console.log('---end---');

console.log('---start again---');
const checkIfItsDoneAsync = async () => {
    setTimeout(() => console.log('2 await'), 5000);
    await isItDoneYeat.then(r => {
        setTimeout(() => console.log('2.1 executing...'), 3000);
        console.log(`2.2 ${r}`);
    }).catch(e => { console.error(e) });
    console.log('2.3 - Its done');
}
console.log('---end again---');

checkIfItsDoneAsync();