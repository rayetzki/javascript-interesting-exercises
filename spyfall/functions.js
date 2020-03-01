const sourceCtx = document.getElementById("source").getContext("2d");
const messageCtx = document.getElementById("message").getContext("2d");
const solverCtx = document.getElementById("solver").getContext("2d");

function getEncryptionKey() {
    return window.encryptionKey;
}

function decimalToBinary(decimal) {
    return ("00000000" + (decimal >> 2).toString(2)).substr(-8);
}


function decodeCharToBin(key) {
    const decryptedCharCodeArray = [];
    //расшифровать каждый элемент массива и превратить его в бинарный вид
    for (let i in key) {
        decryptedCharCodeArray.push(decimalToBinary(key.charCodeAt(i)));
    }
    return decryptedCharCodeArray;
}

function decoder({ r, g, b }, key) {
    const bitsToIntArr = []
    const decryptedCharCodeArray = decodeCharToBin(key)
    //получить каждый бит бинарного числа и разбить на 3 разряда
    for (let bin of decryptedCharCodeArray) {
        bitsToIntArr.push([
            parseInt(String(bin).slice(2), 2) || 0, 
            parseInt(String(bin).slice(2, 5), 2) || 0,
            parseInt(String(bin).slice(5), 2) || 0
        ]);
    }
    return bitsToIntArr.map(binary => ({
        r: binary[0] + r,
        g: binary[1] + g,
        b: binary[2] + b
    }));
}

function getOriginalPixelColor(x, y) {
    [r, g, b] = sourceCtx.getImageData(x, y, 1, 1).data;
    return { r, g, b };
}

function getMessagePixelColor(x, y) {
    [r, g, b] = messageCtx.getImageData(x, y, 1, 1).data;
    return { r, g, b };
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
