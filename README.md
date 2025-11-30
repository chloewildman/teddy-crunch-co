# Chloe Wildman's Assignment 5 - Inventory Management Application

To meet the assignment requirements, I built the "Teddy Crunch Co." store web application, which has both a home page and the shop page (the majority of assignment requirements are on the Shop page), using React after installing Vite + React/Javascript.

As a note, the cart in the top right is intentionally not functional, just there to keep on theme!

## Inspiration/Acknowledgements/Previous Experience

### Module 5 reading
I referenced the module 5 reading to design to components, particularly list rendering.

### WAD100 Course

The use of reset.css and some CSS was inspired by the WAD100 course. Here are the key items I used as inspiration:
- The use of reset.css (not really able to make this one unique!)

### Previous assignments

I borrowed some CSS that I wrote from my previous assignments to get a starting point on header/footer/main styling. I adapted some of the nav bar as well, though this was significantly changed because I went with the top right menu rather than the centered menu as I did previously.

### Previous experience

In my day job, I was tasked with customizing a Help Center for my team, so I have some existing exposure and comfort with CSS.

### Online resources
The bear icon comes from https://www.svgrepo.com/ with some color customization.
The rest of the images come from https://www.canva.com/. There is a combination of stand-alone free images from Canva (such as the bubble tea, pocky, and raumune drink) along with elements that I combined to create a suitable image (such as the logo of the bears in the cart, the peach gummy candy, and mochi images)

## How My Project Meets Minimum Requirements

- React Setup
    - I set up React by installing Vite + React/Javascript.
    - My project is separated into components and pages with a clear structure.
        - /src/components/ contains reusable components, including the Header, Footer, InventoryItem, and InventoryList, while /src/pages/ contains React pages. CSS is installed into the relevant components from /src/css/. App and main are in the parent folder, /src/.

- Design the Home Page
    - The name and logo are prominently displayed on the header.
    - A list of current inventory items is displayed (please see the "Shop" page).
    - A footer is displayed at the bottom of the page.

- Inventory Data
    - Inventory data is stored in a JSON file.
    - There are 5 items.
    - Each item has SKU, name, qty, and price.

- Inventory Item Component
    - Created the reusable InventoryItem React component representing a single item, accepting an "item" prop.
        - Displays SKU, name, qty, price.

- Inventory List Component
    - Created the reusable InventoryList React component to render the list, using list rendering as covered in the module.
    - Imports and uses InventoryItem to render each item.

### Validity
- Valid: 
    - https://validator.w3.org/
    - http://jigsaw.w3.org/css-validator/ 


## How My Project Exceeds Minimum Requirements
- I designed an SPA which contains multiple React pages using BrowserRouter with functional links.
- Each page consists of main content that React can swap out, but the header and footer are also reusable components.
- Each item has an image.
- The site has a clear theme centered around a snack store with a teddy bear mascot.
- I hosted on Github Pages.