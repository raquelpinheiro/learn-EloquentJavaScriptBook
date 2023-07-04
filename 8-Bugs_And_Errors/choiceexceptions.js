class Account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    withdrawal(amount) {
      
        console.log(`${this.name} | Withdrawal: ${amount}`);

        if (this.balance < amount)
            throw new EvalError("Balance is not enough")

        this.balance -= amount;

        console.log(`${this.name} | Balance: ${this.balance}`);
        
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`${this.name} | Deposit: ${amount} | Balance: ${this.balance}`);
    }
    transfer(destination, amount) {

        try {
    
            console.log(`--- Transfer: ${this.name} -> ${destination.name}`);
            this.withdrawal(amount);
    
            if (!accounts.includes(destination))
                throw new RangeError("Account doesn't exists: " + destination.name);
    
            destination.deposit(amount);
    
        } catch (e) {
            if (e instanceof RangeError) {
                this.deposit(amount);
                console.log(e.message);
            } else if (e instanceof EvalError) {
                console.log(e.message);
            } else {
                throw e;
            }
        }
    }
}

let accountA = new Account("A");
let accountB = new Account("B");
let accountC = new Account("C");
const accounts = [accountA, accountB, accountC];

accountA.deposit(15.2);

accountB.deposit(20.45);

accountA.transfer(accountB, 5.2);
accountA.transfer(accountB, 10.2);

accountA.transfer(new Account("D"), 9);