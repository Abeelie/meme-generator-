let textbox1 = document.getElementById('textbox1');
let textbox2 = document.getElementById('textbox2');
let topTextSizeInput = document.getElementById('top-text-size-input');
let bottomTextSizeInput = document.getElementById('bottom-text-size-input');
let imageInput = document.getElementById('input-image');
let generateBtn = document.getElementById('btn');
let canvas = document.getElementById('meme-canvas');
let go;
let fontSize;

function generateMeme (img, topText, bottomText, topTextSize, bottomTextSize) {
    canvas.width = img.width;
    canvas.height = img.height;

    go.clearRect(0, 0, canvas.width, canvas.height);
    go.drawImage(img, 0, 0);

    go.fillStyle = 'white';
    go.strokeStyle = 'black';
    go.textAlign = 'center';

    fontSize = canvas.width * topTextSize;
    go.font = fontSize + 'px Impact';
    go.lineWidth = fontSize / 20;

    go.textBaseline = 'top';
    topText.split('\n').forEach(function (x, i) {
        go.fillText(x, canvas.width / 2, i * fontSize, canvas.width);
        go.strokeText(x, canvas.width / 2, i * fontSize, canvas.width);
    });

    fontSize = canvas.width * bottomTextSize;
    go.font = fontSize + 'px Impact';
    go.lineWidth = fontSize / 20;

    go.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach(function (x, i) { 
        go.fillText(x, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        go.strokeText(x, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}

function start () { 
    go = canvas.getContext('2d');
    canvas.width = canvas.height = 0;
    textbox1.value = textbox2.value = 'Add Text Here';

    generateBtn.addEventListener('click', function () {
        let reader = new FileReader();
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            generateMeme(img, textbox1.value, textbox2.value, topTextSizeInput.value, bottomTextSizeInput.value);
        };
        reader.readAsDataURL(imageInput.files[0]);
    });
}

if (!document.readyState === "loading") {
    document.addEventListener("DomContentLoaded", start())
}else {
    start();
}