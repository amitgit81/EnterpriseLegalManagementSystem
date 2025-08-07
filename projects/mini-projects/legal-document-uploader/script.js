var caseId = document.getElementById("case-id-error").value;
var clientName = document.getElementById("client-name-error").value;
var documentName = document.getElementById("document-name-error").value;

function validateCaseId() {
    if(caseId.length == 0) {
        caseId.innerHTML = "Case ID is required";
    } else {
        caseId.innerHTML = "";
    }
    return caseId.length > 0;  // returning true if case ID is valid
}

function validateClientName() {
    if(clientName.length == 0) {
        clientName.innerHTML = "Client Name is required";
    } else {
        clientName.innerHTML = "";
    }
    return clientName.length > 0;  // returning true if client name is valid
}





