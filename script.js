const saDisplay = document.getElementById('saDisplay')
const saIn = document.getElementById('saIn')
const saDe = document.getElementById('saDe')

const alDisplay = document.getElementById('alDisplay')
const alIn = document.getElementById('alIn')
const alDe = document.getElementById('alDe')

const ahDisplay = document.getElementById('ahDisplay')
const ahIn = document.getElementById('ahIn')
const ahDe = document.getElementById('ahDe')

const resetAll = document.getElementById('resetAll')

let saInitialValue = 0;
let alInitialValue = 0;
let ahInitialValue = 0;

saIn.addEventListener('click', function () {
    if (saInitialValue === 33) {
        return alert('SubahanAllah Complete');
    }
    saInitialValue++;
    saDisplay.innerText = saInitialValue;
})

saDe.addEventListener('click', function () {
    if (saInitialValue === 0) {
        return alert('You cant count Negetive');
    }
    saInitialValue -= 1;
    saDisplay.innerText = saInitialValue;
})

alIn.addEventListener('click', function () {
    if (alInitialValue === 33) {
        return alert('Alhamdulillah Complete');
    }
    alInitialValue++;
    alDisplay.innerText = alInitialValue;
})

alDe.addEventListener('click', function () {
    if (alInitialValue === 0) {
        return alert('You cannot count Negetive');
    }
    alInitialValue -= 1;
    alDisplay.innerText = alInitialValue;
})

ahIn.addEventListener('click', function () {
    if (ahInitialValue === 34) {
        return alert('Allahhuakbar Complete');
    }
    ahInitialValue++;
    ahDisplay.innerText = ahInitialValue;
})

ahDe.addEventListener('click', function () {
    if (ahInitialValue === 0) {
        return alert('You cant count Negetive');
    }
    ahInitialValue -= 1;
    ahDisplay.innerText = ahInitialValue;
})

resetAll.addEventListener('click', function () {
    saDisplay.innerText = 0;
    alDisplay.innerText = 0;
    ahDisplay.innerText = 0;
    saInitialValue = 0;
    alInitialValue = 0;
    ahInitialValue = 0;
})