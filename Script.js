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
    // Check if a choice has been made previously
    const savedChoice = localStorage.getItem('selectedShape');
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
        // Mark this shape as chosen and disable further selection
        chosenShapes.push(selectedShapeId);
        document.getElementById("name").textContent = `You have selected: ${selectedName}`;

        // Disable the chosen shape visually
        const shape = document.getElementById(`shape${selectedShapeId}`);
        shape.classList.add('chosen');

        // Add "CHOSEN" text inside the shape
        shape.textContent = "CHOSEN";

        // Reset selection state
        resetSelection();
    }
}

