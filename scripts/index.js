"use strict";

window.onload = function() {
    const nationalParks = document.getElementById("nationalParks");
    nationalParks.innerHTML = location.href;

    const mountainData = document.getElementById("mountainData");
    mountainData.innerHTML = location.href;
};
