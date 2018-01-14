"use strict";
var state = "on";

function toggleLight() {
    var image = document.getElementById('image');
    if (state == "on") {
        state = "off";
        image.src = "img/off.jpg";
    } else {
        state = "on";
        image.src = "img/on.jpg";
    }
}

function countDowntrigger() {
    var timeLeft = document.getElementById("nric").value;
    if (timeLeft == "") {
        alert("So Empty.....");
    } else if (isNaN(timeLeft)) {
        alert("Nubmer please....");
    } else {
        document.getElementById("timer").innerHTML = timeLeft;

        function countDownTimer() {
            timeLeft = timeLeft - 1;
            if (timeLeft <= 0) {
                document.getElementById("image").src = "img/off.jpg";
                clearInterval(setting);
            }
            document.getElementById("timer").innerHTML = timeLeft;
        }
        var setting = setInterval(countDownTimer, 1000);
    }
}