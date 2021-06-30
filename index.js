function mSounds(key) {

    switch (key) {
        case "w":
            var audio = new Audio("Sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("Sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("Sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("Sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("Sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("Sounds/snare.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("Sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(this);

    }
}

function btnAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() { activeButton.classList.remove("pressed") }, 100);
}

var numOfbtn = document.querySelectorAll(".drum");
for (var i = 0; i < numOfbtn.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var button = this.innerHTML;
        mSounds(button);
        btnAnimation(button);
    });
}
document.addEventListener("keydown", function(event) {
    mSounds(event.key);
    btnAnimation(event.key);
});
