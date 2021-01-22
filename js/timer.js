const vrijheidsEle = document.getElementById("vrijheid");
const avondklokEle = document.getElementById("avondklok");

const prettyDate2 = (timeleft) => {
    let array = [];
    let time = timeleft % (60 * 60 * 1000 * 24);
    let hours = time / (60 * 60 * 1000) - 0.5;
    let minuts = ((time / (60 * 1000)) % 60) - 0.5;
    let seconds = ((time / 1000) % 60) - 1;
    array.push(hours.toFixed(0), minuts.toFixed(0), seconds.toFixed(0));
    return array;
};

const showAvondklok = () => {
    avondklokEle.style.display = "flex";
    vrijheidsEle.style.display = "none";
};

const showVrijheid = () => {
    vrijheidsEle.style.display = "flex";
    avondklok.style.display = "none";
};

const checkTime = () => {
    if (checkAvondklok()) {
        minutesLeft(4, 30, "tijd2");
        showAvondklok();
    } else {
        minutesLeft(21, 0, "tijd1");
        showVrijheid();
    }
};

const minutesLeft = (uur, minuten, id) => {
    currentTime = new Date().getTime();
    curfewTime = new Date(2023, 0, 1, uur, minuten, 0, 0).getTime();
    let showTime = curfewTime - currentTime;
    let pushHTML = prettyDate2(showTime);
    document.getElementById(id).innerText =
        pushHTML[0] +
        "uur, " +
        pushHTML[1] +
        "minuten en " +
        pushHTML[2] +
        "seconden";
};

const checkAvondklok = () => {
    const objDate = new Date();
    let hours = objDate.getHours();
    let minutes = objDate.getMinutes();

    if (
        (hours >= 21 && hours <= 24) ||
        (hours >= 0 && hours < 4) ||
        (hours == 4 && minutes <= 29)
    ) {
        return true;
    } else {
        return false;
    }
};

setInterval(checkTime, 1000);

checkTime();
