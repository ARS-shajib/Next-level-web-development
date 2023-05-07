class Counter {
    static counter: number = 0;

    increment(): number {
        return (Counter.counter = Counter.counter + 1);
    }

    decrement(): number {
        return (Counter.counter = Counter.counter - 1);
    }

    static assign(value: number) {
        Counter.counter = value;
    }
}

const instance1 = new Counter();
const instance2 = new Counter();

console.log(instance1.increment());
console.log(instance2.increment());
Counter.assign(10);
console.log(instance1.increment());
console.log(instance2.decrement());