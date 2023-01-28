import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
console.log(form);

form.addEventListener("input", throttle(getInputValues, 500));
form.addEventListener("submit", localStorageSubmit);

let inputValues = {};

function getLocalStorage() {
  if (localStorage.length !== 0) {
    const valuesObj = localStorage.getItem("feedback-form-state");
    const jsObj = JSON.parse(valuesObj);
    console.log(valuesObj);
    inputValues.email = jsObj.email;
    inputValues.message = jsObj.message;
    form.elements.email.value = jsObj.email;
    form.elements.message.value = jsObj.message;
    console.log();
  }
}
getLocalStorage();

function getInputValues(evt) {
  if (evt.target.name === "email") {
    inputValues.email = evt.target.value;
  }
  inputValues.message = evt.target.value;

  const valuesObj = JSON.stringify(inputValues);
  localStorage.setItem("feedback-form-state", valuesObj);
}

function localStorageSubmit(evt) {
  console.log("InputValues:", inputValues);
  evt.preventDefault();

  localStorage.clear();
  form.elements.email.value = "";
  form.elements.message.value = "";
}
