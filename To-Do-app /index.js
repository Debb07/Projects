const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    prompt("You must enter a task!");
    return;
  }
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);

  inputBox.value = ""; //make the input field empty once the task is added.
  saveData();
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
}; //to save the entire content or new data in the list container into the browser

const displayData = () => {
  listContainer.innerHTML = localStorage.getItem("data"); //gives all the content stored in the browser the name "data"
};

displayData(); //when browser is refreshed, tasks keep showing.
