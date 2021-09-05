import { PaymentGateWay } from './PaymentModule.js';
export class BillPayment {
    CreateBill(){
        alert("Bill Created")
        let payObj = new PaymentGateWay();
        payObj.DoPayments();
    }
}