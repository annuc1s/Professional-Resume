# Personal Portfolio/Resume

This project operates as a virtual resume. It provides a platform for the creator to introduce themselves to 
potential employees and showcase their skills as a web developer. It can also attract other developers who may 
wish to collaborate.

## UX

This websites main target audience is potential UI/UX employers. These users can use this page to assess the 
designer/creator and decide if they have the skills and abilities that they are looking for. They can then contact the 
developer directly. This webpage covers all the main aspects of a Curriculum Vitae, such as personal statement, education,
experience and a contact option. In addition it showcases projects that the developer has worked on, or is currently 
working on.

### User stories

It is believed that first impressions matter, thus the home-page has to be striking and inviting, creating curiousity.

* As the user loads the page they are introduced to the developer by their first name, creating a personal connection;
* They are then informed of the developers skill area and geographic location;
* At this point, the user can make a decission on whether or not this is someone they would like to laern more about;
* By choosing to explore the site they can click on the "quick intro" button to get some background information about the 
developer;
* They could also choose not to interact with this option and decide that they would like to go straight to the developers 
experience;
* This can be done by either scrolling down the single page design or click on "experience" at the top right hand corner 
which will bring them straight to the experience section;
* The user is presented with an interactive tab-bar of the developers 4 main fields of expertise, with the web development 
tab active. As it is the position that the developer is looking for;
* The user then can either keep scrolling to reach the work/project section or choose to go back to the start of the page by 
clicking the back to top botton on the bottom right hand side and use the nav-bar once again.;
* In the work section the user can see home-pages of some projects that the developer has built and by hovering over them 
read a short description and enter the deployed site by clicking "Click Here";
* If the user wishes to see beyond the aesthetics of the site they can look into the current Github repositories 
that the developer has worked on or is currently working on, to see their coding abilities;
* After learning about the developer and examining their skills they can go to the contact form to make that job offer;
* Or they could give feedback on the work that they have seen and how it can be improved for when the next potential 
employer comes across this resume.

### Wireframes

Wireframes can be accessed in: 
1. Wireframes/coputer-wireframe.jpg 
2. Wireframes/phone-wireframe.jpg

## Features

### Existing Features

* Menu/navigation feature - allows the user to navigate through the single page layout without scrolling;
* Intro Button - gives a more in depth overwiev introduction to developer;
* Tab feature - allows the user to navigate through developers professional experiences and interests;
* Contact feature - directly contacts the creator via email;
* Project hover - after hovering (or tapping for phone), project description is displayed with an anchor link to deployed 
web page;
* Github Repos - allows the user to access a particular Github repository for viewing and/or using;
* Back to Top -  brings the user back to the beginning of the web page;
* Anchor tag features - allows the user to access projects and repositories in a new tab/page;

### Features Left to Implement

* Add experience progress bars for different web development languages;
* Footer with other contact options and personal socials such as Instagram and LinkedIn;
* Project description when hovered over Github repositories;
* Add more complete projects;
* Hamburger menu for smaller displays to navigate website;

## Technologies Used

In order to create an Interactive FrontEnd project I used:
    * HTML
    * CSS
    * Bootstrap framework (for experience tab-bar)
    * JavaScript (for several buttons)
    * JQuery to short-hand some script in sendEmail.js and githubRepos.js
    * Github APIs (to display my own github repositories)
    * EmailJs (to link contact form directly to my personal email)

I used https://fonts.google.com/ to source the fonts for this project.
fontswesome.com/ was used for icons.

If I came accross an issue I used stackoverflow.com and w3schools.com to see example solutions.

These online resources are reliable and accessible to everyone.

## Testing

The website functions and responds as intended in the UX design. 
It is responsive to different screen sizes.
It is simple to navigate due to the consistancy in design. 
It is interactive and engaging.

HTML and CSS was put through an online code validator recommended by Code Institute and both came back with no errors.

JavaScript codes were enetered in JSHint.com and I addressed some minor issues, however, githubRepos.js came back with 
errors: "is only available in ES6 (use 'esversion: 6')". I did not understand this error so I left the code untouched.

The website has been tested in multiple browser such as Chrome, Mozilla and Mi browser(phone browser), it works consistantly. 

### Features Tested

* The navigation bar is responsive, it brings the user to the correct section of the page;
* All anchor tags open a new page/tab;
* Interactive tab funcion works efficiently;
* Contact form cannot be submitted unless all fields are filled out, automated "Please fill in this field" pops up;
* Where applied, hovers are responsive;
* Page content aligns to a narrower margin on screen sizes smaller then 700px;
* On screens smaller then 700px, projects stack each other.
* Back to top button appears after the user scrolls down 20px from the top of the document, and works when clicked on;

To test if JavaScript files are linked correctly I used the dev tools.
Dev tools also came in handy when the code did not run as intended.

### Bugs addressed

* I was struggling to get Github APIs to run correctly and display, I went through many failed versions of the code 
before I finally got it to work. 

### Bugs not yet addressed

* I had initially created the hamburger menu for smaller screen sizes and it was functioning as it was supposed to,
but somewhere along the line, the function no longer responded. At the moment I have removed it from my project and 
intend to work on it at a later time. 

## Deployment

I decided to use GitHub Pages to deploy my project. I found this process very efficient and easy. 
1. I selected Professional-Resume project repository;
2. Changed the source settings;
3. And was provided with a link to my live website.

In order for others to view my source code, the repository is made public and can be cloned or downloaded as necessary. 
In order to clone they need to use git in a repository terminal (git clone //repositoryURL). They can access the cloneable URL link from my github 
repository.

A specific commit can also be selected in order to track the project progress.

## Credits

### Content

I would like to give credit to Marc Brüderlin for creating particles.js, his work can be accessed at https://github.com/marcbruederlin/particles.js .

### Media

The photos used in this site were obtained from my personal work.

### Acknowledgements

I recieved inspiration for this project from https://www.awwwards.com/inspiration/search?text=resume.= .

I would like to say thanks to my mentor and the amazing Slack community for helping me complete this project.


