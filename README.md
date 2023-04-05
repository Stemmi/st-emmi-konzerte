# St. Emmi Konzerte
A history of live shows of my rock band St. Emmi

## Tasks
done:
- For each (blog post) location, put a marker on the map at the location of the post.
- Initially the map gets centered by the newest blog post entry.

to do:
Display Blog Posts at Location
- Make the markers clickable: on click, show the short preview of the blog post in the "InfoWindow".
- It contains:
   - title
   - visiting date
   - authors image and name (can be hardcoded)
   - Place a link, which links to the detail page: /post/:id
   - The InfoWindow can be closed by clicking on the "x" (which is placed at right-top in the InfoWindow

---
PreviewContainer:
- When user clicks on one of the listed blog post than she gets linked to the detail page /post/:id
- style: rounded edges

GoogleMaps:
- Formatting of the container (same height as Previewcontainer)
- Map
- Marker
- PreviewBox

Common:
- Author (Image & Name)

Create Additional pages:
- Contact Page
- Detail Page

Try different Maps:
GoogleMaps / MapBox / OpenStreetMap

Backend: Use a different github repo
Express: Use one route per table