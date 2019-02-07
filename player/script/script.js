"use strict";
var transform = document.getElementById("disk");
console.log(transform);




var k = 1;


function play_music(number) {
    if (number == 1) {
        var audio = document.getElementById("Track1");
        var transform = document.getElementById("disk");
        var pickup = document.getElementById("pickup");
        var speed = 20;
        var radius = 100;

        var stopTimer = 1;
        audio.paused ? audio.play() : audio.pause();

        if (!audio.paused) {
            var disc = document.getElementById("button_on_off");
            disc.style.backgroundImage = "url(images/Button_on_transform.png)";
            pickup.style.transform = "rotate(35deg)";
            var timerId = setInterval(function () {


                if (transform.style.transform != "") {
                    var rotate = transform.style.transform;
                    rotate = parseInt(rotate.replace(/\D+/g, ""));
                }
                else {
                    rotate = 0;
                }
                rotate = rotate + 10;
                transform.style.transform = " rotate(" + rotate + "deg)";

            }, 50);
        }
        else {
            var disc = document.getElementById("button_on_off");
            disc.style.backgroundImage = "url(images/Button_on.png)"
            clearInterval(k);
            k = k + 1;
            pickup.style.transform = "rotate(0deg)";
        }

    }
};

function stop_music(number) {
    if (number == 1) {
        var sound = document.getElementById("Track1");
        sound.stop();

    }
}

function next_music() {
    if (number == 1) {
        var sound = document.getElementById("Track1");
        sound.stop();
    }
}