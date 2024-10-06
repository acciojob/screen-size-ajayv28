//your JS code here. If required.
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeDisplay = document.getElementById('sizeDisplay');
    sizeDisplay.textContent = `Width: ${width} and Height: ${height}`;
}

// Initial size update
updateSize();

// Update size on window resize
window.addEventListener('resize', updateSize);
