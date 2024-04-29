# Workshop 5：Data and visualisation

## URL:



## Tasks:

- Produce a 'data self-portrait' in a p5.js sketch by making a visualisation that shows something about yourself from a dataset. Use a csv file to store the dataset.
- Experiment with different ways to present the data, e.g. using text, images, shapes, or colours.

## Note:

- Loading external data: Use the `loadTable()` function to load a CSV file and use the `preload()` function to load image files before the program runs.
- Creating a dropdown menu: Use the `createSelect()` function to create a dropdown menu and use the `option()` function to add options.
- Handling dropdown menu change events: Use the `changed()` function to bind a callback function to the dropdown menu's `change` event so that corresponding actions are triggered when the user selects a new option.
- Drawing a table: Use nested loops to iterate through the table data and use the `text()` function to draw text and shapes on the canvas.
- Displaying different data based on options: Use a `switch` statement to select images to display based on the option value and draw shapes or images based on the table data.
- Image drawing: Use the `image()` function to draw images on the canvas and dynamically adjust image position and quantity based on the table data.
- Variable scope: Ensure that the `select_option` variable is correctly passed between functions for use and update in different functions.

## Project:

For the fifth task of the workshop, a visualization table feature was created. It can draw the entire table and, through a dropdown menu, select different fruits. The quantities of different fruits change over time, and this change is represented by bar charts and images.