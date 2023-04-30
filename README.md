# St. Emmi Konzerte
A history of live shows of my rock band St. Emmi

## To do list

### Map for Blog Post Detail Page
No or different Popup?

### Map
Handle "dead" locations (locations without shows)
Check: Multiple shows at location

### Styling
Grow and shrink preview cards
use space between / space around

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

### Bonus 3: New Blog Post

    With the path /new a blog post form is shown, where a new blog post can be added.

    On submit, the new blog post is sent and stored to the backend.

    The form is cleared after adding a new blog post and the user gets directed to the Dashboard, again.

    To navigate between views, you can use the push method of the vue-router such as :

        this.$router.push({ path: '/home' });

    For the images: Save the image in your project manually in the public folder and use it with relative path as string.
    For instance: The image barcelona.jpg saved under public/images can be linked in the templates with "/images/barcelona.jpg".

    Only signed in user can add new blog posts.

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

### misc
Additional Link in Preview to center the map at the location?
Or / and centralizing the map or growing of the marker @hover over preview?

Try different Maps: GoogleMaps
Try to hide the mapbox token from github by outsourcing it into a gitignored file.

Optimize responsiveness

Naming: CardContainer / PreviewCard... better: ShowsContainer, ShowPreview, ShowDetail?

Delete unused / out commented elements