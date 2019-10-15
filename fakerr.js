var faker = require('faker');
var name = faker.name.findName();
var age = faker.address.streetAddress() +"\n" +faker.address.city()  +", "+faker.address.state() +" "+faker.address.zipCode();
var pfp = faker.internet.avatar();
// document.getElementById("name").value = name;
// document.getElementById("address").value = address;
console.log(name);
console.log(age);
console.log(pfp);