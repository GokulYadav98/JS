setInterval(setClock,1000);

const hourHand  = document.querySelector('[data-hour-hand]')
const minuteHand  = document.querySelector('[data-minute-hand]')
const secondHand  = document.querySelector('[data-second-hand]')

function setClock() {
    const currDate = new Date();
    const secondRotation = currDate.getSeconds() / 60;
    const minuteRotation = (currDate.getMinutes() + secondRotation ) / 60;
    const hourRotation = (currDate.getHours() + minuteRotation ) / 12;
    setRotation(secondHand, secondRotation);
    setRotation(minuteHand, minuteRotation);
    setRotation(hourHand, hourRotation);
}

function setRotation(element,rotationDegree) {
    element.style.setProperty('--rotation',rotationDegree * 360);
}
setClock();