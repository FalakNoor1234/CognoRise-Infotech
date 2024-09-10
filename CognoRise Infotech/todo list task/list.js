const itemInput = document.querySelector("#items");
const addButton = document.querySelector("#add-button");
const toDoBody = document.querySelector("#to-do-body");

addButton.addEventListener("click", function() {
    if (itemInput.value.trim() !== "") {
        addToDo(itemInput.value.trim());
        itemInput.value = "";
    }
});

const addToDo = (item) => {
    const tableRow = document.createElement("tr");

    // Create table data for the item
    const itemCell = document.createElement("td");
    itemCell.textContent = item;

    // Create table data for the action buttons
    const actionsCell = document.createElement("td");
    actionsCell.classList.add("actions");

    // Create Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.addEventListener("click", function() {
        const newValue = prompt("Edit item:", itemCell.textContent);
        if (newValue !== null && newValue.trim() !== "") {
            itemCell.textContent = newValue.trim();
        }
    });

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function() {
        tableRow.remove();
    });

    // Append buttons to actions cell
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    // Append cells to the row
    tableRow.appendChild(itemCell);
    tableRow.appendChild(actionsCell);

    // Append row to the table body
    toDoBody.appendChild(tableRow);
};
