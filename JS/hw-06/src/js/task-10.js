// Завдання 10 (виконувати не обов'язково)

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

//     Розміри найпершого <div> - 30px на 30px.
//     Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//     Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector("#controls input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

const amount = input.value


create.addEventListener("click", createBoxes(input.value));
destroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}

// function createBoxes (amount) {

//   let size = 30;

  // for (let i = 0; i < amount; i++) {
  //   const box = document.createElement('div');
  //   box.style.width = `${size}px`;
  //   box.style.height = `${size}px`;
  //   box.style.backgroundColor = getRandomHexColor();

  //   boxes.append(box);

  //   size += 10;
  // }
// }

  function createBoxes (amount) {
    let boxDOM = "";
    let size = 30;
  
    for (let i = 0; i < amount; i++) {
      let color = getRandomHexColor();
      boxDOM += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
  
      size += 10;
    }
  
    boxes.insertAdjacentHTML("beforeend", boxDOM);
  }


//Чомусь потрібно перезавантажувати сторінку щоб з'явився результат виконання Функції createBox......
//Варіант document.addEventListener('DOMContentLoaded', () => { наш скрипт }) не допоміг
