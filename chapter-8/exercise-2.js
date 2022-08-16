const box = {
    locked: true,
    unlocked() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    getContent() {
        if (this.locked)
            throw new Error('Locked!');
        return this._content;
    }
};

function withBoxUnlocked(body) {

    try {
        box.unlocked();
        body();
    } catch (e) {
        console.log(`Error: ${e}`)
    } finally {
        box.lock();
    }
}

withBoxUnlocked(function () {
    box.getContent().push('gold piece');
    console.log(`Content box: ${box.getContent().reduce((x, i) => x.concat(i))}`)
});

console.log(`Box locked: ${box.locked}`);

try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}
console.log(`Box locked: ${box.locked}`);
