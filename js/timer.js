const objDate = new Date();
let hours = objDate.getHours();
let minuts = objDate.getMinutes();
let timer = "leeg";
let pushHTML;

function prettyDate2(timeleft) {
    let array = [];
    let time = timeleft % (60 * 60 * 1000 * 24);
    let hours = time / (60 * 60 * 1000);
    let minuts = (time / (60 * 1000)) % 60;
    let seconds = (time / 1000) % 60;
    array.push(hours.toFixed(0), minuts.toFixed(0), seconds.toFixed(0));
    console.log(array);
    return array;
}

const checkTime = () => {
    checkAvondklok();
    curTime = new Date().getTime();
    _21Time = new Date(2022, 0, 1, 21, 0, 0, 0).getTime();
    let showTime = _21Time - curTime;
    console.log("time left in miniseconds?", showTime);
    pushHTML = prettyDate2(showTime);
    document.getElementById("tijd").innerText =
        pushHTML[0] +
        "uur, " +
        pushHTML[1] +
        "minuten, " +
        pushHTML[2] +
        "seconden";
};

const checkAvondklok = () => {
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

setInterval(checkTime(), 1000);
