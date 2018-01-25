// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


// 1. Define your variables by selecting the DOM elements that the user will interact with. 
// This is where your jQuery skills can come into play! For instance, the submit button, 
// the table, and the color picker need to be accessed. The value of the color selected 
// needs to be stored as well, since the clicked cell in the table needs to be set 
// to the selected color.

// 2. Add event listeners to the relevant DOM elements, so that user input can be color values 
// and table sizes can be dynamically set by the user.

// 3. Set the size of the cross stitch canvas as an N by M grid with the makeGrid() function. 
// Use your knowledge of JavaScript loops to dynamically clear and create the table based on user
// input. Each cell should have an event listener that sets the background color of the cell to 
// the selected color.

'use strict';

// Submit button
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  $('#pixel_canvas').empty();
  console.log('working...');
  let height = $('#input_height').val();
  let width = $('#input_width').val();
  
  // Calling makeGrid Function to create the grid
  makeGrid(height, width);
});

// Create Table
function makeGrid(height, width) {
  console.log('working...');
  for (let h = 1; h <= height; h++){
    $('#pixel_canvas').append('<tr></tr>');
  }
  for (let w = 1; w <= width; w++){
    $('tr').append('<td></td>');
  }
}

//Color Picker and change color on selected box
$('#pixel_canvas').on('click','td',function(){
  let color = $('#colorPicker').val();
  $(this).css('background-color', color);
});

