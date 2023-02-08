# Beef It Up Steakhouse

![Home Image](./docs/images/home-img.png)

## Table of Contents

* [Introduction](#introduction)
* [Project Goal](#project-goal)
   * [External Goal](#external-goal)
* [UI/UX](#uiux)
   * [Features](#features)
   * [Target Audience](#target-audience)
   * [Owner's Goal](#owners-goal)
   * [User's Goals](#users-goals)
   * [Wireframes](#wireframes)
   * [Design](#design)
       * [Design Choices](#design-choices)
       * [Color Choices](#color-choices)
       * [Images](#images)
       * [Fonts](#Fonts)
* [Technologies](#technologies)
* [Deployment](#deployment)
   * [Overall](#overall)
   * [Version Control](#version-control)
   * [Github Pages](#github-pages)
* [Bugs/Erros](#bugserrors)
* [Testing](#testing)
  * [Lighthouse Testing](#lighthouse-chrome-testing)
  * [Devices](#devices-used)
  * [Responsiveness](#responsiveness)
  * [Functional Testing](#functional-testing)
  * [Validators](#validators)
      * [Main Page Validator](#main-page)
      * [Menu Page Validator](#menu-page)
      * [Locations Page Validator](#locations-page)
      * [Contact Page Validator](#contact-page)
* [Credits](#credits)
  * [Pictures](#pictures)
  * [Code Related](#code-related)
* [Extra](#extra)

## Introduction
* A small Website built for a Steakhouse Restaurant with a simple but eye catching design.
* [Website Live](https://wesleyluiz21.github.io/BeefitUp-Restaurant-Project/)

## Project Goal

* The main goal is to provide a good user experience,connect and show futher information to the new and existing customers.
* Make the Restaurant look more professional and attractive for customers to attend.
* Show a bit of the Restaurant backstory to the customers

### External Goal

* The main goal is to have a website that matches both the restaurant philosophy and brand design.

## UI/UX

### Features

* Home Page
   * Main section with logo and a background image with 0.5 opacity.
   * About Section with some backstory and an eye catching image with 0.5 opacity.
* Menu Page
   * A Bootstrap carousel contaaining 3 images.
   * Restaurant menu section containing Foods and drinks information with prices.
   * Footer with icons, logo and copyright notice.
* Restaurant Page
   * A H1 Title.
   * Bootstrap cards containing restaurant images.
   * Locations and Opening times.
* Contact Page
   * A H1 Title.
   * two H2 Titles.
   * Email links with actual 'mail to' links that opens email when clicked.
* All pages Have:
   * Responsive design.
   * Responsive navigation bar that has a script that change color/state when the user scrolls up and down the page.
   * Footer with icons, logo and copyright notice.

### Target Audience

* Current customers interested find more locations of the Restaurants.
* New customers interested in making enquires or finding more about the Restaurant chain.
* All meat lovers.

### Owner's Goal

* The main goal is to catch new potential customers.
* Also, let new and current customers get information about the restaurant locations and opening times.
* Make it easier to get in touch with the restaurant.
* Make it easier to find the restaurant social media pages.
* Show the Restaurant looks.

### User's Goals

*  Being able to acess restaurant information such as locations and opening times.
*  Being able get futher information about the restaurant and it's past.
*  Easily navigate through the Website pages.
*  See a visual appealing website.
*  Be able to view the Website in diffent devices.
*  Be able to understand the website even if the user has desabilities.

### Wireframes

* The Website's sketch and wireframe was created in Figma as I felt more confortable with it.
* All sketches were done with a Wacom Pen Tablet.
* I've decided to create a wireframe/sketch and then design the whole project with Figma.
* I've decided to not design the mobile version as I was running out of time and there is no major changes to the content.
* Both Desktop and Mobile Sketches can be found below.
* Open the image in a new tab if possible to be able to actually see the sketch image.

![Sketch Image](./docs/images/wireframe.png)
![Sketch Image  mobile](./docs/images/sketch-mobile.png)

### Design

* I've decided to make more complex wireframes with Figma, as I felt it would save me time having the entire page design ready to be built.
* I tried to build the website following every page design carefully.

#### Main Page Design/Wireframe

![Main Page](./docs/images/main-page.png)

#### Menu Page Design/Wireframe

![Menu Page](./docs/images/menu-page.png)

#### Locations Page Design/Wireframe

![Locations Page](./docs/images/locations-page.png)

#### Contact Page Design/Wireframe

![Contact Page](./docs/images/contact-page.png)

#### Design Choices

* I've decided the make my own logo using the matching color scheme(red and white for the text).
* I've decided to make the logo as SVG file so I could use it for both the navigation bar and Home page.

![Design Assets](./docs/images/design-assets.png)

#### Color Choices

* The color scheme I selected was red, gray, white and black.
* There is two tons of gray, one is to the p text color and the darker one is to the Restaurant Locations card.
* I have added a light gray color to the p elements to diferentiate the p elements from the h1,h2... while still looking good.
* I have choose the red color to be the contrast color of the design, mainly because it is a warm color and can remind of fire/fireplaces and meat.
* I have choose the black color as the background color as it doesn't make the text hard to read while making a good match with red and white.


#### Images

* All images were taken from [Unsplash](https://unsplash.com/)
* The Unsplash Extension in Figma was very handy, making possible searching for the right images, free of copyrights.
* Then I was able to get to the image page in the Unsplash website through Figma.

#### Fonts 

* Permanent Marker - I choose this one because it gives a Restaurant Menu title feeling.(I found this font accidentally by playing with fonts in Figma/Photoshop and I felt it would fit the project design).

* Source Sans Pro - I choose this one to the general text and to have an actual normal font.

## Technologies

* HTML
   * Developed with HTML5.
* CSS3
   * Website styled with CSS3.
* Javascript (just a small script)
   * Added a small script to change the background color of the navigation bar when the user scroll up and down.
* Bootstrap 5
   * Website's structure build with Bootstrap 5.0.2 and custom css
* VS Code
   * Developed the entire Website using VS Code as I felt more confortable with it.
* Git
   * Used Git bash to push and commit code.
* Github
   * Used to host the source code and Git Pages to deploy the website. 
* Font Awesome
   * Used Font Awesome library to add the social media icons and the hamburger navigation icon.
* Google Fonts API
   * Used to select the fonts I've choosen for the project.
* Figma
   * Used to sketch, wireframe and design the whole project.
* Figma Unsplash Extension
   * Used to obtain high quality images free of copyrights to the project.

## Deployment

### Overall

* I was supposed to use Gitpod for this project, however I have decided to use the desktop VS Code as I'm very familiar with it and I felt like Gitpod would slow me down.
* Totally created using Visual Studio code as I stated above.

### Version Control

* The website was created locally using Visual Studio Code.
* Code was pushed to the repository using Gitbash terminal inside the Visual Studio Code.
* Code was added to the staging area using ```git add .```
* Changes were committed using  ```git commit -m 'comment'```
* Code was commited to the Github repository using ```git push```


### Github Pages

  * The website was deployed with Github pages following the steps below:
     * Clicked in settings icon in the github repository and then clicked in the Pages section from the left side menu
     * After that I had the option to select the Source, a branch and the root folder.
     * After I got back to Github pages and there was a link displayed to see the live website
     * The live link can be found [here](https://wesleyluiz21.github.io/BeefitUp-Restaurant-Project/)

## Bugs/Errors

* The initial plan was to use Bootstrap 6, however I had to go back to bootstrap 5 as I been struggling to make things work and I felt like it was a better choice overall.
* At first, in the process of creating the navigation bar with bootstrap, the code wasn't behaving the way it was supposed to be.
  * Fixed by reading the bootstrap 5 documentation carefully and decided to use the bootstrap navigation template.
* Found I bug causing the About have unwanted padding.
  * I had to play with bootstrap classes and customs css to fix it.
* Carousel Images overlapping each other in the mobile version.
  * Fixed by removing the HTML img attributes and added them directly to the columns css and adjusted with custom css.
* Restaurant Cards overflowing the parent div.
  * Fixed by removing a custom CSS fixed height to the parent div.
* Navigation links being broken in github pages.
  * Fixed by adding './' before the page links.

## Testing

### Lighthouse Chrome Testing
* The results for each page are presented below.
 
 #### Main Page
 ![Main Page Lighthouse](./docs/Lighthouse%20Images/main-page.png)

 #### Menu Page
 ![Menu Page Lighthouse](./docs/Lighthouse%20Images/menu.png)

 #### Locations Page
 ![Locations Page Lighthouse](./docs/Lighthouse%20Images/locations.png)

  #### Contact Page
 ![Contact Page Lighthouse](./docs/Lighthouse%20Images/contact.png)


### Devices Used:

* Google Pixel 6
* Desktop (1920x1080)
* Desktop (2 monitors/4k resolution)
* Laptop (1366x768)

### Responsiveness

* All pages uses the bootstrap breaking points, therefore they are responsive from Mobile to Laptop and Desktop screen sizes.
* All pages were tested using the devices above.
* All pages were tested using the Chrome Developer Tools.
* Tested on Chrome,Firefox and Edge.
* No issues related to the responsiveness.

### Functional Testing

* Navigation
   * All links works as intended.

* Footer Links 
   * All Icon links works as intended.
   * All footer icon links opens in a new tab.

* Main Page
   * Button that leads to the Locations Pages works as intended. 

### Validators

*  [HTML W3C Validator](https://validator.w3.org/)
   * Found a semicolon missing in the footer copyright symbol - fixed
   * Found a single double quotes in the code that had no purpose - fixed
   * Found a section tag in the menu page without closing tag - fixed
   * Found two closing div tags in the menu page that had no purpose - fixed
   * After fixing the above bugs/errors, there were no more errors found.

   #### Main Page 
   ![HTML Main Page Validator](./docs/validators%20images/html/main-page-validator.png)

   #### Menu Page
   ![HTML Menu Page Validator](./docs/validators%20images/html/menu-page-validator.png)

   #### Locations Page
   ![HTML Locations Page Validator](./docs/validators%20images/html/locations-validator.png)

   #### Contact Page
   ![HTML Contact Page Validator](./docs/validators%20images/html/contact-validator.png)

*  [CSS W3C Validator](https://jigsaw.w3.org/css-validator//)
   * No errors found.
   ![CSS Validator Picture](./docs/validators%20images/css/css-validator.png)

## Credits

  ### Pictures

  * Pictures taken from [Unsplash](https://unsplash.com/)
  * [Home Page Picture](https://unsplash.com/photos/cpkPJ-U9eUM) - Author: Emerson Vieira.
  * [About Section Picture](https://unsplash.com/photos/lanootd2FcU) - Author: Emerson Vieira.
  * [1st Carousel Picture](https://unsplash.com/photos/pe9dvM1rQkM) - Author: Tim Toomey.
  * [2nd Carousel Picture](https://unsplash.com/photos/RO6Ke69Szhg) - Author: Emerson Vieira.
  * [3rd Carousel Picture](https://unsplash.com/photos/lanootd2FcU) - Author: Emerson Vieira. (same as the about section picture)
  * [1st Restaurant Picture](https://unsplash.com/photos/1H30uRC1plc) - Author: Volkan Vardar.
  * [2nd Restaurant Picture](https://unsplash.com/photos/Ciqxn7FE4vE) - Author: Nick Karvounis.
  * [3rd Restaurant Picture](https://unsplash.com/photos/ZgREXhl8ER0) - Author: Adrien Olichon.
  * [4th Restaurant Picture](https://unsplash.com/photos/WWST6E8LxeE) - Author: Paul Griffin.

  ### Code Related

  * Stackoverflow and Bootstrap 5 documentation were used to solve all issues/bugs.
  * ChatGPT(or OpenIA) was used to generate random adresses in central london and restaurant description/about/goals in the About Section and then tweaked to fit the website/design(It was quite handy!).
  * CSS Prefixes code were taken from the [Autoprefixer](https://autoprefixer.github.io/) website.
  * Template code for the carousel section taken from the Bootstrap 5 documentation and tweaked to suit the site needs.

## Extra 

* To me, sketching, designing and developing the project was a very good experience, however I felt so overwhelmed when I was writing the Readme, there so much information.
* I can say that I have gained valuable experice with bootstrap 5 as I had to read and look carefully through the documentation in order to make things work as intended.
* Commiting often made me memorize so many bootstrap attributes and classes.
* I've been extremely busy in January and February so I guess I had to run agains the clock in order to finish the project in time.
* I'd like to give some special thanks to my mentor Richard Wells, he gave some valuable insights to build the project. Sadly I got a little busy with life and work so I didn't manage to have the two last sessions with him.