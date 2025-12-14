# Assignment week4

A full stack web app, with user data submitted to and retrieved from a database

# reflections

Starting this assignment, I managed to get my client and server set up and working without too many issues for the GET route and managed to work out the POST route fairly easily after that. I did encounter errors throughout the process, but was able to use these in combination with cnosole.log/console.info to troubleshoot as I went along. However, although this has helped my understanding of these systems, with so many different moving parts, I still feel like I don't understand half of it! Any recommended reading/resources would be appreciated to help me understand what is doing what in the process.

I entered the first 5 reviews via the SQL editor in Supabase (screenshot attached with submission in Moodle), and submitted further reviews using the page, as a user.

I feel I have successfully fulfilled all the basic requirements/user stories, and have also added HTML form validation (required) and implemented javascript to limit date entry past the current date for date_in and the next day for date_out(so thatb guests can leave a review on their last full day, before check-out). MDN and W3 were useful in figuring this out. I added some additional functionality in the page by allowing the user to sort the old reviews by oldest of latest and adding a back-to-top button in the footer, which is fixed at the bottom of the viewport.

I would have liked to include an option for users to like other users reviews (maybe just tallying the total existing number of reviews and adding to that so each review has a total number of likes ot display) but once I had finished the rest of assignment, this felt like a large undertaking (though it probably would hav ebeen achievable) with careers assignments to complete as well.

I was unable to implement confirmation of successful form submission to the database for users to see, though I did attemp this breifly (code is left commented out in app.js, line 27). Any feedback on what I could have done to confirm submission to the database and pass confirmation to the user would be appreciated. I realise I could have forced a page refresh on form submission, allowing the new review to display at the top of the old reviews section below, but this seemed like a poor solution.

For some reason, on load the page gives an error in the console, "TypeError: Cannot read properties of undefined (reading 'date_in')", and I con't see why. The following line refers to date_out and produces no error, and both of these are columns in my database. The function also runs as intended, despite spiktting out an error! Again, any insight would be appreciated.

When testing with lighthouse and WAVE, the only issues flagged were orphaned labels and inouts with missing labels. This was flagged by both tools, but I cannot understand why. Every label containes for="placehholder-name", wiht every corresponding input containing name="placehholder-name". Although Lighthouse showed performance was good, I would have liked to optimise the images, as they are only displayed at a small size, but I ended up using web URLs instead of URLs to local files as when the files were local I could not get them to work from the "public" folder. They had worked in the "client" folder, but once moved to what I understand is the correct folder, I could not seem to get them ot display, wheter using the path or relative path, so any guidance on this would be good.

Overall I am happy with the functionality of the app, although the on-page features could have been built up further. I do feel the page looks a bit bland, but as styling beyond accessibility, readability and functionality was not the focus of the assignment, I think it is reasonable for the time constraints and my own lack of imagination in the planning stages.

NB. after what would have been my final Git Push, I found that the page does not always load data from the database quickly. The fix for this seems to be to go to the server page hosted on Render.com to push the server to wake up (as a free server on Render.com it is not wlays "awake"), which aleviates the issue for a period of time.
