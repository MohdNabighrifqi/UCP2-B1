document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    let formData = new FormData(this);
    let formDataObj = {};

    // Iterate through form data and filter out empty values
    for (let [key, value] of formData.entries()) {
        if (value.trim() !== '') { // Check if value is not empty
            formDataObj[key] = value;
        }
    }

    // Format the data for SweetAlert display
    let alertText = "";
    Object.keys(formDataObj).forEach(key => {
        alertText += `${key}: ${formDataObj[key]}\n`;
    });

    // Display form data in SweetAlert dialog if there are non-empty values
    if (Object.keys(formDataObj).length > 0) {
        swal({
            title: "Form Data",
            text: alertText,
            icon: "success",
            button: "OK",
        });
    } 
    
});