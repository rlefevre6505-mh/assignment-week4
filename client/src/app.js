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

//TODO: fetch the GET route from the server

async function retrieveReviews() {
  const response = await fetch(
    "https://guestbook-server-1j5c.onrender.com/storedreviews"
  );
  const data = await response.json();
  console.log(data);
  return data;
}

//TODO: render the data using DOM elements (one per piece of data)

const reviewContainer = document.getElementById("previous-reviews");

function renderReviews(reviewData) {
  for (let i = 0; i < previousReviews.length; i++) {
    const reviewBox = document.createElement("p");
    reviewBox.textContent = `Review by ${reviewData[i].name} from ${reviewData[i].location}, who stayed wiht us from ${reviewData[i].date_in} tot ${reviewData[i].date_out}: )`;

    reviewBox.classList.add("old-review");
    reviewBox.id = i;
    reviewContainer.appendChild(reviewBox);
  }
}

renderReviews(retrieveReviews());
