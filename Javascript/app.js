const expensesElem = document.querySelector(".expenses-content");
const expenseNameInput = document.getElementById("expenseName");
const expensePriceInput = document.getElementById("expensePrice");
const modelButton = document.getElementById("modelButton");
const expenseButton = document.getElementById("expenseButton");
const budgetInput = document.getElementById("budget");
const budgetButton = document.getElementById("budgetButton");

modelButton.addEventListener("click", function () {
    hideModel();
});

let expenses = getFromLocal()[0] || [];
let totalBudget = getFromLocal()[1] || 0;
let currentBudget = getFromLocal()[2] || 0;
renderExpenses();

function addToLocal() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
  localStorage.setItem("totalBudget", totalBudget);
  localStorage.setItem("currentBudget", currentBudget);  //Ask Andrel to explain local again
}
function getFromLocal() {
  const expenses = JSON.parse(localStorage.getItem("expenses"));
  const totalBudget = localStorage.getItem("totalBudget");
  const currentBudget = localStorage.getItem("currentBudget");
  return [expenses, +totalBudget, +currentBudget];
}

//erase values
function reset(){
    expenses = [];
    totalBudget = 0;
    currentBudget = 0;
    while (expensesElem.hasChildNodes()) {
      expensesElem.removeChild(expensesElem.lastChild);
    }
}

// Add newly added expense
function renderOneExpense(expenseName, expensePrice) {
    const expenseNameElem = document.createElement("div");
    expenseNameElem.classList.add("label");
    expenseNameElem.innerText = expenseName;
    expensesElem.appendChild(expenseNameElem);
    const expensePriceElem = document.createElement("div");
    expensePriceElem.classList.add("price");
    expensePriceElem.innerText = expensePrice + "$";
    expensesElem.appendChild(expensePriceElem);
}

function showModel() {
    document.querySelector(".model").classList.remove("hidden");
  }
  function hideModel() {
    document.querySelector(".model").classList.add("hidden");
  }

function updateTotalBudget() {
  document.querySelector(".total-budget .display").innerText =
    totalBudget + "$";
}

function updateCurrentBudget() {
    document.querySelector(".current-budget .display").innerText =
      currentBudget + "$";
}

function renderExpenses() {
  expenses.forEach((expense) => {
    renderOneExpense(expense.expenseName, expense.expensePrice);
  });
  updateTotalBudget();
  updateCurrentBudget();
}


