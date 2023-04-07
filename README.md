# St. Emmi Konzerte
A history of live shows of my rock band St. Emmi

## Tasks
done:

to do:
Cut code into smaller pieces. Use modules / services!
Invert the if/else logic, if it is not good to read.

Map marker popup:
- Multiple shows (wip)
- Place a link, which links to the detail page: /post/:id

Bonus 2: Get Blog Posts from Backend

    Create a seperate Node.JS application to handle the BackEnd
    Serve your Blog Posts thourgh a REST Api with JSON


Backend:
Frontend / Backend in different repos?

DB:
Check relationships
relationship incompatible? check signed / unsigned
MYSQL Workbench: „Sync Model“

Express: Use one route per table

---
PreviewContainer:
- When user clicks on one of the listed blog post than she gets linked to the detail page /post/:id

---

Blog Post Detail

    On clicking at the title or the image of the blog post preview, the blog post is opened at the detail page /post/:id.
    A back button at the details page (position: top-left) links back to the dashboard.
    The detail page shows the full blog post, with all information.

Content of a blog post
A blog post should contain:

    title
    visiting date
    authors name
    image
    text
    location with city and country

Bonus 1: Map for Blog Post Detail Page

    On the Blog Post Detail page, place a the map on the right side next to the blog post.
    The map shows centered the location of the blog post.

---

Imprint / Contact

    Create a link /contact in the menu bar named "Contact".
    On the contact page place your (and your team mate's) name.
    Write two sentences about your project.
    Put your (or if you prefer Hamburg Coding School's) contact details:
        name
        address
        email
        phone number
    Write a note that this was a project from a course at Hamburg Coding School.

---

Extras:

Bonus 3-6 see github

Additional Link in Preview to center the map at the location?
Or / and centralizing the map or growing of the marker @hover over preview?

Try different Maps: GoogleMaps
Try to hide the mapbox token from github by outsourcing it into a gitignored file.