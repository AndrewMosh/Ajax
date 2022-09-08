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

function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Статус ответа: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log("Ошибка! Статус ответа: ", xhr.status);
  };
  xhr.send();
}

const resultNode = document.getElementById("picContainer");
const btnNode = document.getElementById("pressButt");

function displayResult(apiData) {
  const cardBlock = `<img src = "${apiData.file}" /><p> Автор: ${apiData.owner}</p>`;
  resultNode.innerHTML = cardBlock;
}

btnNode.addEventListener("click", () => {
  const inputValue = document.querySelector(".pic-number").value;
  const inputValue2 = document.querySelector(".pic-number2").value;

  if (!isNaN(parseFloat(inputValue))) {
    if (inputValue > 500 || inputValue < 100) {
      resultNode.innerHTML = `<p>вне диапазона от 100 до 500!</p>`;
    } else {
      useRequest(
        "https://loremflickr.com/json/g/" +
          inputValue +
          "/" +
          inputValue2 +
          "/all",
        displayResult
      );
    }
  } else {
    resultNode.innerHTML = `<p> Вы ничего не ввели</p>`;
  }
});
