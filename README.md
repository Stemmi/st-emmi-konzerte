# St. Emmi Konzerte
A history of live shows of my rock band St. Emmi

## Questions
Navigation / pagination: I read on 'updated' and created pagination now with a watcher. 
Works well, but: No visible query in the url. 

## To do list
Backend file structure / best practise: Where to put which functionality (services/controller)?
- Check if you can do more at the db level (joining shows & locations)

Navigation with queries
- (CardContainer)
- Use the updated function in vue.
- Read vue documentation about it.

What to check while posting? Valid user, valid location id... and how? Throw Error?
- Escape ot better get rid of code in text? → Decide!
- You don’t need to limit text – the db is doing it for you
- REALLY? My db test did say something different...

Error handling
- create a small .js with a function that throws an error, check what happed if you call it from a function call, from an async funtion, from a try/catch block, from one within the other… experiment!
- Async throws error automatically

Fix: One day date offset
- At db, always use UTC (cenntrailzed, fiexed time without DST (summer/winter)).
- Or Unix epoch (seconds from 01.01.1970)
- handle time zones in frontend
- look at database/db.js / connection
- check time zone settings in DB: SHOW VARIABLES;

Fix: Back button from detail view does not work properly
Fix: Maps marker shows comma when date is missing (and no link)

New blog post: handle locations existing / new
New blog post: handle bands

Host images in backend folder, not in frontend folder
New blog post / Uploading images: Use Multipart Form Data

Fix: Alt-Text color if image is missing
Fix: placeholder if image is missing

edit
delete

Feat: Implement location url in detail view and in detail map popup

Feat: Navigate back to last page from detail view

??? Remove unneeded elements from getters

### Bonus 3: New Blog Post
    The form is cleared after adding a new blog post and the user gets directed to the Dashboard, again.

    For the images: Save the image in your project manually in the public folder and use it with relative path as string.
    For instance: The image barcelona.jpg saved under public/images can be linked in the templates with "/images/barcelona.jpg".

    Only signed in user can add new blog posts.

    Create Components or form, location form and bands form

### Bonus 4: Edit Blog Posts

    At the /post/:id page, add an "edit" icon.
    If the user clicks that, the blog post turns into editable mode and entries can be updated and saved.

    Take into consideration using the same form component, which you might have defined for creating new blog post.

    The values of the form are pre-filled with the data from the blog post.
    On form submit the blog post gets updated and sent to the Backend.

### Bonus 5. Authentication / Login

    Add authentication to your BackEnd App
    If the login button is clicked, a login form is shown right below the login button under the menu bar.
    The User can login with their email and password.
    If successfully logged in, the login form disappears and instead of the login button a logout button is shown.
    If logged in, there should be another button for adding a new blog post (icon + text: "New blog post") on the left of the logout button. It links to /new, where the logged-in user can add a new blog post.

### Bonus 6: Provide a user profile page

    Add a link in the menu bar, where the signed-in user can edit their profile.
    At the profile page, the signed-in user can upload a profile image and save their name.
    Use this information, if available,
        on the page where a user can add new blog entries and
        in the menu to show logged in users name and image.

### Modalities and Submission see:
https://github.com/hamburgcodingschool/fullstack-2022-4_vuejs/blob/main/project.md

### Styling
- Grow and shrink preview cards
- use space between / space around
- button hover: svg color
- Optimize responsiveness

### DB
Fill the db

## Imprint / Contact
Create a link /contact in the menu bar named "Contact".
On the contact page place your (and your team mate's) name.
Write two sentences about your project.
Put your (or if you prefer Hamburg Coding School's) contact details:
    name
    address
    email
    phone number
Write a note that this was a project from a course at Hamburg Coding School.

### misc
- settings -> .env?
- Load placeholder if image not found
- Additional Link in Preview to center the map at the location?
Or / and centralizing the map or growing of the marker @hover over preview?
- Try different Maps: GoogleMaps
- Try to hide the mapbox token from github by outsourcing it into a gitignored file.
- Naming: CardContainer / PreviewCard... better: ShowsContainer, ShowPreview, ShowDetail?
- Delete unused / out commented elements
- Write ReadMe Files