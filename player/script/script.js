"use strict";

var number = 0; //номер трека
var StopTimer = 1; //счетчик остановки таймера
var timerId; // таймер

function play_music() {
    var transformDisk = document.getElementById("disk"); //пластинка с музыкой
    var pickup = document.getElementById("pickup");
    var audios = document.getElementsByTagName("audio");


    console.log(audios);
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

        pickup.style.transform = "rotate(0deg)";

        timerId = setInterval(function () {
            var tracktime = document.getElementById("tracktime");
            tracktime.innerHTML = timeAudio(audios[number].currentTime) + "/" + timeAudio(audios[number].duration);


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
        }, 50);
    }

    else if (audios[number].played) {
        console.log("stoped")
        clearInterval(timerId);
        StopTimer = StopTimer + 1;
        pickup.style.transform = "rotate(-20deg)";
    }
};


function focusFunction(numberTrack) {

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
            break;

        case 1:

            transformDisk.src = 'images/1Anna_Go_To_Him.png';
            StopTrack();
            number = 1;
            audios[1].currentTime = 0;
            break;

        case 2:

            transformDisk.src = 'images/1Mistery.png';
            StopTrack();
            number = 2;
            audios[2].currentTime = 0;
            break;
        case 3:

            transformDisk.src = "images/1.png";
            number = 2;
            audios[3].currentTime = 0;
            break;
    }

}
function StopTrack() {
    clearInterval(timerId)
    StopTimer = StopTimer + 1;
    pickup.style.transform = "rotate(-20deg)";
}

function timeAudio(seconds) {
    var hours = (Math.floor(seconds / 3600));
    var minutes = (Math.floor(seconds / 60) - (Math.floor(seconds / 3600) * 60));
    var second = Math.floor(seconds % 60);
    //var mseconds = (audios[number].currentTime % 60) / 1000;
    var total = hours + " : " + minutes + " : " + second;
    return (total)
}


function button_volume(EO) {

    EO.onmousedown = function (EO) {
        EO = EO || window.event;
        draggedImage = EO.target;
        var coords = getCoords(draggedImage);
        var shiftX = EO.pageX - coords.left;
        var shiftY = EO.pageY - coords.top;

        z_index_image = z_index_image + 1;
        draggedImage.style.zIndex = z_index_image;
        moveAt(EO);
        function moveAt(EO) {
            draggedImage.style.left = EO.pageX - shiftX + 'px';
            draggedImage.style.top = EO.pageY - shiftY + 'px';
        }
        document.onmousemove = function (EO) {
            moveAt(EO);
        };

        draggedImage.onmouseup = function (EO) {
            document.onmousemove = null;
            draggedImage.onmouseup = null;
            draggedImage = null;
        };
        EO.preventDefault();
    }
    function getCoords(EO) {
        var box = EO.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
}