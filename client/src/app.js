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

const reviewContainer = document.getElementById("previous-reviews");

async function retrieveReviews() {
  const response = await fetch(
    "https://guestbook-server-1j5c.onrender.com/storedreviews"
  );
  const data = await response.json();
  return data;
}

async function renderReviews() {
  const data = await retrieveReviews();
  for (let i = 0; i < data.length; i++) {
    const reviewBox = document.createElement("p");
    const dateInString = data[i].date_in.toString();
    const dateOutString = data[i].date_out.toString();
    const dateIn = dateInString.slice(0, 10);
    const dateOut = dateOutString.slice(0, 10);
    reviewBox.textContent = `Review by ${data[i].name} from ${data[i].location}, who stayed with us from ${dateIn} to ${dateOut}:`;
    reviewBox.classList.add("old-review");
    reviewBox.id = i;
    reviewContainer.appendChild(reviewBox);
    //TODO: add function for user to like???
    console.log(dateIn, dateOut);
  }
}

renderReviews(retrieveReviews());
