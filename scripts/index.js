"use strict";

window.onload = function () {
    const selectState = document.getElementById("selectState");

    // selected States dropwdown code

    for (const states of locationsArray) {
        selectState.options[selectState.options.length] = new Option(states)

    }
    selectState.addEventListener("change", function () {
        const selectedState = this.value;


        console.log("Selected state:", selectedState);
    })

    // Park type dropdown Code 

    const parkType = document.getElementById("parkType");

    for (const parks of parkTypesArray) {
        parkType.options[parkType.options.length] = new Option(parks)

    }
    parkType.addEventListener("change", function () {
        const parkType = this.value;


        console.log("Selected park:", parkType);
    })






}


