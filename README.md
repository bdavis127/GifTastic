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

Use Node JS to create a LIRI bot, like iPhone's SIRI, but takes in commands through Language vs Speech using the following commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`
   
   
## Tech

**GitHub** - file repository

**Visual Studio Code** - text editor

**Node.js**

**APIs:**

  * **Spotify** (https://developer.spotify.com/)
  * **OMDB** (http://www.omdbapi.com) 
  * **Bands In Town** (http://www.artists.bandsintown.com/bandsintown-api)

**NPM Packages:**

  * **Node-Spotify-API** (https://www.npmjs.com/package/node-spotify-api)
  * **Axios** (https://www.npmjs.com/package/axios)
  * **Moment** (https://www.npmjs.com/package/moment)
  * **DotEnv** (https://www.npmjs.com/package/dotenv)

   
## Prerequisites

- Node.js - download the latest version of Node (https://nodejs.org/en/).

- Make a new GitHub repository called **liri-node-app** and clone it to your computer.

- Send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs.

  
## What Each Command Does

**LIRI** searches **Bands in Town** for concerts, **Spotify** for songs, and **OMDB** for movies.

1. **`node liri.js concert-this '<artist/band name here>'`**

   * Searches the Bands in Town Artist Events API for an artist and renders the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (using the format "MM/DD/YYYY")

2. **`node liri.js spotify-this-song '<song name here>'`**

   * Displays the following information about the selected song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album containing the song

   * If no song is provided, the program defaults to "The Sign" by Ace of Base.

3. **`node liri.js movie-this '<movie name here>'`**

   * This will output the following movie information to your terminal/bash window:

     ```
       * Title
       * Year movie was released
       * IMDB Rating
       * Rotten Tomatoes Rating
       * Country where movie was produced
       * Language(s)
       * Plot of the movie
       * Actors in the movie
     ```

   * If the user does not enter a movie selection, the program outputs data for the movie 'Mr. Nobody.'

4. **`node liri.js do-what-it-says`**

     * Runs `spotify-this-song` for "I Want it That Way".
     

## Demonstration Video
     
To see a YouTube video demonstrating how Liri works, just click on the following link:

https://youtu.be/yzqoh0124zo
