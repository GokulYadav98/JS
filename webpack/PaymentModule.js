import { Journel } from '../webpack/AccountingModule.js';
export class PaymentGateWay {
    DoPayments(){
        alert("Payment Done")
        let obj = new Journel();
        obj.DebitCredit();
    }

}