const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let currentDate = `${year}-${month}-${day}`;
const dateSetter1 = document.getElementById("date-setter1");
dateSetter1.setAttribute("max", currentDate);
const dateSetter2 = document.getElementById("date-setter2");
dateSetter2.setAttribute("max", currentDate);

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
  const form = document.getElementById("review-form");
  form.reset();
  // if (response.staus == "success") {
  //   const successMessage = document.createElement("p");
  //   successMessage.textContent =
  //     "Review submitted. Thank you for your feedback.";
  //   const docElement = document.querySelector(".comments");
  //   docElement.appendChild(successMessage);
  // }
}

reviewForm.addEventListener("submit", handleSubmit);

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
  for (let i = 0; i < data.length || i < 50; i++) {
    const reviewBox = document.createElement("div");
    const detailsP = document.createElement("p");
    const commentsP = document.createElement("p");
    const dateInString = data[i].date_in.toString();
    const dateOutString = data[i].date_out.toString();
    const dateIn = dateInString.slice(0, 10);
    const dateOut = dateOutString.slice(0, 10);
    detailsP.textContent = `Review by ${data[i].name} from ${data[i].location}, who stayed with us from ${dateIn} to ${dateOut}:`;
    commentsP.textContent = `${data[i].comments}`;
    reviewBox.classList.add("old-review");
    reviewBox.id = i;

    reviewBox.classList.add("review-box");
    detailsP.classList.add("details-p");
    commentsP.classList.add("comments-p");

    reviewContainer.appendChild(reviewBox);
    reviewBox.appendChild(detailsP);
    reviewBox.appendChild(commentsP);
  }
}

renderReviews(retrieveReviews());

const sortButton = document.getElementById("sort-button");

sortButton.addEventListener("click", function () {
  if (sortButton.innerText == "sort by: oldest") {
    sortButton.innerText = "sort by: latest";
    reviewContainer.classList.remove("previous-reviews-reverse");
    reviewContainer.classList.add("previous-reviews");
  } else if (sortButton.innerText == "sort by: latest") {
    sortButton.innerText = "sort by: oldest";
    reviewContainer.classList.remove("previous-reviews");
    reviewContainer.classList.add("previous-reviews-reverse");
  }
});
