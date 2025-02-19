// Initial Permutation
function initialPermutation(matrix) {
    let permutedMatrix = [];
    for (let i = 0; i < 8; i++) {
        permutedMatrix.push([]);
        for (let j = 0; j < 8; j++) {
            permutedMatrix[i].push(matrix[j][i]);
        }
    }
    return permutedMatrix;
}

// Final Permutation (Inverse of IP)
function finalPermutation(matrix) {
    let permutedMatrix = [];
    for (let i = 0; i < 8; i++) {
        permutedMatrix.push([]);
        for (let j = 0; j < 8; j++) {
            permutedMatrix[i].push(matrix[j][i]);
        }
    }
    return permutedMatrix;
}

// Swap two halves of the matrix
function swapHalves(matrix) {
    let halfSize = matrix.length / 2;
    let topHalf = matrix.slice(0, halfSize);
    let bottomHalf = matrix.slice(halfSize);
    return bottomHalf.concat(topHalf);
}

// Encrypt function
function encrypt(matrix) {
    console.log("Initial Permutation (IP):");
    matrix = initialPermutation(matrix);
    printMatrix(matrix);

    console.log("\nAfter Swapping:");
    matrix = swapHalves(matrix);
    printMatrix(matrix);

    console.log("\nFinal Permutation (FP):");
    matrix = finalPermutation(matrix);
    printMatrix(matrix);

    return matrix;
}

// Decrypt function (same process as encryption in this simple example)
function decrypt(matrix) {
    console.log("Initial Permutation (IP):");
    matrix = initialPermutation(matrix);
    printMatrix(matrix);

    console.log("\nAfter Swapping (Reversing):");
    matrix = swapHalves(matrix);
    printMatrix(matrix);

    console.log("\nFinal Permutation (FP):");
    matrix = finalPermutation(matrix);
    printMatrix(matrix);

    return matrix;
}

// Function to print the matrix in a readable format
function printMatrix(matrix) {
    let output = matrix.map(row => row.join(' ')).join('\n');
    document.getElementById("result-output").textContent = output;
}

// Dynamically create the 8x8 input matrix grid
function createInputMatrix() {
    let matrixRowsContainer = document.getElementById("matrix-rows");
    matrixRowsContainer.innerHTML = ''; // Clear any previous rows

    for (let i = 0; i < 8; i++) {
        let row = document.createElement("div");
        for (let j = 0; j < 8; j++) {
            let input = document.createElement("input");
            input.type = "number";
            input.id = `matrix-${i}-${j}`;
            row.appendChild(input);
        }
        matrixRowsContainer.appendChild(row);
    }
}

// Get the 8x8 matrix values from the input fields
function getMatrix() {
    let matrix = [];
    for (let i = 0; i < 8; i++) {
        let row = [];
        for (let j = 0; j < 8; j++) {
            let value = parseInt(document.getElementById(`matrix-${i}-${j}`).value);
            row.push(value);
        }
        matrix.push(row);
    }
    return matrix;
}

// Event listeners
document.getElementById("submit-btn").addEventListener("click", () => {
    createInputMatrix();
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("encryption-options").classList.remove("hidden");
});

document.getElementById("encrypt-btn").addEventListener("click", () => {
    let matrix = getMatrix();
    let encryptedMatrix = encrypt(matrix);
    document.getElementById("encryption-options").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("decrypt-options").classList.remove("hidden");

    // Store the encrypted matrix globally
    window.encryptedMatrix = encryptedMatrix;
});

document.getElementById("decrypt-btn").addEventListener("click", () => {
    let matrix = getMatrix();
    let decryptedMatrix = decrypt(matrix);
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("decrypt-options").classList.add("hidden");

    window.decryptedMatrix = decryptedMatrix;
    printMatrix(decryptedMatrix);
});

document.getElementById("decrypt-yes").addEventListener("click", () => {
    printMatrix(window.encryptedMatrix);
    document.getElementById("decrypt-options").classList.add("hidden");
});

document.getElementById("decrypt-no").addEventListener("click", () => {
    document.getElementById("decrypt-options").classList.add("hidden");
    alert("Encryption completed. Decryption skipped.");
});
