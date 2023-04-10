# St. Emmi Konzerte
A history of live shows of my rock band St. Emmi

## Tasks
done:

to do:

Bonus 2: Get Blog Posts from Backend
- Frontend / Backend in different repos?
- Create a seperate Node.JS application to handle the BackEnd
- Serve your Blog Posts thourgh a REST Api with JSON
- Express: Use one route per table

DB:
rename: subtile --> title
authors --> users (and everywhere else!!!!)
Check relationships
relationship incompatible? check signed / unsigned
MYSQL Workbench: „Sync Model“

---
PreviewContainer:
- When user clicks on one of the listed blog post than she gets linked to the detail page /post/:id
- Place a link in Mapbox popup to /post/:id

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