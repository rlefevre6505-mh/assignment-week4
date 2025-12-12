//TODO: collect users' data and send to the server

const reviewForm = document.getElementById("review-form");

function handleSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(reviewForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);
  fetch("https://guestbook-client-2nen.onrender.com/reviews", {
    //! Once you finish your project, replace your localhost url with the deployed server url from Render
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

reviewForm.addEventListener("submit", handleSubmit);

//===============================================

//TODO: render users' data on the interface

//fetch the GET route from the server

// render the data using DOM elements (one per piece of data)
