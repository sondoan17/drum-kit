var soundFileName = [
  "crash",
  "kick-bass",
  "snare",
  "tom-1",
  "tom-2",
  "tom-3",
  "tom-4",
];

function playDrumSound(event) {
  var drumIndex = Array.from(document.querySelectorAll(".drum")).indexOf(
    event.currentTarget
  );
  var drumSound = new Audio("./sounds/" + soundFileName[drumIndex] + ".mp3");
  drumSound.play();
}
function playDrumSoundKeyboard(event){
    keyPress = event.key; // Update the value of keyPress
    if (event.repeat) return;
    switch (keyPress) {
      case "w":
        var drumSound = new Audio("./sounds/crash.mp3");
        drumSound.play();
        break;
      case "a":
        var drumSound = new Audio("./sounds/kick-bass.mp3");
        drumSound.play();
        break;
      case "s":
        var drumSound = new Audio("./sounds/snare.mp3");
        drumSound.play();
        break;
      case "d":var drumSound = new Audio("./sounds/tom-1.mp3");
        drumSound.play();
        break;
      case "j":var drumSound = new Audio("./sounds/tom-2.mp3");
        drumSound.play();
        break;
      case "k":var drumSound = new Audio("./sounds/tom-3.mp3");
        drumSound.play();
        break;
      case "l":var drumSound = new Audio("./sounds/tom-4.mp3");
        drumSound.play();
        break;
    }
}
var drums = document.querySelectorAll(".drum");
drums.forEach(function (drum) {
  drum.addEventListener("click", playDrumSound);
});
document.addEventListener("keydown", playDrumSoundKeyboard);
