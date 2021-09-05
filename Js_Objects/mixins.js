const jsSkill = {
    knowsJS(){
        return true;
    }
}
const backEndSkill = {
    knowsBackEnd() {
        return true;
    }
}
const hasDegree = {
    hasDegreeValue() {
        return true;
    }
}

const FullStack = Object.assign({},jsSkill,backEndSkill,hasDegree);
console.log('...........................object mixin.........') 
console.dir(FullStack);


// -------------- Function Mixins -----------------

const humanFactory = function(obj) {
    let isCrying = false;
    return Object.assign({},obj,{
        cry(){
            isCrying = true;
            return this;
        },
        isCrying(){
            return isCrying;
        }
})
}

const flyFactory = function (obj) {
    let isFlying = false;
    return Object.assign({},obj,{
        fly(){
            isFlying = true;
            return this;
        },
        isFlying(){
            return isFlying;
        }
})
}

const me = flyFactory(humanFactory({}))
console.dir(me.cry().isCrying());