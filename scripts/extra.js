
// function  parkByState(parksName) {
//     parksName.forEach(park => {
//         let accordionItemDiv = document.createElement("div");
//         accordionItemDiv.className = "accordion-item";

//         nationalParksbasedOnState.appendChild(accordionItemDiv);

//         let accordionHeader = document.createElement("h2");
//         accordionHeader.className = "accordion-header";

//         accordionItemDiv.appendChild(accordionHeader);

//         let btn = document.createElement("button");
//         btn.className = "accordion-button collapsed";
//         btn.type = "button";
//         btn.setAttribute("data-bs-toggle", "collapse");

//         let targetId = "flush-collapse-" + park.LocationID;

//         btn.setAttribute("data-bs-target", "#" + targetId);
//         btn.setAttribute("aria-expanded", "false");
//         btn.setAttribute("aria-controls", targetId);

//         let btnTextNode = document.createTextNode(park.LocationName);
//         btn.appendChild(btnTextNode);

//         accordionHeader.appendChild(btn);

//         let flushCollapseDiv = document.createElement("div");
//         flushCollapseDiv.id = targetId;
//         flushCollapseDiv.className = "accordion-collapse collapse"
//         flushCollapseDiv.setAttribute("data-bs-parent", "#parkContainer");

//         let accordionBody = document.createElement("div");
//         accordionBody.className = "accordion-body";

//         let accordionBodyHTML = `
//             <p><strong>Location ID:</strong> ${park.LocationID}</p>
//             <p><strong>Location Name:</strong> ${park.LocationName}</p>
//             <p><strong>Address:</strong> ${park.Address}</p>
//             <p><strong>City:</strong> ${park.City}</p>
//             <p><strong>State:</strong> ${park.State}</p>
//             <p><strong>Zip Code:</strong> ${park.ZipCode}</p>
//             <p><strong>Phone:</strong> ${park.Phone}</p>
//             <p><strong>Fax:</strong> ${park.Fax}</p>
//             <p><strong>Latitude:</strong> ${park.Latitude}</p>
//             <p><strong>Longitude:</strong> ${park.Longitude}</p>
//             <p><strong>Visit:</strong> ${park.hasOwnProperty('Visit')}</p>
//         `;

//         accordionBody.innerHTML = accordionBodyHTML;

//         flushCollapseDiv.appendChild(accordionBody);

//         accordionItemDiv.appendChild(flushCollapseDiv);
//     });
// };

// function parkByType(parkType) {
//     parkType.forEach(park => {
//         let accordionItemDiv = document.createElement("div");
//         accordionItemDiv.className = "accordion-item";

//         nationalParksbasedOnState.appendChild(accordionItemDiv);

//         let accordionHeader = document.createElement("h2");
//         accordionHeader.className = "accordion-header";

//         accordionItemDiv.appendChild(accordionHeader);

//         let btn = document.createElement("button");
//         btn.className = "accordion-button collapsed";
//         btn.type = "button";
//         btn.setAttribute("data-bs-toggle", "collapse");

//         let targetId = "flush-collapse-" + park.LocationID;

//         btn.setAttribute("data-bs-target", "#" + targetId);
//         btn.setAttribute("aria-expanded", "false");
//         btn.setAttribute("aria-controls", targetId);

//         let btnTextNode = document.createTextNode(park.LocationName);
//         btn.appendChild(btnTextNode);

//         accordionHeader.appendChild(btn);

//         let flushCollapseDiv = document.createElement("div");
//         flushCollapseDiv.id = targetId;
//         flushCollapseDiv.className = "accordion-collapse collapse"
//         flushCollapseDiv.setAttribute("data-bs-parent", "#parkContainer");

//         let accordionBody = document.createElement("div");
//         accordionBody.className = "accordion-body";

//         let accordionBodyHTML = `
//             <p><strong>Location ID:</strong> ${park.LocationID}</p>
//             <p><strong>Location Name:</strong> ${park.LocationName}</p>
//             <p><strong>Address:</strong> ${park.Address}</p>
//             <p><strong>City:</strong> ${park.City}</p>
//             <p><strong>State:</strong> ${park.State}</p>
//             <p><strong>Zip Code:</strong> ${park.ZipCode}</p>
//             <p><strong>Phone:</strong> ${park.Phone}</p>
//             <p><strong>Fax:</strong> ${park.Fax}</p>
//             <p><strong>Latitude:</strong> ${park.Latitude}</p>
//             <p><strong>Longitude:</strong> ${park.Longitude}</p>
//             <p><strong>Visit:</strong> ${park.hasOwnProperty('Visit')}</p>
//         `;

//         accordionBody.innerHTML = accordionBodyHTML;

//         flushCollapseDiv.appendChild(accordionBody);

//         accordionItemDiv.appendChild(flushCollapseDiv);
//     });
// };

// function clearContainer() {
//     nationalParksbasedOnState.innerHTML = "";
// };
