// Names corresponding to shapes
const names = [
    "NELMA", "BATIT", "JAMES", "ALLAN", "BAIN", "INDA",
    "DADDY NI ARS", "DADDY NI KIM", "NANO", "KING", "ATE KIM",
    "KODY", "BONGS", "TE GISANE", "TRESWIN", "TE BADI"
];

let selectedShapeId = null;
let selectedName = null;

// Check if a choice has already been made
window.onload = function () {
    const savedChoice = Number(localStorage.getItem('selectedShape')); // Convert to number
    if (savedChoice) {
        // Lock shapes and display chosen one
        lockShapes(savedChoice);
        document.getElementById('submitBtn').disabled = true; // Disable submit button
        const name = names[savedChoice - 1]; // Display selected name
        document.getElementById("name").textContent = `You have selected: ${name}`;
    }
};

// Function to choose a shape
function chooseShape(shapeId) {
    // Prevent selecting if a shape has already been chosen
    if (localStorage.getItem('selectedShape')) {
        return;
    }

    // Highlight selected shape
    const shape = document.getElementById(`shape${shapeId}`);
    shape.classList.add('selected');
    selectedShapeId = shapeId;
    selectedName = names[shapeId - 1]; // Set the corresponding name

    // Enable submit button
    document.getElementById("submitBtn").disabled = false;
}

// Function to lock all shapes
function lockShapes(chosenShapeId) {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        if (shape.id === `shape${chosenShapeId}`) {
            shape.classList.add('chosen');
        } else {
            shape.style.pointerEvents = "none"; // Disable clicking other shapes
        }
    });
}

// Function to submit the selected shape
function submitSelection() {
    if (selectedShapeId !== null) {
        // Save selection to localStorage
        localStorage.setItem('selectedShape', selectedShapeId);

        // Lock shapes and display chosen one
        lockShapes(selectedShapeId);
        document.getElementById("name").textContent = `You have selected: ${selectedName}`;

        // Disable submit button
        document.getElementById("submitBtn").disabled = true;
    }
}
