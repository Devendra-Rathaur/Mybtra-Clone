console.log("Welcom to Myntra");
function validateForm() {
    var name = document.myForm.name.value;
    var mynumber = document.myForm.mynumber.value;
    var address = document.myForm.address.value;
    var landmark = document.myForm.landmark.value;
    if (name == null || name == "") {
        alert("Name cant be blank");
        return false;
    }
    else if (mynumber == null || mynumber == "") {
        alert("Number cant be blank");
        return false;
    }
    else if (address == null || address == "") {
        alert("Address cant be blank");
        return false;
    }
     else if (landmark == null || landmark == "") {
        alert("Landmark cant be blank");
        return false;
    }

}