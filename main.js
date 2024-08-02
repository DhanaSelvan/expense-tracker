const addButton = document.getElementById("add-btn");
// // const expensesList = document.getElementById('expenses-list');
var tot = 0

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;

  if (description && amount && category && date) {
    const transactionTable = document.querySelector('.tbody');
    console.log(transactionTable);
    const listItem = document.createElement("tr");
    listItem.innerHTML = `
            <td>${description}</td>
            <td>$${amount}</td>
            <td>${category}</td>
            <td>${date}</td>
            <td><button class="delete-btn">Delete</button></td>
            `;
    tot += Number(amount);
    transactionTable.appendChild(listItem);

    transactionTable.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-btn")) {
        const row = event.target.parentNode.parentNode;

        row.remove();
      }
    });

    var addamount = (document.querySelector(".value").innerHTML =
      "$" + tot + ".00");

    // Clear input fields
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
  } else {
    alert("Please fill out all fields.");
  }
});