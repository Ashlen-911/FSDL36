function calculateAge() {
    const dob = document.getElementById("dob").value;
    if (!dob) {
        alert("Please enter a valid date of birth.");
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerHTML = "You are " + age + " years old.";
}
