var animalArray = ["pig", "cow", "cat", "dog", "zebra", "lion"];
const pluralArray = animalArray.map(x => x+"s");
const farmAnimals = animalArray.filter(word => word.length < 4);
const reducer = (accumulator, currentValue) => accumulator + currentValue.charAt(0);
const reduced = animalArray.reduce(reducer);
console.log(pluralArray);
console.log(farmAnimals);
console.log(reduced);
exports = module.exports = {};
exports.pluralArray = pluralArray;
exports.farmAnimals = farmAnimals;
exports.reduced = reduced;