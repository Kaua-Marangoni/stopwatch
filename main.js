"use strict"

let hour = 0
let minutes = 0
let seconds = 0
let miliseconds = 0

let time = 100
let cron

function start() {
    cron = setInterval(() => {
        timer()
    }, time)

    document.querySelector(".start").style.display = "none"
    document.querySelector(".stop").style.display = "inline"
}

function pause() {
    clearInterval(cron)
    document.querySelector(".start").style.display = "inline"
}

function stop() {
    clearInterval(cron)
    hour = 0
    minutes = 0
    seconds = 0
    miliseconds = 0
    
    document.querySelector(".start").style.display = "inline"
    document.querySelector(".stop").style.display = "none"
    document.getElementById("counter").innerHTML = "00:00:00.00"
}

function timer() {

    miliseconds++

    if (miliseconds === 10) {
        miliseconds = 0
        seconds++

        if (seconds === 60) {
            seconds = 0
            minutes++
        }

        if (minutes === 60) {
            minutes = 0
            hour++
        }
    }

    // if (minutes < 60) {
    //     hour = ""
    // }

    let format = (hour < 10 ? "0" + hour : hour) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + "." + (miliseconds < 10 ? "0" + miliseconds : miliseconds)
    document.getElementById("counter").innerHTML = format
}