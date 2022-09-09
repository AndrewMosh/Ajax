/*Напишите код приложения, интерфейс которого представляет собой input и кнопку.
 В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне
 диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по 
URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
Пример: если пользователь ввёл 5, то запрос будет вида https://picsum.photos/v2/list?limit=5.
После получения данных вывести ниже картинки на экран.

Подсказка: получение данных из input.

const value = document.querySelector('input').value;
 */
const resultNode = document.getElementById("picContainer");
const btnNode = document.getElementById("pressButt");
function getImage(url) {
  fetch(url)
    .then((response) => {
      console.log("response", response);

      const result = response.url;

      const cardBlock = `<div>
      <img
        src="${result}"
      />
    </div>
  `;
      resultNode.innerHTML = cardBlock;
    })
    .catch(() => {
      console.log("error");
    });
}
btnNode.addEventListener("click", () => {
  const inputValue = document.querySelector(".pic-number").value;
  const inputValue2 = document.querySelector(".pic-number2").value;

  if (!isNaN(parseFloat(inputValue))) {
    if (inputValue > 500 || inputValue < 100) {
      resultNode.innerHTML = `<p>Число вне диапазона от 100 до 500!</p>`;
    } else if (inputValue2 > 500 || inputValue2 < 100) {
      resultNode.innerHTML = `<p>Число  вне диапазона от 100 до 500!</p>`;
    } else {
      getImage("https://loremflickr.com/" + inputValue + "/" + inputValue2);
    }
  } else {
    resultNode.innerHTML = `<p> Вы ничего не ввели</p>`;
  }
});
