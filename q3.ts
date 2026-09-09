export{}
class BankAccount{
    public accountNumber: string;
    private balance: number;
    constructor(accountNumber: string,balance: number){
        this.accountNumber= accountNumber;
        this.balance= balance;
    }
    set balance1(balance: number){
        if(balance >= 0){
            this.balance= balance
        }
        else if(balance < 0){
            console.log(`ยอดเงินคงเหลือไม่สามารถเป็นค่าลบได้`);
        }
    }
    get balance1(){
        return this.balance;
    }
    deposit(amount: number){
        if(amount > 0){
            this.balance= this.balance+amount;
            console.log(`ฝากเงิน : ${amount} บาท`);
            console.log(`ยอกเงินคงเหลือ${this.balance} บาท`);
        }
    }
    withdraw(amount: number){
        if(amount > 0){
            if(amount <= this.balance){
                this.balance = this.balance-amount;
                console.log(`ถอนเงิน: ${amount} บาท`)
                console.log(`ยอดเงินคงเหลือ: ${this.balance} บาท`)
            }
            else if(amount > this.balance){
                console.log(`ไม่สามารถถอนเงินเกินยอดคงเหลือได้`)
                console.log(`ยอดเงินคงเหลือ: ${this.balance} บาท`)
            }
        }
    }
    displayBalance(){
        console.log(`เลขที่บัญชี: ${this.accountNumber}`);
        console.log(`ยอดเงินคงเหลือ: ${this.balance} บาท`);
    }
}

const c = new BankAccount("001",1000)
c.displayBalance()
c.deposit(500)
c.withdraw(300)
c.withdraw(1500)