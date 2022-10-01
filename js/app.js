let cart = [];
function addToCart(element) {
  if (cart.length === 5) {
    return cart;
  }
  const playerName = element.parentNode.parentNode.children[0].innerText;

  const players = {
    playerName: playerName,
  };
  cart.push(players);
  element.parentNode.children[0].disabled = true;
  displayPlayers();
}

function displayPlayers() {
  const totalPlayerElement = document.getElementById("total-player");
  totalPlayerElement.innerText = cart.length;

  const cartContainer = document.getElementById("player-cart");
  cartContainer.textContent = "";

  for (let i = 0; i < cart.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `<p class='flex justify-start font-bold text-xl text-purple-700'>${
      i + 1
    }. ${cart[i].playerName}</p>`;
    cartContainer.appendChild(li);
  }
}

/**
 document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    const amountField = document.getElementById("per-player-input");
    const perPlayerAmountString = amountField.value;
    const perPlayerAmount = parseInt(perPlayerAmountString);
    const playerTotalExpense = Number(cart * length + perPlayerAmount);
    // console.log(playerTotalExpense);
    const playerExpenseElement = document.getElementById("player-expenses");
    const playerExpenseTotalElementString = playerExpenseElement.innerText;
    const playerExpenseTotalElement = parseInt(playerExpenseTotalElementString);

    const playerExpenseTotal = playerExpenseTotalElement + playerTotalExpense;
    // console.log(playerExpenseTotal);

    // playerExpenseElement.innerText = playerExpenseTotal;

    // amountField.value = "";
  });
 */

function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseInt(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementAmountString = textElement.innerText;
  const textElementAmount = parseInt(textElementAmountString);
  return textElementAmount;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    const perPlayerInputAmount = getInputFieldValueById("per-player-input");
    if (perPlayerInputAmount == "number" || perPlayerInputAmount > 0) {
      const playerTotalExp = Number(cart.length * perPlayerInputAmount);
      const playerExpenseTotal = getTextElementValueById("player-expenses");
      setTextElementValueById("player-expenses", playerTotalExp);
    }
  });

// document.getElementById('calculate-total-button').addEventListener('click', function () {
//     const managerInputField = document.getElementById('manager-input')
//     const managerInputAmount = managerInputField.value

//     const coachInputField = document.getElementById('coach-input')
//     const coachInputAmount = coachInputField.value

//     const playerExpenseField = document.getElementById('player-expenses')
//     const playerExpenseTotal = playerExpenseField.innerText

//     const totalFiled = document.getElementById('total')
//     const totalAmount = totalFiled.innerText

//     const total = Number(totalAmount) + Number(playerExpenseTotal) + Number(managerInputAmount) + Number(coachInputAmount)
//     totalFiled.innerText = total
