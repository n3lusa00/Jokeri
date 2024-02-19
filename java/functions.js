const jokeriTable = document.getElementById('jokeriTable');
const newRowBtn = document.getElementById('newRowBtn');
const rowCountElement = document.getElementById('rowCount');

let rowCount = 0;

newRowBtn.addEventListener('click', addNewRow);

for (let i = 0; i < 3; i++) {
    addNewRow();
}

function addNewRow() {
    const newRow = document.createElement('div');
    newRow.classList.add('row');

    for (let i = 0; i < 7; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        const newNumber = document.createElement('div');
        newNumber.classList.add('number');
        newNumber.textContent = randomNumber;
        newRow.appendChild(newNumber);
    }

    jokeriNumbers.insertBefore(newRow, jokeriNumbers.firstChild);

    rowCount++;
    rowCountElement.textContent = `Arvottuja rivejä: ${rowCount}`;
}