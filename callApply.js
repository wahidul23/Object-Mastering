const person1 = {
    firstName:'salauddin',
    lastName:'kader',
    salary: 20000,
    chargeBill: function(amount, tax){
        //console.log(this);
        this.salary = this.salary - amount - tax;
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

// apply method

person1.chargeBill.apply(person2, [230, 100]);
console.log(person2.salary);

// call method

person1.chargeBill.call(person3, 440, 150);
console.log(person3.salary);