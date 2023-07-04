class Group {
    constructor() {
        this.values = [];
    }
    add(value) {
        if (!this.values.includes(value)) {
            this.values.push(value);
        }
    }
    has(value) {
        return this.values.includes(value);
    }
    delete(value) {
        let index = this.values.indexOf(value);
        if (index >= 0) {
            this.values.splice(index, 1);
        }
    }
    static from(values) {
        let newGroup = new Group();
        for (let i = 0; i < values.length; i++) {
            newGroup.add(values[i]);
        }
        return newGroup;
    }
}

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
    }
    next() {
        if (this.index == this.group.values.length)
            return { done: true };

        let value = { value: this.group.values[this.index] };

        this.index++;
        return { value, done: false };
    }
}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
};

let groupIterator = Group.from(["a", "b", "c", "d"]);
for (let { value } of groupIterator) {
    console.log(value);
}