const customer = {
    firstName:'Wahidul',
    lastName:'Islam',
    salary:15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

customer.chargeBill(123);
customer.chargeBill(299);
console.log(customer.salary);