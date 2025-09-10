const qrText = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");
const qrImg = document.getElementById("qrImg");

const generateQR = () => {
    if(qrText.value.trim() === ""){
        imgBox.style.display = "none";
        qrImg.src = "";
        return;
    }
    imgBox.style.display = "flex";
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value.trim());
}

qrText.addEventListener("input", () => {
    if(qrText.value.trim() === ""){
        imgBox.style.display = "none";
        qrImg.src = "";
    }
});