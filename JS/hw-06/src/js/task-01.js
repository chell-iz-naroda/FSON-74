// Напиши скрипт, який:

//     Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//     Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const items = document.querySelectorAll("li.item");
console.log(`Number of categories: ${items.length}`);

// items.forEach ((item) => {
//     const itemHeading = item.querySelector("h2");
//     const itemCategory = itemHeading.textContent;
//     const itemElements = item.querySelectorAll("li");


//     console.log (`Category: ${itemCategory}`);
//     console.log (`Elements: ${itemElements.length}`);
// })

items.forEach ((item) => {
    const itemCategory = item.firstElementChild.textContent;
    const itemElements = item.lastElementChild.childElementCount;


    console.log (`Category: ${itemCategory}`);
    console.log (`Elements: ${itemElements}`);
})