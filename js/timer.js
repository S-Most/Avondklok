const vrijheidsEle = document.getElementById("vrijheid");
const avondklokEle = document.getElementById("avondklok");

function prettyDate2(timeleft) {
    let array = [];
    let time = timeleft % (60 * 60 * 1000 * 24);
    let hours = (time / (60 * 60 * 1000) - 0, 5);
    let minuts = (((time / (60 * 1000)) % 60) - 0, 5);
    let seconds = (time / 1000) % 60;
    array.push(hours.toFixed(0), minuts.toFixed(0), seconds.toFixed(0));
    console.log(array);
    return array;
}

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
        showAvondklok();
    } else {
        minutesLeft();
        showVrijheid();
    }
};

const minutesLeft = () => {
    curTime = new Date().getTime();
    _21Time = new Date(2022, 0, 1, 21, 0, 0, 0).getTime();
    let showTime = _21Time - curTime;
    let pushHTML = prettyDate2(showTime);
    document.getElementById("tijd").innerText =
        pushHTML[0] +
        "uur, " +
        pushHTML[1] +
        "minuten, en " +
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
        console.log("avondklok");
        return true;
    } else {
        console.log("geen avondklok");
        return false;
    }
};
let setInterval = (checkTime(), 1000);
checkTime();
