"use strict";

const selectElement = document.querySelector(".form-select");
const mountainAccordion = document.getElementById('mountainAccordion');
const mountianInfo = document.getElementById("mountainInfo");


mountainsArray.forEach((mountain, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.text = mountain.name;
    selectElement.appendChild(option);
});


selectElement.addEventListener('change', function () {
    const selectedIndex = this.value;
    const selectedMountain = mountainsArray[selectedIndex];

    displayMountainAccordion(selectedMountain);
});

function mountainType() {

}

function displayMountainAccordion(mountain) {

    mountainAccordion.innerHTML = "";

    const accordionItemDiv = document.createElement("div");
    accordionItemDiv.className = "accordion-item";

    const accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";

    const btn = document.createElement("button");
    btn.className = "accordion-button collapsed";
    btn.type = "button";
    btn.setAttribute("data-bs-toggle", "collapse");
    const targetId = "mountainCollapse";
    btn.setAttribute("data-bs-target", "#" + targetId);
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", targetId);
    btn.textContent = mountain.name; 
    accordionHeader.appendChild(btn);
    const flushCollapseDiv = document.createElement("div");
    flushCollapseDiv.id = targetId;
    flushCollapseDiv.className = "accordion-collapse collapse";
    flushCollapseDiv.setAttribute("data-bs-parent", "#mountainAccordion");
    const accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body";
    const accordionBodyHTML = `
        <p><strong>Elevation:</strong> ${mountain.elevation} feet</p>
        <p><strong>Effort:</strong> ${mountain.effort}</p>
        <p><strong>Description:</strong> ${mountain.desc}</p>
        <!-- Add more information as needed -->`;

    accordionBody.innerHTML = accordionBodyHTML;

    flushCollapseDiv.appendChild(accordionBody);
    accordionItemDiv.appendChild(accordionHeader);
    flushCollapseDiv.appendChild(accordionBody);
    accordionItemDiv.appendChild(flushCollapseDiv);
    mountainAccordion.appendChild(accordionItemDiv);

}
