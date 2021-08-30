// const textBox = document.querySelector(".content");
// const redP = document.createElement("p");
// redP.textContent = "Hey I'm Red";
// redP.classList.add("redP");
// redP.style.color = "red";
// textBox.appendChild(redP);

// const blueH3 = document.createElement("h3");
// blueH3.textContent = "I'm a blue h3!";
// blueH3.classList.add("blueH3");
// blueH3.style.color = "blue";
// textBox.appendChild(blueH3);

// const newDiv = document.querySelector(".content");
// const newDivDiv = document.createElement("div");
// newDivDiv.classList.add("newDivDiv");
// newDivDiv.style = {
//   border: "black",
//   backgroundColor: "pink",
// };

// const newH1 = document.querySelector("newDivDiv");
// const newH1H1 = document.createElement("h1");
// newH1H1.textContent = "I'm in a div";
// newDiv.appendChild(newH1H1);

// const newP = document.querySelector("newDivDiv");
// const newPP = document.createElement("p");
// newPP.textContent = "ME TOO!";
// newDiv.appendChild(newPP);

// newDiv.appendChild(newDivDiv);
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World");
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Hello World");
});

//examples of all three using named funcitons

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// METHOD 2
// btn2.onclick = alertFunction;

// METHOD 3
// btn3.addEventListener('click', alertFunction);

btn4.addEventListener("click", function (e) {
  console.log(e);
});

btn5.addEventListener("click", function (e) {
  console.log(e.target);
});

btn6.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

// Attaching listers to groups of nodes - see index.html
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
