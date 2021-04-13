const expensesElem = document.querySelector(".expenses-content");
const expenseNameInput = document.getElementById("expenseName");
const expensePriceInput = document.getElementById("expensePrice");


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