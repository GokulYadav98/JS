let profile = {
    name: 'gokul',
    age: 18
}
profile.gender = 'M';
console.log(profile)
// Freeze the object
Object.freeze(profile)  // object freezed - cannot add or modify 
profile.name = 'Gokul Krishna Yadava';
profile.job = 'private'; // cannot add in the object
console.log(profile);


let profile2 = {
    name : "shri",
    age : 50
}
Object.seal(profile2); // seal - able to modify but not add
profile.gender = 'M'; // cannot add
profile2.age = 21
console.log(profile2)

let profile3 = {
    name : 'hari' // can modify name but not modify age
}

Object.defineProperty(profile3,'age',{
    value: 27,
    writable: false,
    
});

console.log(profile3)

console.log(undefined === undefined)