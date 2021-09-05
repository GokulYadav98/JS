const animal = {
    attack : false
}
let human = {

}
let rabbit = Object.create(animal, {
    jumps: {
      value: true
    },
    height: {
        value : 4
    }
  });
  console.dir(rabbit)
//   human.__proto__ = rabbit;
// //   alert(rabbit.jumps); // true
// console.log(human.height)
// console.log(Object.getPrototypeOf(human))
Object.setPrototypeOf(human,{one:'number'});
// console.log(human.one)

// //............
// let john = { name: "John" };
// let obj2 = {val:'a'}
// // john[obj2] = 'hello';
// // console.log(john)
// let map = new Map([['hello','world']], Object.entries(john));

// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key
// map.set(true, 'bool2');
// map.set(john, {'val':1})
// console.log(map.get(john))
// map.set('1', 'str1')
//   .set(1, 'num1')
//   .set(true, 'bool1');
// // console.log(map.get('1'))

// for(let entry of map.entries()) {
//     console.log(entry)
// }
// // fromEntries converts [key][value] to {key:value}
// let objectNative = Object.fromEntries([map.entries()]);
// console.log(objectNative)

// function unique(arr) {
//     s = new Set(arr);
//     let obj = {
//         name: "gokul",
//         age: 24
//     }
//     console.log(Array.from(obj))
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   console.log( unique(values) ); // Hare, Krishna, :-O

// //   nap - pan
// //   ear - are - era
// //   cheaters - hectares - teachers

//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

// function aclean(params) {
//     let set = new Map();
//     for(let word of params) {
//         let sorted = word.toLowerCase().split('').sort().join('');
//         set.set(sorted,word)
//     }
//     console.log(Array.from(set.values()) )     
// }

// let mapa = new Map();
// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);
// mapa.set("name", "John");


// let keys = Array.from(recipeMap.keys());
// console.log(keys)
// // console.log(mapa.keys())
// for(let value of mapa.keys()) {
//     console.log(value)
// }


// // let tes = arr11.map(function(ele,index,arr11) {
// //     return ele * ele;
// // })
