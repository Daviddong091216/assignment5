// Write your JavaScript code here!
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
    <li>Name: ${}</li>
    <li>Diameter: ${}</li>
    <li>Star: ${}</li>
    <li>Distance from Earth: ${}</li>
    <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json){
            const messionTarget = document.getElementById("missionTarget");
            let index = 0;
            messionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[index].name}</li>
                    <li>Diameter: ${json[index].diameter}</li>
                    <li>Star: ${json[index].star}</li>
                    <li>Distance from Earth: ${json[index].distance}</li>
                    <li>Number of Moons: ${json[index].moons}</li>
                </ol>
                <img src="${json[index].image}">
            `;
        });
    });


    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let faultyItemsButton = document.getElementById("faultyItems");
        let launchStatusButton = document.getElementById("launchStatus");
        let fuelStatusButton = document.getElementById("fuelStatus");
        let cargoStatusButton = document.getElementById("cargoStatus");
       
        if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
           alert("All fields are required!");
           event.preventDefault();
        }
        if(isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
           alert("Please check the values!");
           
        }
        let pilot = document.getElementById("pilotStatus");
        pilot.innerHTML = `${pilotNameInput.value} is ready for launch!`;
        let copilot = document.getElementById("copilotStatus");
        copilot.innerHTML = `${copilotNameInput.value} is ready for launch!`;

        if(fuelLevelInput.value < 10000) {
            faultyItemsButton.style.visibility = "visible";
            launchStatusButton.innerHTML = "Shuttle not ready for launch";
            launchStatusButton.style.color = "red";
            fuelStatusButton.innerHTML = "There is not enough fuel for the journey!!!" 
            event.preventDefault();
        }
        if(cargoMassInput.value > 10000) {
            faultyItemsButton.style.visibility = "visible";
            launchStatusButton.innerHTML = "Shuttle not ready for launch";
            launchStatusButton.style.color = "red";
            cargoStatusButton.innerHTML =  "There is too much mass for the shuttle to take off!!!";
            event.preventDefault();
        }
        if(isNaN(pilotNameInput.value) === true && isNaN(copilotNameInput.value) === true && fuelLevelInput.value > 10000 && cargoMassInput.value < 10000 && cargoMassInput.value >0) {
            faultyItemsButton.style.visibility = "visible";
            launchStatusButton.innerHTML = "Shuttle is ready for launch"
            launchStatusButton.style.color = "green";
            event.preventDefault();
        }
        
          
    });
});

