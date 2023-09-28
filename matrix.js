const matrixContainer = document.getElementById('matrix');
const numRows = 30; // Počet řádků
const numCols = 60; // Počet sloupců
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Seznam znaků

// Vytvořte prázdnou matici
const matrix = new Array(numRows);

// Inicializujte matici
for (let i = 0; i < numRows; i++) {
    matrix[i] = new Array(numCols).fill(' '); // Předvyplňte prázdnými znaky
}

// Funkce pro aktualizaci matice
function updateMatrix() {
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            // Náhodně vyberte znak ze seznamu
            const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
            matrix[i][j] = randomCharacter;
        }
    }
}

// Funkce pro zobrazení matice na stránce
function displayMatrix() {
    matrixContainer.innerHTML = '';
    for (let i = 0; i < numRows; i++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        for (let j = 0; j < numCols; j++) {
            const cellElement = document.createElement('span');
            cellElement.textContent = matrix[i][j];
            rowElement.appendChild(cellElement);
        }
        matrixContainer.appendChild(rowElement);
    }
}

// Aktualizujte a zobrazte matici pravidelně
function animateMatrix() {
    updateMatrix();
    displayMatrix();
    setTimeout(animateMatrix, 100); // Aktualizovat každých 100 ms
}

animateMatrix(); // Spusťte animaci
