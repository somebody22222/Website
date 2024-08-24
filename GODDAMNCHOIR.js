function PEGAR(GODDAMNCHOIRS) {
    const randomIndex = Math.floor(Math.random() * GODDAMNCHOIRS.length);
    return GODDAMNCHOIRS[randomIndex]
}

function bigspace(text) {
    const result = text.replace(/ /g, '⠀');
    return result
}

function NUMEROUNO(text) {
    let processedText = text.replace(/\n/g, '<br>');

    processedText = bigspace(processedText);

    processedText = processedText.replace(/(\d+)/g, '<span class="text-number">$1</span>');

    processedText = processedText.replace(/GAB-A/g, '<span class="text-autism">A</span>');

    processedText = processedText.replace(/THEBADWORD/g, '<span class="text-fuck">FUCK</span>');

    processedText = processedText.replace(/#/g, '<span class="text-yolo">#</span>');

    processedText = processedText.replace(/▲▼▲▼▲▼▲/g, '<span class="text-triangle">▲▼▲▼▲▼▲</span>');

    return processedText
}

window.onload = function() {
    fetch('GODDAMNCHOIR.json')
        .then(response => response.json())
        .then(data => {
            const GODDAMNCHOIRS = data.GODDAMNCHOIRS;
            const firstclass = document.getElementById("CHOIR");

            if (firstclass) {
                let chosenText = PEGAR(GODDAMNCHOIRS);
                chosenText = NUMEROUNO(chosenText);
                firstclass.innerHTML = chosenText
            }
        })
}