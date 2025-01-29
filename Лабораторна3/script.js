const palettes = [
    { name: "Aussie Palette", code: "AU", colors: ["Gold", "Orange", "Sky Blue", "Turquoise", "Deep Orange", "Red", "Beige", "Dark Brown"] },
    { name: "British Palette", code: "GB", colors: ["Crimson", "Royal Blue", "Amber", "Dark Indigo", "Goldenrod", "Burgundy", "Mauve", "Navy"] },
    { name: "Chinese Palette", code: "CN", colors: ["Coral", "Chestnut", "Pink", "Periwinkle", "Dark Teal", "Cream", "Slate", "Salmon"] },
    { name: "Dutch Palette", code: "NL", colors: ["Gold", "Red Orange", "Teal", "Purple", "Hot Pink", "Crimson", "Royal Blue", "Forest Green"] },
    { name: "French Palette", code: "FR", colors: ["Yellow", "Blue", "Red", "Sea Green", "Violet", "Orange", "Indigo", "Maroon"] },
    { name: "German Palette", code: "DE", colors: ["Red", "Black", "Gold", "Dark Red", "Dark Green", "Dark Blue", "Brown", "Charcoal"] },
    { name: "Indian Palette", code: "IN", colors: ["Saffron", "White", "Green", "Navy", "Gold", "Crimson", "Lime", "Purple"] },
    { name: "European Palette", code: "EU", colors: ["White", "Blue", "Red", "Gray", "Yellow", "Purple", "Black", "Green"] },
    { name: "Italian Palette", code: "IT", colors: ["Emerald", "Ivory", "Scarlet", "Goldenrod", "Cornflower", "Fuchsia", "Saddle Brown", "Sea Green"] }
];

const paletteContainer = document.getElementById("paletteContainer");
const modal = document.getElementById("modal");
const colorsContainer = document.getElementById("colorsContainer");
const paletteTitle = document.getElementById("paletteTitle");

// Створення палітр
palettes.forEach(palette => {
    const paletteCard = document.createElement("div");
    paletteCard.className = "palette-card";
    paletteCard.onclick = () => openPalette(palette);

    let colorsHTML = "";
    palette.colors.slice(0, 8).forEach(color => {
        colorsHTML += `<div class="color-box" style="background-color: ${getColorHex(color)}"></div>`;
    });

    paletteCard.innerHTML = `
        <div class="palette-preview">${colorsHTML}</div>
        <div class="palette-footer">
            <span>${palette.name}</span>
            <span>${palette.code}</span>
        </div>
    `;

    paletteContainer.appendChild(paletteCard);
});

// Відкриття модального вікна
function openPalette(palette) {
    paletteTitle.innerText = palette.name;
    colorsContainer.innerHTML = "";
    palette.colors.forEach(color => {
        const colorBox = document.createElement("div");
        colorBox.className = "color-box-large";
        colorBox.style.backgroundColor = getColorHex(color);
        colorBox.innerText = color;
        colorBox.onclick = () => copyToClipboard(getColorHex(color));
        colorsContainer.appendChild(colorBox);
    });
    modal.style.display = "flex";
}

// Закриття модального вікна
function closeModal() {
    modal.style.display = "none";
}
function copyToClipboard(colorCode) {
    // Копіюємо код кольору
    navigator.clipboard.writeText(colorCode);

    // Відображаємо повідомлення про копіювання
    const copyMessage = document.getElementById("copyMessage");
    const copyColor = document.getElementById("copyColor");
    copyColor.innerText = colorCode;
    copyMessage.style.display = "flex";
    copyMessage.style.backgroundColor = colorCode;

    // Відтворюємо звук копіювання
    const copySound = document.getElementById("copySound");
    copySound.play();

    // Автоматично закриваємо повідомлення через 1.5 секунди
    setTimeout(() => {
        copyMessage.style.display = "none";
    }, 1500);
}


// Закриття при кліку поза модалкою
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};
// Отримання HEX-коду за назвою кольору
function getColorHex(colorName) {
    const colors = {
        "Gold": "#FFD700", "Orange": "#FFA500", "Sky Blue": "#87CEEB", "Turquoise": "#40E0D0",
        "Deep Orange": "#FF4500", "Red": "#FF0000", "Beige": "#F5F5DC", "Dark Brown": "#5D4037",
        "Crimson": "#DC143C", "Royal Blue": "#4169E1", "Amber": "#FFBF00", "Dark Indigo": "#140F2D",
        "Goldenrod": "#DAA520", "Burgundy": "#800020", "Mauve": "#E0B0FF", "Navy": "#000080",
        "Coral": "#FF6F61", "Chestnut": "#6B4226", "Pink": "#FFC0CB", "Periwinkle": "#91A8D0",
        "Dark Teal": "#034748", "Cream": "#F8E9A1", "Slate": "#2E4057", "Salmon": "#FA8072",
        "Red Orange": "#FF4500", "Teal": "#008080", "Purple": "#800080", "Hot Pink": "#FF69B4",
        "Indigo": "#4B0082", "Maroon": "#800000", "Charcoal": "#36454F", "Lime": "#00FF00",
        "Emerald": "#50C878", "Ivory": "#FFFFF0", "Scarlet": "#FF2400", "Cornflower": "#6495ED",
        "Fuchsia": "#FF00FF", "Saddle Brown": "#8B4513", "Sea Green": "#2E8B57", "Forest Green": "#228B22",
        "Dark Red": "#8B0000", "Dark Green": "#006400", "Dark Blue": "#00008B", "Brown": "#A52A2A",
        "Saffron": "#FFA52C", "White": "#FFFFFF", "Green": "#008000", "Blue": "#0000FF",
        "Black": "#000000", "Gray": "#808080", "Yellow": "#FFFF00"
    };

    return colors[colorName] || "transparent"; // Якщо колір не знайдено, повертаємо "прозорий"
}

