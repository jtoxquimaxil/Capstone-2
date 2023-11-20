"use strict";

window.onload = init;


const nationalParksbasedOnState = document.getElementById("nationalParksbasedOnState")
const selectState = document.getElementById("selectState");
const selectPark = document.getElementById("selectPark");
const selectLocation = document.getElementById("selectLocation");
// const selectParkType = document.getElementById("selectParkType");

let selectMountain = document.getElementById('selectMountain');

// my buttons 
function init() {
    selectState.onclick = radioBtnsClicked;
    selectPark.onclick = radioBtnsClicked;
    selectLocation.onchange = dropdownSelection;
    selectParkType.onchange = dropdownSelection;
}
// what the selected buttons display 
function radioBtnsClicked() {
    divContainer();

    if (selectState.checked) {
        showSelectLocation();
    } else if (selectPark.checked) {
        showSelectParkType();
    }
};

function showSelectLocation() {
    selectLocation.style.display = "block";  // when a selected location, info should be displayed
    selectParkType.style.display = "none";

    let locationData = document.getElementById("locationData"); //HTML ID
    locationData.innerText = "Select State";

// select State dropdown
    for (let state of locationsArray) {
        let option = document.createElement("option");
        option.value = state;
        option.innerText = state;
        selectLocation.appendChild(option);
    }

    selectLocation.value = "";
};

function showSelectParkType() {
    selectParkType.style.display = "block";
    selectLocation.style.display = "none";

    
    let parkTypeData = document.getElementById("parkTypeData"); // HTML ID
    parkTypeData.innerText = "Select park type";

    // select Park Type Dropdown
    for (let parks of parkTypesArray) {
        let option = document.createElement("option");
        option.value = parks;
        option.innerText = parks;
        selectParkType.appendChild(option);
    }
    selectParkType.value = "";
};

function dropdownSelection() {
    divContainer();

    if (selectState.checked) {
        const stateSelection = selectLocation.value; 
        if (stateSelection) {
            const parksInState = parkTypeBasedOnState(stateSelection);
            parkByState(parksInState, stateSelection); 
        }
    } else if (selectPark.checked) {
        const parkType = selectParkType.value;
        const parks = parkDataBasedOnType(parkType);
        parkByType(parks);
    }
};

function parkTypeBasedOnState(state) {
    return nationalParksArray.filter(nationalPark => nationalPark.State === state);
};

function parkDataBasedOnType(types) {
    return nationalParksArray.filter(nationalPark => nationalPark.LocationName.includes(types));
}

//should only display Parks located in the chosen State
function parkByState(parksInState, stateSelection) {
    parksInState.forEach(park => {
        if (park.State === stateSelection) {
            let accordionItemDiv = document.createElement("div");
            accordionItemDiv.className = "accordion-item";
        
            nationalParksbasedOnState.appendChild(accordionItemDiv);
        
            let accordionHeader = document.createElement("h2");
            accordionHeader.className = "accordion-header";
        
            accordionItemDiv.appendChild(accordionHeader);
        
            let btn = document.createElement("button");
            btn.className = "accordion-button collapsed";
            btn.type = "button";
            btn.setAttribute("data-bs-toggle", "collapse");
        
            let targetId = "flush-collapse-" + park.LocationID;
        
            btn.setAttribute("data-bs-target", "#" + targetId);
            btn.setAttribute("aria-expanded", "false");
            btn.setAttribute("aria-controls", targetId);
        
            let btnTextNode = document.createTextNode(park.LocationName);
            btn.appendChild(btnTextNode);
        
            accordionHeader.appendChild(btn);
        
            let flushCollapseDiv = document.createElement("div");
            flushCollapseDiv.id = targetId;
            flushCollapseDiv.className = "accordion-collapse collapse";
            flushCollapseDiv.setAttribute("data-bs-parent", "#nationalParksbasedOnState");
        
            let accordionBody = document.createElement("div");
            accordionBody.className = "accordionBody";
        
            let accordionBodyHTML =
            `<p><strong>Location ID:</strong> ${park.LocationID}</p>
            <p><strong>Location Name:</strong> ${park.LocationName}</p>
            <p><strong>Address:</strong> ${park.Address}</p>
            <p><strong>City:</strong> ${park.City}</p>
            <p><strong>State:</strong> ${park.State}</p>
            <p><strong>Zip Code:</strong> ${park.ZipCode}</p>
            <p><strong>Phone:</strong> ${park.Phone}</p>
            <p><strong>Fax:</strong> ${park.Fax}</p>
            <p><strong>Latitude:</strong> ${park.Latitude}</p>
            <p><strong>Longitude:</strong> ${park.Longitude}</p>
            <p><strong>Visit:</strong> ${park.hasOwnProperty('Visit')}</p>`;
        
            accordionBody.innerHTML = accordionBodyHTML;
        
            flushCollapseDiv.appendChild(accordionBody);
        
            accordionItemDiv.appendChild(flushCollapseDiv);
        
            // accordionBody.appendChild(accordionBodyTextNode);
        
            // accordionItemDiv.appendChild(accordionHeader);
            // flushCollapseDiv.appendChild(accordionBody);
            // nationalParksbasedOnState.appendChild(accordionItemDiv);
            // nationalParksbasedOnState.appendChild(flushCollapseDiv);
        }
    })
}

// should only be able to display park Type selected
function parkByType(parks) {
    parks.forEach(park => {{
        let accordionItemDiv = document.createElement("div");
            accordionItemDiv.className = "accordion-item";
        
            nationalParksbasedOnState.appendChild(accordionItemDiv);
        
            let accordionHeader = document.createElement("h2");
            accordionHeader.className = "accordion-header";
        
            accordionItemDiv.appendChild(accordionHeader);
        
            let btn = document.createElement("button");
            btn.className = "accordion-button collapsed";
            btn.type = "button";
            btn.setAttribute("data-bs-toggle", "collapse");
        
            let targetId = "flush-collapse-" + park.LocationID;
        
            btn.setAttribute("data-bs-target", "#" + targetId);
            btn.setAttribute("aria-expanded", "false");
            btn.setAttribute("aria-controls", targetId);
        
            let btnTextNode = document.createTextNode(park.LocationName);
            btn.appendChild(btnTextNode);
        
            accordionHeader.appendChild(btn);
        
            let flushCollapseDiv = document.createElement("div");
            flushCollapseDiv.id = targetId;
            flushCollapseDiv.className = "accordion-collapse collapse";
            flushCollapseDiv.setAttribute("data-bs-parent", "#nationalParksbasedOnState");
        
            let accordionBody = document.createElement("div");
            accordionBody.className = "accordionBody";
        
            let accordionBodyHTML = 
            
            `<p><strong>Location ID:</strong> ${park.LocationID}</p>
            <p><strong>Location Name:</strong> ${park.LocationName}</p>
            <p><strong>Address:</strong> ${park.Address}</p>
            <p><strong>City:</strong> ${park.City}</p>
            <p><strong>State:</strong> ${park.State}</p>
            <p><strong>Zip Code:</strong> ${park.ZipCode}</p>
            <p><strong>Phone:</strong> ${park.Phone}</p>
            <p><strong>Fax:</strong> ${park.Fax}</p>
            <p><strong>Latitude:</strong> ${park.Latitude}</p>
            <p><strong>Longitude:</strong> ${park.Longitude}</p>
            <p><strong>Visit:</strong> ${park.hasOwnProperty('Visit')}</p>`;
        
            accordionBody.innerHTML = accordionBodyHTML;
        
            flushCollapseDiv.appendChild(accordionBody);
        
            accordionItemDiv.appendChild(flushCollapseDiv);
        
            // accordionBody.appendChild(accordionBodyTextNode);
        
            accordionItemDiv.appendChild(accordionHeader);
            // flushCollapseDiv.appendChild(accordionBody);
            // nationalParksbasedOnState.appendChild(accordionItemDiv);
            nationalParksbasedOnState.appendChild(flushCollapseDiv);
        }
     })
       

}

function divContainer() {
    nationalParksbasedOnState.innerHTML = "";
}

// mountainsArray.forEach(function (mountain) {
//     let option = document.createElement('option');
//     option.value = mountain.name;
//     option.text = mountain.name;
//     selectMountain.appendChild(option);
// });







    
//     // Populate State dropdown
//     for (const park of nationalParksArray) {
//       const newOption = new Option(`${park.LocationName}, ${park.City}`, park.LocationID);
//       locationDropDown.options[locationDropDown.options.length] = newOption;
//     }
    
//     // Event listener for state selection
//     locationDropDown.addEventListener("change", function () {
//       const selectedParkId = this.value;
    
//       if (selectedParkId) {
//         // Find the park with the selected LocationID
//         const selectedPark = nationalParksArray.find(park => park.LocationID === selectedParkId);
    
//         // Log LocationName and City
//         if (selectedPark) {
//           console.log("Selected state:", selectedPark.LocationName);
//           console.log("City:", selectedPark.City);
//         }
//       }
//     });
    

// }



//     let accordionItemDiv = document.createElement("div");
//     accordionItemDiv.className = "accordion-item";

//     locationDropDown.appendChild(accordionItemDiv);

//     let accordionHeader = document.createElement("h2");
//     accordionHeader.className = "accordion-header";

//     accordionItemDiv.appendChild(accordionHeader);

//     let btn = document.createElement("button");
//     btn.className = "accordion-button collapsed";
//     btn.type = "button";
//     btn.setAttribute("data-bs-toggle", "collapse");

//     let targetId = "flsuh-collapse-" + park.LocationName

//     btn.setAttribute("data-bs-target", "#" + targetId);
//     btn.setAttribute("aria-expanded", "false");
//     btn.setAttribute("aria-controls", "flush-collapseOne");

//     let btnTextNode = document.createTextNode(park.City);
//     btn.appendChild(btnTextNode);

//     accordionHeader.appendChild(btn)

//     let flushCollapseDiv = document.createElement("div");
//     flushCollapseDiv.id = targetId;
//     flushCollapseDiv.className = "accordion-collapse collapse";
//     flushCollapseDiv.setAttribute("data-bs-parent", "#locationDropDown");

//     let accordionBody = document.createElement("div");
//     accordionBody.className = "accordionBody";

//     let accordionBodyTextNode = document.createTextNode(park.City);

//     accordionBody.appendChild(accordionBodyTextNode);

//     accordionItemDiv.appendChild(accordionHeader);
//     flushCollapseDiv.appendChild(accordionBody);
//     locationDropDown.appendChild(accordionItemDiv);
//     locationDropDown.appendChild(flushCollapseDiv);
  
// }

// function selectStateBtnClicked() {
//     locationDropDown.innerHTML = ""

//   let selectedCategory = locatio.value;

//   for(const park of nationalParksArray){
//     if(park.LocationName === selectedCategory){
//         addStatesToContainer(park)
//     }
//   }

// }








// //window.onload = function () {
// //     // Dropdown ID's
// //     let selectState = document.getElementById("selectState");
// //     let selectPark = document.getElementById("selectPark");
// //     const locationDropDown = document.getElementById("locationDropDown");


// // // Select State dropdown
// //     for (let states of locationsArray) {
// //         let option = document.createElement("option");
// //         option.value = states;
// //         option.text = states;
// //         selectState.appendChild(option);
// //     }

// // // select Park Type Dropdown
// //     for (let parks of parkTypesArray) {
// //         let option = document.createElement("option");
// //         option.value = parks;
// //         option.text = parks;
// //         selectPark.appendChild(option);
// //     }



// // };

// selectState.onchange = selectStateHandler;
// selectPark.onchange = selectParkHandler;

// selectLocation.style.display = "none";
// selectParkType.style.display = "none";

// selectLocation.onchange = selectLocationValue;
// selectParkType.onchange = selectParkTypeValue;

// displayAllParks()
