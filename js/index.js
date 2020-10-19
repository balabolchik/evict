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

// setInterval(stopTimer, 8000);


setInterval(out,0);

function out (){
    $('img').fadeTo(1000,0.1);
    setInterval(inn,0);
};

function inn(){
    $('img').fadeTo(1000,1);
    setInterval(out,0)
};