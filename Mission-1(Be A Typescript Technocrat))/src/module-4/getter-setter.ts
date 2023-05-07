class BankAccount1 {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this._balance = balance;
        this.id = id;
        this.name = name;
    }

    // getter

    get balance(): number {
        return this._balance;
    }

    // setter

    set deposite(amount: number) {
        this._balance = this._balance + amount;
    }
}

const myAccount1 = new BankAccount1(444, 'persian', 20);
myAccount1.deposite = 30;
console.log(myAccount1.balance);