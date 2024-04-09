function addToDisplay(value) {
    document.getElementById("display").value += value;
    playButtonClickSound();
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    var expression = document.getElementById("display").value;
    try {
        var result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function playButtonClickSound() {
    var audio = new Audio('mouse-click-153941.mp3'); // Provide path to your sound file
    audio.play();
}
