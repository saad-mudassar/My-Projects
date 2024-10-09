

function inputToOutput() {
    const inputs = document.querySelectorAll(".contenders-container input");
    
    inputs.forEach((input) => {
        input.addEventListener("keyup", function(e) {
           if (e.keyCode === 13 && e.target.value !== "") {
            const targetInputvalue = e.target.value;
            if (e.target.id == "mass") {
                // console.log(e.target.parentElement);
                e.target.parentElement.innerHTML = `<span class="output" id="mass">${targetInputvalue}</span>`;
            } else {
                e.target.parentElement.innerHTML = `<span class="output" id="dis">${targetInputvalue}</span>`;
            }
           }
           console.log(e.target.value);
        });
    });
    console.log(inputs);
}

inputToOutput();


// convert Units Function

function convertUnitsSystem() {
    const unitsSystem = document.querySelector(".units-system");
    console.log(unitsSystem.childNodes[3]);
    unitsSystem.addEventListener("click", () => {
        const allOutputs = document.querySelectorAll(".contenders-container span");

        // convert imperial to metric units

        const lbsToKg = 0.45;
        const inchToCm = 2.54;

        // convert metric to imperial units
        const kgToLbs = 2.2;
        const cmToInch = 0.393;

        console.log(allOutputs);
        allOutputs.forEach((output) => {
            if (unitsSystem.childNodes[3].checked == true && output.id == "mass") {
                console.log("imperial mass");
                output.innerHTML = (output.innerHTML * kgToLbs).toFixed(0);
            }
            if (unitsSystem.childNodes[3].checked == true && output.id == "dis") {
                console.log("imperial dis");
                output.innerHTML = (output.innerHTML * cmToInch).toFixed(0);
            }
            if (unitsSystem.childNodes[3].checked == false && output.id == "mass") {
                console.log("Metric mass");
                output.innerHTML = (output.innerHTML * lbsToKg).toFixed(0);
            }
            if (unitsSystem.childNodes[3].checked == false && output.id == "dis") {
                console.log("Metric dis");
                output.innerHTML = (output.innerHTML * inchToCm).toFixed(0);
            }
        });
    });
}
convertUnitsSystem();