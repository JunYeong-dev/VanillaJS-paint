const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

// canvas는 두개의 사이즈를 정의 해 줘야함 
// 1. css의 canvas사이즈 - css
// 2. element(픽셀)를 다루기 위한 사이즈 - js

canvas.width = 700;
canvas.height = 700;

// line의 색상과 굵기 설정
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    // canvas상의 좌표
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}