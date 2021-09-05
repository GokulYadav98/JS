


let toyato = {
    drive() {
        return "Driving Toyato"
    }
}

let camry =  {
    useWifi(){
        return `${super.drive()}`;
    }
}

camry.__proto__ = Object.setPrototypeOf(toyato,{ 
    height: 5
});
console.dir(camry.drive());
console.log(camry.useWifi())
console.log(camry.height);
console.dir(camry)