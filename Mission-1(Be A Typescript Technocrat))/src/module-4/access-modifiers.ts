class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this._balance = balance;
        this.id = id;
        this.name = name;
    }

    getBalance() {
        console.log(`My Current Balance is : ${this._balance}`);
    };
    addDeposit(amount: number) {
        this._balance = this._balance + amount;
    }
}

const myAccount = new BankAccount(444, 'persian', 20);
myAccount.addDeposit(10);
console.log(myAccount.getBalance());