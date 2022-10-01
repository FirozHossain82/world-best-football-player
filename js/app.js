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
