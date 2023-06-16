// selecting elements
const btn = document.querySelector("#btn");
const select = document.querySelector("#select");
const lname = document.querySelector("#lname");
const fname = document.querySelector("#fname");
const bodyTable = document.querySelector(".bodyTable");
const spinner = document.getElementById("spinner");
const equbBtn = document.getElementById("start-equb-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const winnerName = document.getElementById("winner-name");

// initiallizing members object from localStorage if it exists or empty object
const members = JSON.parse(localStorage.getItem("members")) || {};

// function adding a member
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
  if (firstName === "" || lastName === "" || amount === "") {
    alert("Input field Must not be Empty... ");
  }
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

equbBtn.addEventListener("click", () => {
  spinner.classList.remove("hidden");
  setTimeout(() => {
    spinner.classList.add("hidden");
  }, 3000);
});

//function to give a number key to a members
const totalMoney = () => {
  let sum = 0;
  for (let x in members) {
    sum += members[x].amount;
  }
  return sum;
};
const numberKey = () => {
  let i = 1;
  for (let member in members) {
    members[member].number = i;
    i++;
  }
  return i;
};

shuffleBtn.addEventListener("click", () => {
  let i = numberKey() - 1;
  let sum = totalMoney();
  console.log(i, "number of element");
  let j = Math.ceil(Math.random() * i);
  console.log(j, "random");
  for (let x in members) {
    if (members[x].number === j) {
      winnerName.textContent = `${members[x].firstName} ${
        members[x].lastName
      } won the ${sum} birr on ${new Date()}`;
      console.log(winnerName);
    }
  }
});
