// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the coin selection area and the boards
  const coinSelection = document.getElementById("coinSelection");
  const boards = document.querySelectorAll(".board"); // Select all elements with class "board"

  // Attach click event listeners to each coin option
  coinSelection.querySelectorAll("img").forEach(coin => {
    coin.addEventListener("click", function () {
      // Deselect the previously selected coin (if any)
      if (selectedCoin) {
        selectedCoin.classList.remove("selected");
      }

      // Select the current coin
      selectedCoin = this;
      selectedCoin.classList.add("selected");
    });
  });

  // Variables to keep track of the selected coin and board
  let selectedCoin = null;
  let selectedBoard = null;

  // Track the number of stacked coins for each board
  const stackedCoins = {
    board1: 0,
    board2: 0,
    board3: 0,
    board4: 0,
    board5: 0
  };

  // Attach click event listeners to each board
  boards.forEach(board => {
    board.addEventListener("click", function () {
      if (selectedCoin && selectedBoard !== this) {
        // Get the board ID
        selectedBoard = this.id;

        // Calculate the offset from coin to selected board
        const coinRect = selectedCoin.getBoundingClientRect();
        const boardRect = this.getBoundingClientRect();
        const offsetX = boardRect.left - coinRect.left;
        const offsetY = boardRect.top - coinRect.top - (stackedCoins[selectedBoard] * 50);

        // Create a new coin image and append it to the body
        const newCoin = selectedCoin.cloneNode();
        newCoin.style.position = "absolute";
        newCoin.style.width = coinRect.width + "px"; // Set width explicitly
        newCoin.style.height = coinRect.height + "px"; // Set height explicitly
        newCoin.style.left = coinRect.left + "px";
        newCoin.style.top = coinRect.top + "px";
        document.body.appendChild(newCoin);

        // Increment the number of stacked coins for the selected board
        stackedCoins[selectedBoard]++;

        // Animate the new coin to the selected board's position
        anime({
          targets: newCoin,
          translateX: offsetX,
          translateY: offsetY,
          duration: 1000, // Animation duration in milliseconds
          easing: "easeOutQuart", // Easing function for smooth animation
          complete: function () {
            // Deselect the coin and board after animation
            selectedCoin.classList.remove("selected");
            selectedCoin = null;
            selectedBoard = null;
          }
        });
      }
    });
  });
});