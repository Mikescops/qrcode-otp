var QRCode = require('qrcode');

function component() {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "enter your seed";
    input.onkeypress = onSeedChange;
    input.onchange = onSeedChange;
    document.body.appendChild(input);

    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';

    QRCode.toCanvas(canvas, 'What are you doing?', function (error) {
        if (error) console.error(error);
        console.log('success!');
    });

    document.body.appendChild(canvas);
}

function onSeedChange(event) {
    const canvas = document.getElementById('canvas');

    const payload = `otpauth://totp/ImportedSecret?secret=${event.target.value || ''}&issuer=OTPImporter`;

    QRCode.toCanvas(canvas, payload, function (error) {
        if (error) console.error(error);
        console.log('success!');
    });
}

component();