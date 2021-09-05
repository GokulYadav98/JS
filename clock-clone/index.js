setInterval(setClock,1000);

const dateHour = document.querySelector('[date-hand-hour]');
const dateMinutes = document.querySelector('[date-hand-minutes]');
const dateSeconds = document.querySelector('[date-hand-seconds]');

function setClock(){
    const currDate = new Date();
    const secondRotation = currDate.getSeconds() / 60;
    const minuteRotation = ( secondRotation + currDate.getMinutes() ) / 60;
    const hourRotation = ( minuteRotation + currDate.getHours() ) / 12;
    setRotation(dateSeconds, secondRotation);
    setRotation(dateMinutes, minuteRotation);
    setRotation(dateHour, hourRotation);

}

function setRotation(element, rotation) {
    element.style.setProperty('--rotation',rotation * 360);
}