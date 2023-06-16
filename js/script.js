// selecting elements
const btn = document.querySelector("#btn");
const select = document.querySelector("#select");
const lname = document.querySelector("#lname");
const fname = document.querySelector("#fname");
const bodyTable = document.querySelector(".bodyTable");

// initiallizing members object from localStorage if it exists
const members = JSON.parse(localStorage.getItem("members")) || {};

// adding a member
const addMember = (firstName, lastName, amount) => {
  const payedDate = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}`;
  members[firstName] = {
    firstName,
    lastName,
    amount,
    payedDate: payedDate,
  };
  localStorage.setItem("members", JSON.stringify(members));
  location.reload();
};

// event handler function and passing to addMember function
const myFunction = () => {
  const firstName = fname.value;
  const lastName = lname.value;
  const amount = parseInt(select.value);
  addMember(firstName, lastName, amount);
};
// listing to click event and passing the values to myFunction function
btn.addEventListener("click", myFunction);

const addElement = () => {
  let i = 0;
  // filling table from the data recived
  for (let value in members) {
    i++;
    let tr = document.createElement("tr");
    let el0 = document.createElement("td");
    el0.textContent = i;

    let el1 = document.createElement("td");
    el1.textContent = members[value].firstName;
    let el2 = document.createElement("td");
    el2.textContent = members[value].lastName;
    let el3 = document.createElement("td");
    el3.textContent = members[value].amount;
    let el4 = document.createElement("td");
    el4.textContent = members[value].payedDate;
    tr.appendChild(el0);
    tr.appendChild(el1);
    tr.appendChild(el2);
    tr.appendChild(el3);
    tr.appendChild(el4);
    bodyTable.appendChild(tr);
    console.log(members[value].amount);
  }
};
addElement();
