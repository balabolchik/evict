let randomWords =["кінь", "преса", "ефект", "гроші", "теорія", "черга", "удар", "кодекс", "жовтень", "наявність", "очікування", "канал", "дума", "відкриття", "визначення", "стіна", "варіант", "контакт", "сезон", "театр", "поїздка", "випуск", "реєстрація", "костюм", "проблема", "автомобіль", "розум", "жах", "квартира", "темп", "послуга", "хлопчик", "порядок", "груди", "вимога", "договір", "образ", "порядок", "сенс", "читач", "назва", "біль", "література", "спільнота", "село", "справа", "режисер", "колега", "виставка", "зміна", "криза", "інтернет", "вершина", "недостача", "водій", "дійсність", "плече", "компанія", "висота", "свідок", "банк", "номер", "дозвіл", "дорога", "список", "зброя", "почуття", "власник", "різниця", "людство", "гідроелектростанція", "учень", "монастир", "спеціаліст", "спогади", "живіт", "штаб", "вийняток", "вересень", "бажання", "схід", "сторона", "інститут", "ознака", "матеріал", "пісок", "наявність", "власник", "кандидат", "темрява", "міст", "проведення", "техніка", "грудень", "збір", "політика", "умова", "сніг", "розробка", "висновок", "вирок", "підготовка"];

let name;
let addNewPlayers;
let anotherGame;
let numberOfPlayer = 0;
let gessingWord;
let secretWord = [];
let results = "Результати гри:"
let resultsOfGame = {
    players : [],
    score : []
};
let letter;
let letterIsCorrect;
let listedLetters=[];
let wordIsGuessed = false;
let oneLetterIsEntered;

do {//додає гравців у гру
    numberOfPlayer++;//номерує гравців
    name = prompt(`Гравець ${numberOfPlayer}, як вас звати?`);//вводить ім'я кожного гравця
    resultsOfGame.players.push(`${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`);//додає ім'я гравця в базу
    resultsOfGame.score.push(10);//задає початковий рахунок гравця у базу
    addNewPlayers = confirm(`Хочете добавити ще одного гравця?`)//запитує чи потрібно додати ще гравця
} while (addNewPlayers);//додає гравців у гру

do {
    gessingWord = randomWords[Math.floor(Math.random()*randomWords.length)].toUpperCase().split('');//обирає рандомне слово
    console.log(gessingWord);//виводить загадане слово в консоль
    for (let i=0; i<gessingWord.length;i++){//створює масив з закритими буквами
        secretWord.push('__');//додає до масиву закриті букви
    };//створює масив з закритими буквами
    console.log(secretWord.join('  '));//виводить в консоль масив з закритими буквами
    
    do{//гравець вводить літери з клавіатури
        // Введення літери --------------------------------------------------------------------------------------------------------
        letter = prompt(`${secretWord.join('  ')}\nВведіть вашу літеру:`).toUpperCase();//введення літери
        console.log(letter);//виводить літеру в консоль
        if (letter.length>1||letter.length<1){//перевіряє чи літера не пуста або не більше одної літери
            letterIsCorrect=false;//перевірка на кількість введених літер
        } else if (listedLetters.indexOf(letter)!==-1) {

        }else {//дія, якщо буква одна
            letterIsCorrect=true; //присвоює значення вірно якщо буква одна
        };//кінець перевірки на кількість літер
        while (!letterIsCorrect){
            letter = prompt(`${secretWord.join('  ')}\nВведіть одну літеру:`).toUpperCase();
            console.log(letter);
            if (letter.length>1||letter.length<1){
                oneLetterIsEntered=false
            } else {
                oneLetterIsEntered=true
            };
        };

        
// ----------------------------------------------------------------------------------------------------------------------------------
// 
        // if (listedLetters.indexOf(letter)===-1){
        //     listedLetters.push(letter);
        //     for (let i=0; i<gessingWord.length; i++){
        //         if (gessingWord[i]===letter){
        //             resultsOfGame.score[0]+=1;
        //             letterIsCorrect = true;
        //             secretWord[i]=letter;
        //         }
        //     };
        // } else {
        //     letter = prompt(`${secretWord.join('  ')}\nЦя літера вже використовувалася, введіть вашу літеру:`).toUpperCase();
        //     console.log(letter);
        //     if (letter.length>1||letter.length<1){
        //         oneLetterIsEntered=false
        //     } else {
        //         oneLetterIsEntered=true
        //     };
        //     while (!oneLetterIsEntered){
        //         letter = prompt(`${secretWord.join('  ')}\nВведіть одну літеру:`).toUpperCase();
        //         console.log(letter);
        //         if (letter.length>1||letter.length<1){
        //             oneLetterIsEntered=false
        //         } else {
        //             oneLetterIsEntered=true
        //         };
        //     };
        // };
        console.log(letterIsCorrect);
    }while(!wordIsGuessed&&letterIsCorrect);

    

    secretWord=[];
    gessingWord=[];
    anotherGame=confirm(`Хочете зіграти ще одну гру?`);
}while(anotherGame);



// Результати
for (let i=0; i<resultsOfGame.players.length; i++){
    results += `\n${resultsOfGame.players[i]}: ${resultsOfGame.score[i]}`;
};
console.log(results);//повертає результати