const person1 = {
    name: 'shadman',
    getFullName: function() {
        console.log(this);
        return 'Mr.' + person1.name;
    }
}

const person2 = {
    name: 'tamim',

}
person2.getFullName = person1.getFullName;
person2.getFullName();
person1.getFullName();

function add(a, b) {
    console.log(this);
    return a + b;
}

add(12, 13);
person1.sum = add(12, 13);
// const output = person1.getFullName();
// console.log(output);