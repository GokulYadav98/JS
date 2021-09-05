let arr11 = [4,5,11,11,12];
/// my Map Prototype
let resultsSet = new Set(arr11);
console.log("resultsSet", Array.from(resultsSet))

Array.prototype.myMap = function(callback){
    let res = [];
    for(let index=0;index < this.length;index++) {
         res.push(callback(this[index],index,this));
    }
    return res;
}
let res = arr11.myMap(function (ele,index,arr11) {
        return ele * ele;
})
/// my Filter Prototype
Array.prototype.myFilter = function(callback) {
    let res = [];
    for(let i =0;i<this.length;i++) {
        if(callback(this[i],i,this)){
            res.push(this[i]);
        };
    }
    return res;
}
let filter = arr11.myFilter(function(ele,index,arr11){
        return ele > 10;
}) 
console.log(filter);

// myReduce

Array.prototype.myReduce = function (callback,accumulator){
    if(this.length < 1) {
        throw new Error("Array is empty");
    }
    if(!accumulator) {
        if(typeof this[0] == "number") {
            accumulator = 0;
        } else if (typeof this[0] == "string") {
            accumulator = '';
        }
    }
    for(let index=0;index < this.length;index++) {
         accumulator = callback(accumulator, this[index])
    }
    return accumulator;
}
let reduce = arr11.myReduce(function(acc,curr){
    return acc + curr;
},0)
console.log(reduce)



function calculate(sqrt,arr){
    let res = [];
    for(let i=0;i<arr.length;i++){
        res.push(sqrt.call(this,arr[i]))
    }
    return res;
}
function sqrt(value){
    return value * value;
}

// calculateSqrt()
let arr = [1,2,3,5,6];
let sqrtres = calculate(sqrt,arr);
console.log(sqrtres)

Array.prototype.myfind = function(callback){
    for(let index=0;index<this.length;index++) {
        if(callback(this[index])) {
            return this[index];
        }
    }
}
Array.prototype.myfind = function(callback){
    for(let index=0;index<this.length;index++) {
        if(callback(this[index])) {
            return this[index];
        }
    }
}

Array.prototype.filter = function(callback) {
    let res = []
    for(let index=0;index<this.length;index++) {
        if(callback(this[index],index,this)) {
            res.push(this[index]);
        }   
    }
    return res;
}

arr = [1,2,3,5,6];

res = arr.myfind(ele=> { return ele > 3 } );
let res1 =  arr.filter(ele=> ele > 3)
console.log("val",res)
console.log(res1)