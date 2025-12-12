// TODO: max all date entry as today
// const today = new Date();
// let day = today.getDate();
// let month = today.getMonth() + 1;
// let year = today.getFullYear();
// let currentDate = `${year}/${month}/${day}`;
// const dateSetter = document.getElementById("date-setter");
// dateSetter.setAttribute("max", currentDate);

//TODO: collect users' data and send to the server

const reviewForm = document.getElementById("review-form");

function handleSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(reviewForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);
  fetch("https://guestbook-server-1j5c.onrender.com/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
  // const form = document.getElementById("review-form");
  // form.reset();
}

reviewForm.addEventListener("submit", handleSubmit);

//===============================================

//TODO: render users' data on the interface

//fetch the GET route from the server

//render the data using DOM elements (one per piece of data)
