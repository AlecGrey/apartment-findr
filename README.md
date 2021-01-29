# Welcome to Apartment-Findr!

This project was built to demonstrate skills in React, Rails, and acquiring data in the absence of an API.  For those of you who have trouble with apartment-finding, this app is for you!  You can compare apples-to-apples, by viewing multiple neighborhoods by pricepoint, or at one neighborhood across price points, using our intuitive 3x3 grid system.  Each tile represents the bi-section of a price point and a neighborhood, meaning you can scroll left and right *within* a tile to see more apartments at that price in the neighborhood! You can also navigate into an apartment to view more images and learn more about the apartments.  Have fun, and happy apartment shopping!

## Instructions

##### This application has been deployed! [Click here](https://apartment-findr.herokuapp.com/) to explore the application!

1. Fork and clone this repo to begin.
2. Begin by installing all necessary Gems with `bundle install` in the main directory.
3. Navigate to the 'client' folder and install the frontend dependencies with `npm i`.
4. To start the web application, first seed the database by running `rails db:seed` from the Backend directory.
  - ***PLEASE NOTE:*** This application initially used a web-scraping script to get apartment information from Craiglist in SF.  The script is available in the db directory, however for ease of access, the seed file actually pulls the data from an imported module with JSON data (see 'seed-data-formatted.rb').  If you would like to use the web scraper, you must first install chromedriver, then replace the content of 'seeds.rb' with 'web-scraping-script.rb'.  This script may become obsolete if Craiglist changes their DOM format!
5. After seeding the database, start your server with `rails s` from the main directory, and spin-up the website with `npm start`!

Happy searching!

## Contributors

This project was developed by Stephen Ibanez, Matty Sallin, and Alexander Grey.  We will happily to accept contributors, so please send a request if you are interested!

## Licence

License Copyright 2021 Stephen Ibanez, Matty Sallin, Alexander Grey

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
