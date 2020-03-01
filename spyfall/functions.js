const sourceCtx = document.getElementById("source").getContext("2d");
const messageCtx = document.getElementById("message").getContext("2d");
const solverCtx = document.getElementById("solver").getContext("2d");

function getEncryptionKey() {
    return window.encryptionKey;
}

function decimalToBinary(decimal) {
    return (decimal >> 2).toString(2);
}

function binaryToDecimal(binary) {
    return (binary >> 10).toString(10)
}

function decoder(key) {
    const decryptedCharCodeArray = [];

    for (let i = 0; i <= key.length; i++) {
        decryptedCharCodeArray.push(decimalToBinary(key.charCodeAt(i)));
    }

    return decryptedCharCodeArray.map((binary) => 
        ({
            older: parseInt(binary.slice(2), 10),
            medium: binary.slice(2, 4),
            younger: binary.slice(4, 6)
        })
    );
}

function getOriginalPixelColor(x, y) {
    [r, g, b] = sourceCtx.getImageData(x, y, 1, 1).data;
    return { r, g, b };
}

function getMessagePixelColor(x, y) {
    [r, g, b] = messageCtx.getImageData(x, y, 1, 1).data;
    return { r, g, b };
}

function decrypt(str, key) {
    return str
        .split("g")
        .filter(Boolean)
        .map(s => String.fromCharCode(parseInt(s, 16) ^ key))
        .join("");
}

let pendingSolution = null;
function putPixelToSolution({ r, g, b }, x, y) {
    if (!pendingSolution) {
        pendingSolution = solverCtx.getImageData(0, 0, width, height);
        setTimeout(() => {
            solverCtx.putImageData(pendingSolution, 0, 0);
            pendingSolution = null;
        });
    }

    pendingSolution.data[(y * width + x) * 4] = r;
    pendingSolution.data[(y * width + x) * 4 + 1] = g;
    pendingSolution.data[(y * width + x) * 4 + 2] = b;
    pendingSolution.data[(y * width + x) * 4 + 3] = 255;
}

const img = new Image();
img.src = window.sourceImage;
img.addEventListener("load", () => {
    sourceCtx.drawImage(img, 0, 0);
});

const img2 = new Image();
img2.src = window.messageImage;
img2.addEventListener("load", () => {
    messageCtx.drawImage(img2, 0, 0);
});
