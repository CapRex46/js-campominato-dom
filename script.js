//creo tre pulsanti per la selezione dei livelli
const easyButton = document.getElementById('easybtn');
const mediumButton = document.getElementById('medbtn');
const hardButton = document.getElementById('hardbtn');
const outputHtml = document.getElementById('output');

//creo la funzione 
function boxCreator(container, numbersBox) {
    for (let i = 1; i <= numbersBox; i++) {
        const nbox = document.createElement('div');
        nbox.className = 'box';
        nbox.innerHTML = i;
        container.append(nbox);
        nbox.addEventListener('click',function() {
            this.classList.toggle('blue');
        })
    }
}

let nbox = 1;

// ad ogni click corrisponderà il caricamento del livello
easyButton.addEventListener('click', function() {
    nbox = 49  
    outputHtml.className = 'easylevel';
    outputHtml.innerHTML = ''
    boxCreator(outputHtml, nbox)
})
mediumButton.addEventListener('click', function() {
    nbox = 81;
    outputHtml.className = 'mediumlevel'
    outputHtml.innerHTML = ''
    boxCreator(outputHtml, nbox)  
});
hardButton.addEventListener('click', function() {
    nbox = 100;
    outputHtml.className = 'hardlevel'
    outputHtml.innerHTML = ''
    boxCreator(outputHtml, nbox)
});

