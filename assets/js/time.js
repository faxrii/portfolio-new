let dateContainer = document.querySelector(".date");

var today = new Date();

year = today.getFullYear();
month = today.getMonth();
day = today.getDate();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = `${months[month]} ${day}, ${year}`;

dateContainer.innerText = date;
