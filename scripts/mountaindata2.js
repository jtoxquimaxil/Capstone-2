
    // Mounatain Info dropdown

    const mountainName = document.getElementById("mountainName");

    for (const mountains of mountainsArray) {
        mountainName.options[mountainName.options.length] = new Option(mountains.name)

    }
    mountainName.addEventListener("change", function () {

        const mountainName = this.value;


        console.log("Selected mountain:", mountainName);
    })

