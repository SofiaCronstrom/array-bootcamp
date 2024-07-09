/* 1 */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
let fruitArr = ["apple", "banana", "orange", "pinapple", "strawberry"];
console.log(fruitArr);

/* 2 */
/* Gör en array som innehåller 3 olika datatyper, ex. string, number, array. */
let datatypeArr = ["hello", 23, false];
console.log(datatypeArr);

/* 3 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* console.log() hur många objekt arrayen ovan innehåller. */
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(animals.length);

/* 4 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta cat. */
let animals2 = ['cat', 'hamster', 'parrot', 'funky chihuahua'];
console.log(animals2[0]);

/* 5 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta funky chihuahua. */
let animals3 = ['cat', 'hamster', 'parrot', 'funky chihuahua'];
console.log('Uppgift 5 ' + animals3[3]);

/* 6 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, byt ut hamster mot tiger. */
let animals4 = ['cat', 'hamster', 'parrot', 'funky chihuahua'];
animals4[1] = "tiger";
console.log(animals4);

/* 7 */
let a = [1,2,3];
let b = [4,5,6];
/* Sätt ihop ovanstående arrayer. */
let join = [...a, ...b];
console.log(join);

/* 8 */
let a2 = [1,2,3,7,8,9];
let b2 = [4,5,6];
/* Merga in array b på index 3 i array a.. */
a2.splice(3, 0, ...b2);
console.log(a2);

/* 9 */
let arr = ['a', 'b', 'c'];
let cloneArr = [...arr];
/* Klona ovanstående array. */
console.log(arr, cloneArr);

/* 10 */
let fruits = ['kiwi', 'apple', 'pear'];
/* Lägg till en frukt i slutet av arrayen ovan. */
fruits.push('banana');
console.log(fruits);

/* 11 */
let fruits2 = ['kiwi', 'apple', 'pear'];
/* Lägg till en frukt i början av arrayen ovan. */
fruits2.unshift("banana");
console.log(fruits2);

/* 12 */
let fruits3 = ['kiwi', 'apple', 'pear'];
/* I arrayen ovan, ta bort sista frukten i arrayen. */
fruits3.pop();
console.log(fruits3);

/* 13 */
let fruits4 = ['kiwi', 'apple', 'pear'];
/* I arrayen ovan, ta bort första frukten i arrayen. */
fruits4.shift();
console.log(fruits4);

/* 14 */
let fruits5 = ['kiwi', 'apple', 'pear'];
/* Sätt in en frukt i arrayen ovan på index 1. */
fruits5.splice(1, 0, "banana");
console.log(fruits5);

/* 15 */
let fruits6 = ['kiwi', 'apple', 'pear'];
/* Sätt in, tre frukter i arrayen ovan på index 2. */
fruits6.splice(1, 0, "banana", "orange", "lemon");
console.log(fruits6);

/* 16 */
let names = ['David', 'Christoffer', 'Johan', 'Maja'];
/* I arrayen ovan, ta bort Christoffer och Johan. */
names.splice(1, 2);
console.log(names);

/* 17 */
let nums = [1,2,3,4,5,6,7,8,9];
/* Spegelvänd på arrayen ovan. */
nums.reverse();
console.log(nums);

/* 18 */
let str = 'Supercalifragilisticexpialidocious';
/* Kika om strängen ovan innehåller bokstaven n. */

console.log(str.includes('n'));

/* 19 */
let str2 = 'Supercalifragilisticexpialidocious';
/* Kika om strängen ovan innehåller bokstaven x. */
console.log(str2.includes('x'));

/* 20 */
let str3 = 'Supercalifragilisticexpialidocious';
/* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
console.log(str3.indexOf('p')
);

/* 21 */
let str4 = 'Supercalifragilisticexpialidocious';
/* I strängen ovan, plocka fram de 5 första tecknena. */
let subStr = str4.slice(0, 5);
console.log(subStr);

/* 22 */
let str5 = 'Supercalifragilisticexpialidocious';
/* I strängen ovan, plocka fram de 7 sista tecknena. */
let subStr2 = str5.slice(-7);
console.log(subStr2);

/* 23 */
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
let overFive = numArray.filter((num) => num > 5);
console.log(overFive);

/* 24 */
let numArray2 = [23, 45, 5, 62, 1, 21, 3, 54];
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
let underFive = numArray.filter((num) => num < 5);
console.log(underFive);

/* 25 */
let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]
/* Skriv ut alla namn som är 18 år eller över från arrayen längst upp i dokumentet. */
persons.filter(person => person.age >= 18).forEach(person => {
    console.log(person.name);
});

/* 26 */
/* Skriv ut alla namn som är under 18 år från arrayen längst upp i dokumentet. */
persons.filter(person => person.age < 18).forEach(person => {
    console.log(person.name);
});

/* 27 */
let arr2 = ['beta', 'alfa', 'gamma'];
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
console.log(arr2.sort());

/* 28 */
let nums2 = [1,5,7,9,3,4,2,6,8];
/* Sortera ovanstående array numeriskt. */
console.log(nums2.sort());

/* 29 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, yngst först. */
console.log(persons.sort((a, b) => a.age - b.age));

/* 30 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, äldst först. */
console.log(persons.sort((a, b) => b.age - a.age));

/* 31 */
/* I person-arrayen längst upp i dokumentet, sortera objekten i bokstavsordning efter deras namn */
console.log(persons.sort((a, b) => a.name.localeCompare(b.name)));

/* 32 */
/* I person-arrayen längst upp i dokumentet, gör om alla namn till versaler. */
persons.forEach(person => {
    person.name = person.name.toUpperCase();
});
console.log(persons);

/* 33 */
/* I person-arrayen längst upp i dokumentet, spegelvänd alla namn. */
function reverseString(str){
    return str.split('').reverse().join('');
}

persons.forEach(person => {
    person.name = reverseString(person.name);
});
console.log(persons);

/* 34 */
let fruits7 = ['apelsin', 'päron', 'äpple', 'kiwi'];
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
console.log('Uppgift 34');
fruits7.forEach(fruit => {
   console.log(fruit);
});

/* 35 */
let fruits8 = ['apelsin', 'päron', 'äpple', 'kiwi'];
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
console.log('Uppgift 35');
for (let fruit of fruits8){
    console.log(fruit);
}

/* 36 */
let fruits9 = ["apelsin", "päron", "äpple", "kiwi"];
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
console.log("Uppgift 36");
for (let i = 0; i < fruits9.length; i++) {
  console.log(fruits9[i]);
}

/* 37 */
let fruitsLast = ["apelsin", "päron", "äpple", "kiwi"];
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
console.log("Uppgift 37");
for (let i = 0; i < fruitsLast.length; i++) {
  console.log(`${i} - ${fruitsLast[i]}`);
}
