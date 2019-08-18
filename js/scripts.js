// Get the form Element.
// querySelector is like getElementById
const form = document.querySelector("#akanForm");

// Define the akan names function.
function getAkanName(gender, yy, mm, dd, cc = 20) {
  // The object with the male names.
  const maleNames = {
    0: "Kwasi",
    1: "Kwadwo",
    2: "Kwabena",
    3: "Kwaku",
    4: "Yaw",
    5: "Kofi",
    6: "Kwame"
  };

  // The object with the female names.
  const femaleNames = {
    0: "Akosua",
    1: "Adoa",
    2: "Abenaa",
    3: "Akua",
    4: "Yaa",
    5: "Afua",
    6: "Ama"
  };

  // The date function rounded off to the nearest digit.
  let day = Math.round(
    (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7
  );

  // Return the object value using the key
  // (this is the result of the calculation)
  // given the gender.
  if (gender === "male") {
    return maleNames[day];
  } else {
    return femaleNames[day];
  }
}

form.addEventListener("submit", function(e) {
  // Stop the form from submitting to the server.
  e.preventDefault();

  // Get the values.
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let day = document.querySelector("#bday-day").value;
  let month = document.querySelector("#bday-month").value;
  let year = document.querySelector("#bday-year").value;

  // Get the akan name from the function.
  let name = getAkanName(gender, year, month, day);
  document.querySelector("#result").innerHTML = name;
});
