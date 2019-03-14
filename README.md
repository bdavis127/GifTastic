# Project: Band-Aid
**Band-Aid** is an app that lets you look up GIFs of different bands.

![](https://github.com/bdavis127/GifTastic/blob/master/assets/images/BandAid.PNG)

Live Link: https://bdavis127.github.io/Band-Aid/






## Overview

Band-Aid works by simply typing in your band of choice and viewing the GIFs.  Here's how it works:
1. Type the band into the search bar where it says **"ADD A BAND, DUDE!"** just below the **BAND SEARCH**.
2. Click the **ADD A BAND, DUDE!** button.
3. A button for your band is then created in the **BAND SEARCH**.
4. Click the button for your band, and the band GIFs will appear below.  If you don't see your GIFs, just scroll down to the bottom
   of your screen.

## Challenge

Create an app that interacts with the GIPHY API site to create GIFs related to a specific topic of interest.
    
## Tech

**GitHub** - file repository

**Visual Studio Code** - text editor

**Languages:**

**HTML**

**CSS**

**JavaScript**

**JQuery**

**API:**

  * **GIPHY** (https://developers.giphy.com/)

## Prerequisites

- Become familiar with the GIPHY API.

- Read about the following GIPHY parameters:
   - q
   - limit
   - rating

- Obtain a GIPHY API key.

  
## Instructions

1. Create an array of strings, each one related to a topic that is interesting to you, and save it to a variable called **topics**. 

2. App should take the topics in the array and create buttons in your HTML. 

   - Try using a loop that appends a button for each string in the array.

3. When user clicks on a button, the page should grab 10 static, non-animated GIF images from the GIPHY API and place them on the page.

4. When user clicks one of the still GIPHY images, the gif should animate.  If the user clicks again, it should stop playing.

5. Under every GIF, display its rating (PG, G, etc.)

