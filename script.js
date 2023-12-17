$(document).ready(function () {
    let fieldCount = 1;

    // Function to add text field
    $("#add-text").on("click", function () {
        let field = `<input type="text" name="text_field_${fieldCount}" placeholder="Text Field ${fieldCount}">`;
        $("#fields-container").append(field);
        fieldCount++;
    });

    // Function to add select field
    $("#add-select").on("click", function () {
        let field = `<select name="select_field_${fieldCount}">
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>`;
        $("#fields-container").append(field);
        fieldCount++;
    });

    // Function to save data and display in the table
    $("#custom-form").on("submit", function (event) {
        event.preventDefault();

        // Get form data
        const formData = $(this).serializeArray();

        // Display table headers
        const headers = $("#table-headers");
        headers.empty();
        formData.forEach(field => {
            headers.append(`<th>${field.name}</th>`);
        });

        // Display table data
        const tableBody = $("#table-body");
        const rowData = formData.map(field => field.value);
        tableBody.append(`<tr>${rowData.map(data => `<td>${data}</td>`).join('')}</tr>`);
    });
});
