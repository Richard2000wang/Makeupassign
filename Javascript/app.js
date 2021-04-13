const expensesElem = document.querySelector(".expenses-content");
const expenseNameInput = document.getElementById("expenseName");
const expensePriceInput = document.getElementById("expensePrice");
const modalButton = document.getElementById("modalButton");
const expenseButton = document.getElementById("expenseButton");
const budgetInput = document.getElementById("budget");
const budgetButton = document.getElementById("budgetButton");

//hide modal
modalButton.addEventListener("click", function () {
  hideModal();
});

// Variables
let expenses = getFromLocal()[0] || [];
let totalBudget = getFromLocal()[1] || 0;
let currentBudget = getFromLocal()[2] || 0;
renderExpenses();

//local Ask Andrel to explain again
function addToLocal() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
  localStorage.setItem("totalBudget", totalBudget);
  localStorage.setItem("currentBudget", currentBudget);
}
function getFromLocal() {
  const expenses = JSON.parse(localStorage.getItem("expenses"));
  const totalBudget = localStorage.getItem("totalBudget");
  const currentBudget = localStorage.getItem("currentBudget");
  return [expenses, +totalBudget, +currentBudget];
}

//erase values
function reset() {
  expenses = [];
  totalBudget = 0;
  currentBudget = 0;
  while (expensesElem.hasChildNodes()) {
    expensesElem.removeChild(expensesElem.lastChild);
  }
  addToLocal();
}

// Add newly added expense
function renderOneExpense(expenseName, expensePrice) {
  const expenseNameElem = document.createElement("div");
  expenseNameElem.classList.add("label");
  expenseNameElem.innerText = expenseName;
  expensesElem.appendChild(expenseNameElem); //ask tutor to explain appendChild in detail
  const expensePriceElem = document.createElement("div");
  expensePriceElem.classList.add("price");
  expensePriceElem.innerText = expensePrice + "$";
  expensesElem.appendChild(expensePriceElem);
}

//show and hide modal
function showModal() {
  document.querySelector(".modal").classList.remove("hidden");
}
function hideModal() {
  document.querySelector(".modal").classList.add("hidden");
}

// update budgets
function updateTotalBudget() {
  document.querySelector(".total-budget .display").innerText =
    totalBudget + "$";
}

function updateCurrentBudget() {
  document.querySelector(".current-budget .display").innerText =
    currentBudget + "$";
}
// update expenses
function renderExpenses() {
  expenses.forEach((expense) => {
    renderOneExpense(expense.expenseName, expense.expensePrice);
  });
  updateTotalBudget();
  updateCurrentBudget();
}
// expense button
expenseButton.addEventListener("click", function () {
    if (expensePrice.checkValidity()) {
      const expenseName = expenseNameInput.value;
      const expensePrice = expensePriceInput.value;
      if (!expensePrice || !expenseName) return;
      if (expensePrice > currentBudget || currentBudget === 0) {
        showModal();
        return;
      }
      expenses.push({
        expenseName,
        expensePrice,
      });
      currentBudget -= expensePrice;
      renderOneExpense(expenseName, expensePrice);
      updateCurrentBudget();
      addToLocal();
    }
  });
  