$(document).ready(function () {
 // Array of bands 
 var bands = ["Devo", "Dead Kennedys", "Metallica", "System of a Down"];

 //function to re-render the HTML to display the appropriate content
 function displayBandInfo() { }

 // Event listener for all button elements
 $(document).on("click", ".band", function () {

     // In this case, the "this" keyword refers to the button that was clicked
     var band = $(this).attr("data-name");
     console.log(band);


     // Constructing a URL to search Giphy for the name of the person who said the quote
     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
         band + "&api_key=FefzsEHvaPDiEXhSUB98BMnYIXOrJxcx&limit=10";

     $.ajax({
         url: queryURL,
         method: "GET"
     }).then(function (response) {
    
         // Storing an array of results in the results variable
         var results = response.data;
         console.log(results)
         //Deletes Gifs prior to entering new ones
         $("#gifs-appear-here").empty();
         for (let i = 0; i < results.length; i++) {
             const element = results[i];
         // <img src = "image.jpg" alt = "image1">
                  
         var gifDiv  = $("<div>");

         var imageDiv =  $("<img>");
         imageDiv.attr("src", element.images.fixed_width_still.url) 
         imageDiv.attr("alt", band)
         imageDiv.attr("animatedImage", element.images.original.url)
         imageDiv.attr("stillImage", element.images.fixed_width_still.url)
         imageDiv.attr("currentState", "still")
         imageDiv.addClass("bandName")

         gifDiv.append(imageDiv);

         var ratingDiv = $("<p>");
         ratingDiv.text(element.rating)

         gifDiv.append(ratingDiv);

         $("#gifs-appear-here").append(gifDiv);
         

         }

     })
 })
 $(document).on("click", ".bandName", function () {
     var currentState = $(this).attr("currentState");
     if (currentState === "still") {
         $(this).attr("src", $(this).attr("animatedImage"))
         $(this).attr("currentState", "animate")
     }
     else {
         $(this).attr("src", $(this).attr("stillImage"))
         $(this).attr("currentState", "still")
     }
 })
 // Function for displaying band data
 function renderButtons() {

     // Deleting the band buttons prior to adding new band buttons
     // (this is necessary otherwise we will have repeat buttons)
     $("#buttons-view").empty();

     // Looping through the array of bands
     for (var i = 0; i < bands.length; i++) {

         // Then dynamicaly generating buttons for each band in the array.
         // JQuery command to create button start and end tag.
         var a = $("<button>");

         // Adding a class
         a.addClass("band");
         // Adding a data-attribute with a value of the band at index i
         a.attr("data-name", bands[i]);
         // Providing the button's text with a value of the band at index i
         a.text(bands[i]);
         // Adding the button to the HTML
         $("#buttons-view").append(a);
     }
 }
 // This function handles events where one button is clicked
 $("#add-band").on("click", function (event) {
     // event.preventDefault() prevents the form from trying to submit itself.
     // We're using a form so that the user can hit enter instead of clicking the button if they want
     event.preventDefault();

     // This line will grab the text from the input box
     var band = $("#band-input").val().trim();
     // The band from the textbox is then added to our array
     bands.push(band);

     // calling renderButtons which handles the processing of our movie array
     renderButtons();
 });

 // Calling the renderButtons function at least once to display the initial list of movies
 renderButtons();
})
