"use strict";

const parkTypesArray = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
]

window.onload = function() {
    const parkType = document.getElementById("parkType")

    for(const parks of parkTypesArray) {
        parkType.options[parkType.options.length] = new Option(parks)

    }

    selectState.onchange = function() {
        
    }


}