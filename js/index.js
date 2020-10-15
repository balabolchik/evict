let latin=["name"];
let ukraine=["ім'я"];
let randomNumber;

let question = confirm(`Запитувати на українській?`);
let answerIsCorrect;
if(question){
    onUkraine();
}else{
    onLatin();
};

alert('Вітаю, ви вивчили всі слова!');


function onUkraine(){
    while (ukraine.length!==0){
        randomNumber=Math.floor(Math.random()*ukraine.length);
        alert(ukraine[randomNumber]);
        answerIsCorrect=confirm(ukraine[randomNumber]+"\n"+latin[randomNumber]);
        if (answerIsCorrect){
            ukraine.splice(randomNumber,1);
            latin.splice(randomNumber,1);
        };
    };
};

function onLatin(){
    while (latin.length!==0){
        randomNumber=Math.floor(Math.random()*latin.length);
        alert(latin[randomNumber]);
        answerIsCorrect=confirm(latin[randomNumber]+"\n"+ukraine[randomNumber]);
        if(answerIsCorrect){
            ukraine.splice(randomNumber,1);
            latin.splice(randomNumber,1);
        };
    };
};