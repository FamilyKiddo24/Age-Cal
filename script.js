function calculateAge() {
    const yearInput = document.getElementById("year");
    const monthInput = document.getElementById("month");
    const dayInput = document.getElementById("day");
    const resultParagraph = document.getElementById("result");

    const year = parseInt(yearInput.value);
    const month = parseInt(monthInput.value) - 1; // Months are zero-based
    const day = parseInt(dayInput.value);

    const dob = new Date(year, month, day);
    const today = new Date();

    if (dob > today) {
        resultParagraph.textContent = "Invalid date of birth";
        return;
    }

    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    resultParagraph.textContent = "Your age is: " + age;
}
