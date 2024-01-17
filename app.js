document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundColor = "grey";
  
    // Создаем элемент div для фона
    const main = document.createElement("div");
    main.classList.add("main");
    document.body.appendChild(main);
    // Стиль для фона
    main.style.position = "fixed";
    main.style.top = "50%"; // Положение в середине вертикали
    main.style.left = "50%"; // Положение в середине горизонтали
    main.style.transform = "translate(-50%, -50%)"; // Смещение на половину ширины и высоты
    main.style.width = "100%";
    main.style.height = "100%";
    main.style.background = "linear-gradient(to bottom, #f2dfa0, black)";
    main.style.maxWidth = "1440px";
    main.style.margin = "0 auto";
    main.style.display = "flex";
    main.style.flexDirection = "column";

    // Создаем дочерние елементы
const headerHint = document.createElement("div");
const gallowImg = document.createElement("div");
const forEnterWord = document.createElement("div");
const keyboard = document.createElement("div");

// Добавляем их внутрь флекс-контейнера
main.appendChild(headerHint);
main.appendChild(gallowImg);
main.appendChild(forEnterWord);
main.appendChild(keyboard);

// Устанавливаем размеры для каждого дочернего элемента
headerHint.style.flex = "10%";
gallowImg.style.flex = "30%";
forEnterWord.style.flex = "10%";
keyboard.style.flex = "50%";

gallowImg.style.backgroundImage = "url('gallows.svg')";
gallowImg.style.backgroundSize = "contain"; // или другие настройки размера изображения
gallowImg.style.backgroundRepeat = "no-repeat";
gallowImg.style.backgroundPosition = "center"; 

gallowImg.style.display = "flex";
gallowImg.style.alignItems = "center";
gallowImg.style.justifyContent = "center";

const man = document.createElement("div");
man.style.display = "grid";
man.style.gridTemplateRows = "repeat(3, 1fr)";
man.style.gridTemplateColumns = "repeat(3, 1fr)";
gallowImg.appendChild(man);

// First Row
const manFirstRowOne = document.createElement("div");
const manFirstRowHead = document.createElement("div");
const manFirstRowTwo = document.createElement("div");

man.appendChild(manFirstRowOne);
man.appendChild(manFirstRowHead);
man.appendChild(manFirstRowTwo);

// Second Row
const manSecondRowLfHend = document.createElement("div");
const manSecondRowBody = document.createElement("div");
const manSecondRowRgHend = document.createElement("div");

man.appendChild(manSecondRowLfHend);
man.appendChild(manSecondRowBody);
man.appendChild(manSecondRowRgHend);

// Third Row
const manThidRowLfLeg = document.createElement("div");
const manThidRowSecond = document.createElement("div");
const manThidRowRgLeg = document.createElement("div");

man.appendChild(manThidRowLfLeg);
man.appendChild(manThidRowSecond);
man.appendChild(manThidRowRgLeg);

// Размер клеток
const elementSize = "25px";

man.style.width = elementSize;
man.style.height = elementSize;

// First Row
manFirstRowOne.style.width = elementSize;
manFirstRowOne.style.height = elementSize;

manFirstRowHead.style.width = elementSize;
manFirstRowHead.style.height = elementSize;
manFirstRowHead.style.backgroundColor = "black";
manFirstRowHead.style.borderRadius = "100px";
manFirstRowHead.style.opacity = "0";

manFirstRowTwo.style.width = elementSize;
manFirstRowTwo.style.height = elementSize;

// Second Row
manSecondRowLfHend.style.width = elementSize;
manSecondRowLfHend.style.height = elementSize;
manSecondRowLfHend.style.backgroundColor = "black";
manSecondRowLfHend.style.borderRadius = "90% 0% 90% 0%";
manSecondRowLfHend.style.opacity = "0";

manSecondRowBody.style.width = elementSize;
manSecondRowBody.style.height = elementSize;
manSecondRowBody.style.backgroundColor = "black";
manSecondRowBody.style.borderRadius = "10%";
manSecondRowBody.style.opacity = "0";

manSecondRowRgHend.style.width = elementSize;
manSecondRowRgHend.style.height = elementSize;
manSecondRowRgHend.style.backgroundColor = "black";
manSecondRowRgHend.style.borderRadius = "0% 90% 0% 90%";
manSecondRowRgHend.style.opacity = "0";

// Third Row
manThidRowLfLeg.style.width = elementSize;
manThidRowLfLeg.style.height = elementSize;
manThidRowLfLeg.style.backgroundColor = "black";
manThidRowLfLeg.style.borderRadius = "90% 0% 90% 0%";
manThidRowLfLeg.style.opacity = "0";

manThidRowSecond.style.width = elementSize;
manThidRowSecond.style.height = elementSize;

manThidRowRgLeg.style.width = elementSize;
manThidRowRgLeg.style.height = elementSize;
manThidRowRgLeg.style.backgroundColor = "black";
manThidRowRgLeg.style.borderRadius = "0% 90% 0% 90%";
manThidRowRgLeg.style.opacity = "0";
// Создаем массив manParts из элементов
const manParts = [
    manFirstRowHead,
    manSecondRowBody,
    manSecondRowLfHend,
    manSecondRowRgHend,
    manThidRowLfLeg,
    manThidRowRgLeg
];
let indexManParts = 0;

// Создаем грид для клавиатуры
keyboard.style.display = "grid";
keyboard.style.gridTemplateColumns = "repeat(4, 1fr)";
keyboard.style.gridGap = "1px";
keyboard.style.margin = "1px";

// Функция для создания элементов клавиатуры
function createKeyboardElement(letter) {
    const keyElement = document.createElement("div");
    keyElement.classList.add("keyboard-element"); // Добавляем класс
    keyElement.style.minWidth = "7px";
    keyElement.style.minHeight = "7px";
    keyElement.style.border = "1px solid white";
    keyElement.style.borderRadius = "10px";
    keyElement.style.display = "flex";
    keyElement.style.alignItems = "center";
    keyElement.style.justifyContent = "center";
    keyElement.style.color = "white";
    keyElement.innerText = letter;
    return keyElement;
}

// Добавляем 32 клавиши с буквами русского алфавита
for (let i = 0; i < 32; i++) {
    const letter = String.fromCharCode(1040 + i); // ASCII код для букв русского алфавита
    const key = createKeyboardElement(letter);
    keyboard.appendChild(key);
}

//Создаем элементы для хедера(вопрос и количество попыток)
const qestion = document.createElement("div");
const attemptsLeft = document.createElement("div");

headerHint.appendChild(qestion);
headerHint.appendChild(attemptsLeft);

headerHint.style.display = "flex";
headerHint.style.flexDirection = "column";

qestion.style.backgroundColor = "grey";

qestion.style.height = "100%";
attemptsLeft.style.height = "100%";

attemptsLeft.textContent = "Промахи: 0/6"; // Добавляем текст в элемент
attemptsLeft.style.display = "flex";
attemptsLeft.style.alignItems = "center";
attemptsLeft.style.justifyContent = "center";

// Добавляем поле ввода
const inputField = document.createElement("input");
inputField.setAttribute("type", "text");
inputField.setAttribute("maxlength", "1"); // Устанавливаем максимальную длину ввода
forEnterWord.appendChild(inputField);
// Стили для центрирования и стилизации поля ввода
forEnterWord.style.display = "flex";
forEnterWord.style.alignItems = "center";
forEnterWord.style.justifyContent = "center";
inputField.style.width = "50px"; // Ширина поля ввода
inputField.style.padding = "5px"; // Отступы
inputField.style.textAlign = "center"; // Выравнивание текста по центру
inputField.style.backgroundColor = "#eff2d8";
inputField.style.borderRadius = "5px";
// Создаем пустой массив для записи введенных символов
let enteredLettersArray = [];
// Обработка ввода только одной буквы из русского алфавита и преобразование в нижний регистр
inputField.addEventListener("input", function() {
    this.value = this.value.replace(/[^А-Яа-я]/, '').toLowerCase();
      // Проверяем, есть ли введенная буква в массиве
      const enteredLetter = this.value[this.value.length - 1];
      if (enteredLettersArray.includes(enteredLetter)) {
          // Если буква уже введена, очищаем поле ввода
          this.value = this.value.slice(0, -1);
      }
  });
// Кнопка принять
const acceptButton = document.createElement("button");
acceptButton.textContent = "Принять";
forEnterWord.appendChild(acceptButton);  
// Выравниваем поле ввода и кнопку принять
forEnterWord.style.flexDirection = "column";
forEnterWord.style.gap = "10px"

// Обработка нажатия на блоки клавиатуры
keyboard.addEventListener("click", function(event) {
    const clickedElement = event.target;
    // Проверяем, является ли элемент блоком клавиатуры и проверка на наличие класа "disabled"
    if (clickedElement.classList.contains("keyboard-element") && !clickedElement.classList.contains("disabled")) {
      // Получаем текст буквы из блока
      const letter = clickedElement.innerText;
      // Вставляем букву в поле ввода
      inputField.value = letter.toLowerCase();
       // Меняем фон элемента на белый с плавным эффектом
    clickedElement.style.transition = "background-color 0.1s ease";
    clickedElement.style.backgroundColor = "orange";
    // Ждем 0.1 секунды и возвращаем фон к исходному
    setTimeout(() => {
      clickedElement.style.backgroundColor = "";
    }, 100)
    }
  });

  //Добавляем слово загадку и подсказку
  const wordsArray = [
    { original: "Отгадай животное", corresponding: "кот" },
    { original: "Отгадай цвет", corresponding: "красный" },
    { original: "Отгадай месяц", corresponding: "май" },
    { original: "Отгадай цифру", corresponding: "семь" },
    { original: "Отгадай слово", corresponding: "слово" },
    { original: "Отгадай день недели", corresponding: "среда" },
    { original: "Отгадай погоду", corresponding: "ясно" },
    { original: "Отгадай рыбу", corresponding: "карась" },
    { original: "Отгадай игру", corresponding: "шахматы" },
    { original: "Отгадай время года", corresponding: "осень" }
  ];
  
  let randomObject = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  let randomOriginalWord = randomObject.original;
  let randomCorrespondingWord = randomObject.corresponding;

// Создаем строку из символов "_"
const hiddenWord = "_".repeat(randomCorrespondingWord.length);
// Разбиваем строку на пары символов и вставляем пробел между ними
let spacedHiddenWord = hiddenWord.split('').join(' ');
// Устанавливаем текст в элемент qestion
qestion.textContent = randomOriginalWord + ': ' + spacedHiddenWord;
qestion.style.display = "flex";
qestion.style.alignItems = "center";
qestion.style.justifyContent = "center";
qestion.style.fontWeight = "bold";

//добавляем счетчик не верных попыток
let incorrectAttempts = 0;
// Добавляем переменную для отслеживания времени последнего нажатия
let lastClickTime = 0;
// Обработка нажатия на кнопку "Принять"
acceptButton.addEventListener("click", function() {
    const enteredLetter = inputField.value;
    // Проверяем, есть ли введенная буква и прошло ли более 0.5 секунд с последнего нажатия
    if (enteredLetter && (Date.now() - lastClickTime >= 500)) {
        // Обновляем время последнего нажатия
        lastClickTime = Date.now();
        // Добавляем введенную букву в массив
        enteredLettersArray.push(enteredLetter);

    if (enteredLetter) {
     // Изменение фонового цвета на зеленый с переходом
     inputField.style.transition = "background-color 0.5s ease";
     inputField.style.backgroundColor = "green";
     // После 0.5 секунд возвращаем фоновый цвет к исходному
     setTimeout(() => {
         inputField.style.transition = "none"; // Отключаем переход для мгновенного изменения
         inputField.style.backgroundColor = "#eff2d8"; // Возвращаем исходный фоновый цвет
         setTimeout(() => {
             inputField.style.transition = ""; // Включаем переход для будущих изменений
         }, 0);
     }, 500);
       //Очистка поля ввода
       setTimeout(() => {
        inputField.value = "";
    }, 500);
   // Проверяем, есть ли введенная буква в соответствующем слове
   if (randomCorrespondingWord.includes(enteredLetter)) {
    // Обновляем spacedHiddenWord с правильно угаданной буквой на ее месте(ах)
    const updatedHiddenWord = randomCorrespondingWord
        .split('')
        .map((letter, index) => (letter === enteredLetter ? enteredLetter : spacedHiddenWord.split(' ')[index]))
        .join('');

    spacedHiddenWord = updatedHiddenWord.split('').join(' ');
    qestion.textContent = randomOriginalWord + ': ' + spacedHiddenWord;

    // Проверяем, полностью ли слово угадано
    if (!spacedHiddenWord.includes('_')) {
        modalWindow.style.display = "flex";
        modalTxt.textContent = "ПОБЕДА!!! Ответ: " + randomCorrespondingWord;
        modalTxt.style.color = "green"; 
        // ПОБЕДА!!!
    }
} else {
    //Появления частей человечка manParts
    function changeOpacityManParts() {
        // Получаем все элементы из массива
        let elements = manParts;   
        // Проверяем, чтобы не выйти за пределы массива
        if (indexManParts < elements.length) {  
            // Изменяем опасити с использованием анимации в течение 0.5 секунд
            elements[indexManParts].style.transition = 'opacity 0.5s';
            elements[indexManParts].style.opacity = '1';
            // Увеличиваем индекс для следующего вызова функции
            indexManParts++;
        }
        if(indexManParts === manParts.length) {
            modalWindow.style.display = "flex";
        modalTxt.textContent = "НЕУДАЧА...";
        modalTxt.style.color = "red"; 
        // НЕУДАЧА...
        }
    }
    changeOpacityManParts(manParts);
    // Обработка неверной буквы (например, увеличение попыток, показ частей фигуры для виселицы и т. д.)
    incorrectAttempts++;
    attemptsLeft.textContent = "Промахи: " + incorrectAttempts + "/6";
     // Изменение фонового цвета на красный с переходом
     inputField.style.transition = "background-color 0.5s ease";
     inputField.style.backgroundColor = "red";
     // После 0.5 секунд возвращаем фоновый цвет к исходному
     setTimeout(() => {
         inputField.style.transition = "none"; // Отключаем переход для мгновенного изменения
         inputField.style.backgroundColor = "#eff2d8"; // Возвращаем исходный фоновый цвет
         setTimeout(() => {
             inputField.style.transition = ""; // Включаем переход для будущих изменений
         }, 0);
     }, 500);
    }
    keyboard.querySelectorAll(".keyboard-element").forEach(keyElement => {
        if (keyElement.innerText.toUpperCase() === enteredLetter.toUpperCase()) {
            // Если совпадение, меняем цвет текста на белый
            keyElement.style.backgroundColor = "grey";
            keyElement.classList.add("disabled");
        }
    });
}
    }
  });
////////////////////////////////          РЕСТАРТ
function resetGame() {
    enteredLettersArray = [];
    incorrectAttempts = 0;
    attemptsLeft.textContent = "Промахи: " + incorrectAttempts + "/6";
    manParts.forEach(manPart => {
        manPart.style.opacity = '0';
    });
    keyboard.querySelectorAll(".keyboard-element").forEach(keyElement => {
        keyElement.style.backgroundColor = "";
        keyElement.classList.remove("disabled");
    });
    inputField.value = "";

    // Исключаем предыдущий randomObject из массива
    const indexToRemove = wordsArray.indexOf(randomObject);
    if (indexToRemove !== -1 && !spacedHiddenWord.includes('_')) {
        wordsArray.splice(indexToRemove, 1);
    }
    //В случае не отгадывания слова
    let removedObject = null;
    if(indexToRemove !== -1 && indexManParts === manParts.length) {
        removedObject = wordsArray.splice(indexToRemove, 1)[0];
    }
    if(indexToRemove !== -1 && indexManParts === manParts.length && wordsArray.length === 0) {
        wordsArray.push(removedObject);
    }
    if (wordsArray.length === 0) {
        // Если массив пуст, отображаем алерт и перезагружаем страницу
        alert("Вы все отгадали, перезагрузка");
        location.reload();
        return; // Для предотвращения выполнения оставшейся части функции
    }
    // Обновляем значения переменных для нового вопроса
    const newRandomObject = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    randomObject = newRandomObject;
    randomOriginalWord = randomObject.original;
    randomCorrespondingWord = randomObject.corresponding;
    // Обновляем отображаемый вопрос
    const hiddenWord = "_".repeat(randomCorrespondingWord.length);
     spacedHiddenWord = hiddenWord.split('').join(' ');
    qestion.textContent = randomOriginalWord + ': ' + spacedHiddenWord;
    // Добавляем предыдущий randomObject обратно в массив
    if (removedObject) {
        wordsArray.push(removedObject);
    }

    qestion.style.backgroundColor = "grey";
    inputField.style.transition = "";
    inputField.style.backgroundColor = "#eff2d8";
    indexManParts = 0;
}
/////////////////////////////////СОЗДАЮ МОДАЛЬНОЕ ОКНО
const modalWindow = document.createElement("div");
document.body.appendChild(modalWindow);
modalWindow.style.position ="fixed";
modalWindow.style.top = "0";
modalWindow.style.left = "0";
modalWindow.style.width = "100%";
modalWindow.style.height = "100%";
modalWindow.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
modalWindow.style.justifyContent = "center";
modalWindow.style.alignItems = "center";
modalWindow.style.display = "none";
//Содержимое модального окна
const modalContent = document.createElement("div");
modalWindow.appendChild(modalContent);
modalContent.style.justifyContent = "center";
modalContent.style.alignItems = "center";
modalContent.style.width = "50%";
modalContent.style.height = "30%";
modalContent.style.background = "linear-gradient(to bottom, #f2dfa0, black)";
modalContent.style.borderRadius = "10px";
modalContent.style.border = "3px white solid";
modalContent.style.position = "absolute";
modalContent.style.top = "50%";
modalContent.style.left = "50%";
modalContent.style.transform = "translate(-50%, -50%)";
modalContent.style.display = "flex";
modalContent.style.flexDirection = "column-reverse";
modalContent.style.gap = "20%";
// Кнопка модального окна
const modalButton = document.createElement("button");
modalContent.appendChild(modalButton);
modalButton.textContent = "Продолжить";
//Нажати на кнопку
modalButton.addEventListener("click", function() {
    resetGame(); 
    modalWindow.style.display = "none";
});
//Текст модального окна
const modalTxt = document.createElement("div");
modalContent.appendChild(modalTxt);
modalTxt.style.fontWeight = "bold";
modalTxt.style.fontSize = "1.5em";
modalTxt.textContent = "";
modalTxt.style.textAlign = "center";
  });
  