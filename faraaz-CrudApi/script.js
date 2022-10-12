var selectedRow = null

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["productId"] = document.getElementById("productId").value;
    formData["productName"] = document.getElementById("productName").value;
    formData["categoryName"] = document.getElementById("categoryName").value;
    formData["categoryId"] = document.getElementById("categoryId").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.categoryName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.categoryId;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("productName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("categoryName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("categoryId").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productId;
    selectedRow.cells[1].innerHTML = formData.productName;
    selectedRow.cells[2].innerHTML = formData.categoryId;
    selectedRow.cells[3].innerHTML = formData.CategoryName;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("productId").value = '';
    document.getElementById("productName").value = '';
    document.getElementById("categoryName").value = '';
    document.getElementById("categoryId").value = '';
    selectedRow = null;
}
