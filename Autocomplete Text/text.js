const storyOutput = document.getElementById("story");
const speedInput = document.querySelector("#speed");

// console.log(storyOutput, speedInput);

let storyText = "One day, a young guy and a girl fell in love. They got married and lived happily after.";

// const cars = ["BMW", "tesla", "Audi", "Mercedes", "Ford"];

// console.log(cars[3].slice(0, 4));

let speedValue = 1;
let speed = 200 / speedInput.value;

writeStory();
function writeStory() {
    storyOutput.innerHTML = storyText.slice(0,speedValue);

    speedValue++;
    if (speedValue > storyText.length) {
        speedValue = 1;
    }
    setTimeout(writeStory, speed);
}
speedInput.addEventListener("input", (e) => {
   // console.log(e.target.value);

    speed = 200 / e.target.value;
});