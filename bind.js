const person1 = {
    firstName:'salauddin',
    lastName:'kader',
    salary: 20000,
    chargeBill: function(amount){
        //console.log(this);
        this.salary = this.salary - amount;
        return this.salary; 
    }
}
const person2 = {
    firstName: 'Obaidul',
    lastName: 'Kader',
    salary: 25000 
}

const person3 = {
    firstName: 'pagla',
    lastName: 'Kader',
    salary: 15000 
}
//const firstPersonBill = person1.chargeBill(500);
//console.log(firstPersonBill);
const person2Bill = person1.chargeBill.bind(person2);
const secondPersonBill = person2Bill(5000);
console.log(secondPersonBill);
const person3Bill = person1.chargeBill.bind(person3);
const thirdPersonBill = person3Bill(3000);
console.log(thirdPersonBill);