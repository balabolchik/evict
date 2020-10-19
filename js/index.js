let sec = 0;
let secDes = 0;
let min = 0;
let minDes = 0;
let hour = 0;
let hourDes = 0;

// $("#main-heading").text(`${hourDes}${hour}:${minDes}${min}:${secDes}${sec}`);

let counter = setInterval(hours,1000);

function hours(){
    sec++;
    if (sec===10){
        secDes++;
        sec=0;
    };
    if (secDes===6){
        min++;
        secDes=0;
    };
    if (min===10){
        minDes++;
        min=0;
    };
    if(minDes===6){
        hour++;
        minDes=0;
    };
    if(hour===10||(hour===4 && hourDes===2)){
        hourDes++;
        hour=0;
    };
    if (hourDes===3){
        hourDes=0;
    };
    $("#main-heading").text(`${hourDes}${hour}:${minDes}${min}:${secDes}${sec}`);
};

// -----------------------------------------------------
let div = document.querySelector('img');
let leftOffset =0;
let topOffset=0;
function moveHeading (){
    $('#main-heading').offset({left: Math.abs(leftOffset), top: Math.abs(topOffset)});
    topOffset++;
    leftOffset++;
    let width=div.clientWidth;
    let heigth = div.clientHeight;
    let widthString = document.querySelector('h1').clientWidth;
    let heigthString = document.querySelector('h1').clientHeight;
    if (leftOffset>(width-widthString-4)){
        leftOffset=-leftOffset;
    };
    if (topOffset>(heigth-heigthString-4)){
        topOffset=-topOffset
    };
};

setInterval(moveHeading, 10);