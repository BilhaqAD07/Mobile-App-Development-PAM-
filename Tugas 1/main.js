// add field function
const addTableField = () => {
    const tabel = document.getElementById('tabel');

    // tabel header
    const tHead = tabel.querySelector('thead tr');
    const th = document.createElement('th');
    th.innerText = "Nilai Mutu";
    tHead.appendChild(th);
    
    // tabel body
    const bodyTr = tabel.querySelectorAll('tbody tr');
    bodyTr.forEach((tr) => {
        const td = document.createElement('td');
        tr.appendChild(td);
    });
};

// convert value function
const convertQualityValue = () => {
    const tabel =  document.getElementById('tabel');
    const bodyTr = tabel.querySelectorAll('tbody tr');
    bodyTr.forEach((tr) => {
        let valueLabel = 'E';
        const td = tr.querySelectorAll('td');
        const value = Number(td[3].innerText) || 0;
        if (value >= 80) valueLabel = 'A';
        else if (value >= 70 && value <80) valueLabel = 'AB';
        else if (value >= 60 && value <70) valueLabel = 'B';
        else if (value >= 50 && value <60) valueLabel = 'BC';
        else if (value >= 40 && value <50) valueLabel = 'C';
        else if (value >= 10 && value <40) valueLabel = 'D';
        td[4].innerText = valueLabel;
    })
};

// Button Event Listener
const button = document.getElementById('grade');
button.addEventListener('click', () => {
    addTableField();
    convertQualityValue();
    button.parentNode.removeChild(button);
});
