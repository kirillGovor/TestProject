"use strict";

var number = 0; //номер трека
var StopTimer = 1; //счетчик остановки таймера
var timerId; // таймер
var audios = document.getElementsByTagName("audio");//все аудио
var picupTransform = 0; //поворот звукоснимателя


function play_music() {
    var transformDisk = document.getElementById("disk"); //пластинка с музыкой
    var pickup = document.getElementById("pickup"); //звукосниматель
    var roteteDegPicup = audios[0].duration / 470;//градусы 1-го трека

    switch (number) {
        case 0:

            audios[number].paused ? audios[number].play() : audios[number].pause();
            break;

        case 1:

            audios[number].paused ? audios[number].play() : audios[number].pause();
            break;

        case 2:

            audios[number].paused ? audios[number].play() : audios[number].pause();
            break;

        case 3:

            audios[number].paused ? audios[number].play() : audios[number].pause();
            break;
    }






    if ((!audios[number].paused) || (audios[number].stoped)) {

        for (let i = 0; i <= audios.length - 1; i++) {
            audios[i].pause;
        }


        timerId = setInterval(function () {  //таймер повороа диска, звукоснимателя, вставки времени
            var tracktime = document.getElementById("tracktime");
            tracktime.innerHTML = timeAudio(audios[number].currentTime) + "/" + timeAudio(audios[number].duration);

            roteteDegPicup = audios[number].duration / 47;
            roteteDegPicup = roteteDegPicup / 500;
            if (pickup.style.transform == "") {
                pickup.style.transform = " rotate(" + picupTransform + "deg)"
            }

            var pickuprotate = picupTransform
            picupTransform = picupTransform + Number(roteteDegPicup.toFixed(4));
            pickuprotate = "rotate(" + picupTransform + "deg)"
            pickup.style.transform = pickuprotate;

            if (transformDisk.style.transform != "") {
                var rotateDisk = transformDisk.style.transform;
                rotateDisk = parseInt(rotateDisk.replace(/\D+/g, ""));
            }
            else {
                rotateDisk = 0;
            }
            rotateDisk = rotateDisk + 10;
            transformDisk.style.transform = " rotate(" + rotateDisk + "deg)";
            console.log(timerId);

            if (audios[number].currentTime >= (audios[number].duration)) {

                console.log("stoped")
                clearInterval(timerId);
                StopTimer = StopTimer + 1;
                pickup.style.transform = "rotate(-20deg)";
                picupTransform = 0;
                audios[number].currentTime = 0;
                tracktime.innerHTML = timeAudio(audios[number].currentTime) + "/" + timeAudio(audios[number].duration);
            };

        }, 50);
    }

    else if (audios[number].played) { //остановить проигрыватель, если он запущен
        clearInterval(timerId);
        StopTimer = StopTimer + 1;
        pickup.style.transform = "rotate(-20deg)";
    }
};


function focusFunction(numberTrack) { //выбор трека

    var audios = document.getElementsByTagName("audio");
    var transformDisk = document.getElementById("disk");
  


    for (let i = 0; i <= audios.length - 1; i++) {
        audios[i].pause();
    }


    switch (numberTrack) {

        case 0:

            transformDisk.src = 'images/1Saw_Her_Standing_There.png';
            StopTrack();
            number = 0;
            audios[0].currentTime = 0;
            tracktime.innerHTML = timeAudio(audios[0].currentTime) + "/" + timeAudio(audios[0].duration);
            break;

        case 1:

            transformDisk.src = 'images/1Anna_Go_To_Him.png';
            StopTrack();
            number = 1;
            audios[1].currentTime = 0;
            tracktime.innerHTML = timeAudio(audios[1].currentTime) + "/" + timeAudio(audios[1].duration);
            break;

        case 2:

            transformDisk.src = 'images/1Mistery.png';
            StopTrack();
            number = 2;
            audios[2].currentTime = 0;
            tracktime.innerHTML = timeAudio(audios[2].currentTime) + "/" + timeAudio(audios[2].duration);
            break;
        case 3:

            transformDisk.src = "images/1.png";
            number = 2;
            audios[3].currentTime = 0;
            tracktime.innerHTML = timeAudio(audios[3].currentTime) + "/" + timeAudio(audios[3].duration);
            break;
    }

}


function StopTrack() { //остановить проигрыватель
    clearInterval(timerId)
    StopTimer = StopTimer + 1;
    pickup.style.transform = "rotate(-20deg)";
}

function timeAudio(seconds) { //расчет времени трека
    var hours = (Math.floor(seconds / 3600));
    var minutes = (Math.floor(seconds / 60) - (Math.floor(seconds / 3600) * 60));
    var second = Math.floor(seconds % 60);
    var total = hours + " : " + minutes + " : " + second;
    return (total)
}

function inputVolume() { //громкость трека
    var range = document.getElementsByName('rangeVolume');// ползунок громкости
    var value = (range[0].value) / 100;
    for (let i = 0; i <= audios.length - 1; i++) {
        audios[i].volume = value;
    }
}


function speed_music(speed) { //скорость трека
    for (let i = 0; i <= audios.length - 1; i++) {
        if (speed == 0) {
            audios[i].playbackRate = 1;
        }
        else
            audios[i].playbackRate = 1 + (speed) / 100;
    }

}

