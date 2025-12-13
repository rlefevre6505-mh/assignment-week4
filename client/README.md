# User Stories

🐿️ As a user, I’d like to fill out a working form so that I can submit my information effectively and without issues.
🐿️ As a user, I want the application to work as expected on my mobile device so that I can access and use it conveniently on the go.
🐿️ As a developer, I want to create a working API GET route so that I can retrieve data from the server and display it to the users.
🐿️ As a developer, I want to create a working API POST route so that users can send data to the server and store it.
🐿️ As a developer, I want to create and seed a database with dummy data so that I have realistic test data for development purposes.
Requirements
🎯 Ensure your HTML form is working and submitting data into the database as expected.
🎯 Confirm that your project is functional on multiple screen sizes using either Responsive Design or media queries.
🎯 Create a working GET API route in your server.
🎯 Create a working POST API route in your client.
🎯 Seed your database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in your server. Ensure that this is saved and submitted (in a screenshot or seed file form) so it can be marked and tested efficiently.

# Stretch User Stories

🐿️ As a user, I want additional functionality on the form such as form validation so that I can have a more interactive experience when submitting my information.
🐿️ As a user, I want the website to be visually impressive and user-friendly so that it provides a pleasant browsing experience.
🐿️ As a user, I would like to be able to delete posts.

🏹 Provide additional functionality on the form, for example, by adding form validation or other options.
🏹 Style the page excellently, for example, by adding extra UX considerations or animations.

# reflections

🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

# reflections

Starting this assignment, I managed to get my client and server set up and working without too many issues for the GET route and managed to work out the POST route fairly easily after that. However, although this has helped my understanding of these systems, with so many different moving parts, I still feel like I don't understand half of it! Any recommended reading/resources would be appreciated to help me understand what is doing what in the process.

I feel I have successfully fulfilled all the basic requirements/user stories, and have also added HTML form validation (required) and implemented javascript to limit date entry past the current date (MDN and W3 were useful in figuring this out). I added some additional functionality in the page by allowing the user to sort the old reviews by oldest of latest, using one dynamic button.

I would have liked to include an option to like other user's reviews (maybe just tallying the total existing number of reviews and adding to that so each review has a total number of likes ot display) but once I had finished the rest of assignment, this felt like a large undertaking (though it probably would hav ebeen achievable) with careers assignments to complete as well.

I was unable to implement confirmation of successful form submission to the database for users to see, though I did attemp this breifly (code is left commented out in app.js, line 27). Any feedback on what I could have done to confirm submission to the database and pass confirmation to the user would be appreciated.

For some reason, on load the page gives an error in the console, "TypeError: Cannot read properties of undefined (reading 'date_in')", and I con't see why. The following line refers to date_out and produces no error, and both of these are columns in my database. The function also runs as intended, despite spiktting out an error! Again, any insight would be appreciated.

When testing wiht lighthouse, the page score amber for effici
