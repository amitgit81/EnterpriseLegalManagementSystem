var caseIdError = document.getElementById("case-id-error");
var clientNameError = document.getElementById("client-name-error");
var documentNameError = document.getElementById("document-name-error");
var submitError = document.getElementById("submit-error");

function validateCaseId() {
    var caseid = document.getElementById("case_id").value;
    if (caseid.length == 0) {
        caseIdError.innerHTML = "Case ID is required";
        return false;
    } 
    if(!/^\d+$/.test(caseid)){                              /*          /^\d+$/.exec(caseid) technically works, but it's not ideal for simple true/false checks.
                                                                        Use .test() for cleaner, faster, and more readable validation.        */
                                                            /*  .exec() returns detailed match info (an array) or null.
                                                                .test() returns a simple true or false, which is perfect for validation.    */
        caseIdError.innerHTML = "Only digits are allowed";
        return false;
    }
    else {
        caseIdError.innerHTML = "";
    }
    return true;
}

function validateClientName() {
    var clientname = document.getElementById("client_name").value;
    if (clientname.length == 0) {
        clientNameError.innerHTML = "Client Name is required";
        return false;
    } 
    else if(!clientname.match(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/)){              //   /^[A-Za-z]+(?:\s[A-Za-z]+)+$/   Capture more than one word with spaces
        clientNameError.innerHTML = "Please enter full name using only letters";
        return false;
    }
    else {
        clientNameError.innerHTML = "";
    }
    return true;
}

function validateDocumentName() {
    var fileInput = document.getElementById("document_name");
    var filePath = fileInput.value;
    var allowedExtension = /(\.doc|\.pdf|\.docx)$/i;

    if (!allowedExtension.exec(filePath)) {         //when comparing regex with string, we can use like this - regex.exec(string) . Becuase exec() belongs to regex object
        documentNameError.innerHTML = "Please upload a valid document (.pdf, .doc, .docx)";
        return false;
    } else {
        documentNameError.innerHTML = "";
        return true;
    }
}

function validateForm(){
    if(!validateCaseId() || !validateClientName() || !validateDocumentName()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix the error";
        setTimeout(function() {
            submitError.style.display = "none";  
        }, 3000);
        return false;
    }
    return true;
}

document.getElementById("uploadForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    if (!validateForm()) {
        return false; // Stop if validation fails
    }

    const formData = new FormData(this);

    fetch("/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show response from Perl backend
    })
    .catch(error => {
        alert("❌ Upload failed.");
        console.error(error);
    });
});







