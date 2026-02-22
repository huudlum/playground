let qrBox = document.getElementById("qrBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let qrDownload = document.getElementById("qrDownload");
let refreshBtn = document.getElementById("refreshBtn")
let downloadBtn = document.getElementById("downloadBtn");

/*function to generate the QR code
checks for the length of the text entered and calls the api to generate the qr code - adding the entered text
to the end of the URL. Also enables download link and then enables the display of the QR code and the 2 other buttons.
Otherwise it adds the error class.
*/
function generateQR() {
    if (qrText.value.trim().length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
            + qrText.value;

        qrImg.onload = function downloadQR() {
            qrDownload.href = qrImg.src;
        }

        qrBox.classList.add("show-img");
        refreshBtn.classList.add("show-btn");
        downloadBtn.classList.add("show-btn");
    }

    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000)
    }
}